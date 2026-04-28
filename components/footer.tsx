import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-black text-white pt-20 pb-12 px-8 rounded-t-[3rem] mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16 md:gap-24 w-full relative z-10">
        
        {/* Esquerda: Quick Links & Contato */}
        <div className="flex flex-col gap-10">
          <div className="text-primary font-mono text-xs uppercase font-bold tracking-widest space-y-4">
            <p><Link href="/quem-somos" className="hover:text-white transition-colors">{t('nav.quemSomos')}</Link></p>
            <p><Link href="/#projetos" className="hover:text-white transition-colors">{t('nav.projetos')}</Link></p>
            <p><Link href="/#solucoes" className="hover:text-white transition-colors">{t('nav.solucoes')}</Link></p>
          </div>

          <div className="text-xs font-mono text-white/60 space-y-2">
            <h5 className="text-white/40 mb-4 tracking-widest uppercase font-bold">{t('footer.contact')}</h5>
            <p className="hover:text-white cursor-pointer transition-colors">suporte@agencia</p>
            <p className="hover:text-white cursor-pointer transition-colors">contato@vantu.com</p>
          </div>
        </div>

        {/* Meio: Social */}
        <div className="flex flex-col gap-4">
          <h5 className="text-white/40 text-xs font-mono tracking-widest uppercase font-bold mb-2">{t('footer.social')}</h5>
          <a href="#" className="text-xs font-mono text-[#F5F5F5]/50 hover:text-white transition-colors">Linkedin</a>
          <a href="#" className="text-xs font-mono text-[#F5F5F5]/50 hover:text-white transition-colors">Instagram</a>
          <a href="#" className="text-xs font-mono text-[#F5F5F5]/50 hover:text-white transition-colors">Behance</a>
        </div>

        {/* Direita: Logo GIGANTE */}
        <div className="md:ml-auto select-none pt-10 md:pt-0">
          <div className="flex flex-col text-primary font-black tracking-tighter uppercase items-end leading-[0.8]">
            <span className="text-2xl md:text-3xl font-light tracking-[0.2em] mb-2 md:mb-1">Agência</span>
            <span className="text-7xl md:text-8xl lg:text-9xl">VANTU</span>
          </div>
        </div>
        
      </div>

      {/* Direitos Reservados */}
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-white/30">
          <p>{t('footer.rights')}</p>
          <p className="mt-4 md:mt-0">Políticas de Privacidade</p>
      </div>
    </footer>
  )
}
