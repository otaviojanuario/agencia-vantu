const fs = require('fs');
const path = require('path');

const dirs = [
  { path: 'public/galeria/vantuir', artist: 'Vantuir Januario' },
  { path: 'public/galeria/otavio', artist: 'Otávio Januario' },
  { path: 'public/galeria/pedro', artist: 'Pedro Januario' }
];

let items = [];

dirs.forEach(dir => {
  if (!fs.existsSync(dir.path)) return;
  const files = fs.readdirSync(dir.path).filter(f => (f.endsWith('.png') || f.endsWith('.jpeg') || f.endsWith('.jpg')) && !f.startsWith('.'));
  
  // Group by base name
  const grouped = {};
  files.forEach(f => {
    const isFramed = f.includes('_.');
    // Remove extension and framed indicator to get base name
    const ext = path.extname(f);
    const baseName = isFramed ? f.replace('_' + ext, '') : f.replace(ext, '');
    
    if (!grouped[baseName]) grouped[baseName] = {};
    if (isFramed) {
      grouped[baseName].framed = `/galeria/${path.basename(dir.path)}/${f}`;
    } else {
      grouped[baseName].original = `/galeria/${path.basename(dir.path)}/${f}`;
    }
  });

  for (const [baseName, paths] of Object.entries(grouped)) {
    // Extract info from baseName: e.g. 001_vantuir-45x54cm-Genese-Cromatica
    const parts = baseName.split('-');
    // the first part has the ID and artist, e.g. 001_vantuir
    // the second part is dimensions, e.g. 45x54cm
    // the rest is title
    let title = parts.slice(2).join(' ').replace(/-/g, ' ');
    const isVantuir = dir.artist === 'Vantuir Januario';
    const isNumberOrEmpty = !title || title.trim() === '' || !isNaN(title.trim());
    
    if (isNumberOrEmpty) {
      if (isVantuir) {
        if (title.trim() === '6') {
          title = 'Desenho a lápis';
        } else {
          title = 'Pintura a óleo';
        }
      } else {
        title = title.trim() ? `Obra ${title}` : 'Obra sem título';
      }
    }
    
    items.push({
      id: baseName,
      artist: dir.artist,
      title: title,
      dimensions: parts[1] || '',
      original: paths.original,
      framed: paths.framed
    });
  }
});

// Generate TypeScript content
const tsContent = `export const galleryData = ${JSON.stringify(items, null, 2)};\n`;
fs.writeFileSync('app/galeria/data.ts', tsContent);
console.log('Generated app/galeria/data.ts with', items.length, 'items');
