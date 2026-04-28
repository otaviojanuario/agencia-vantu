"use client";

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ContactForm } from "@/components/contact-form"
import { useLanguage } from "@/contexts/language-context"

export default function ProjetoMarandubaGi() {
  const { t } = useLanguage();
  const projectImages = [
    'image-01.png'
  ]

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white relative">
      <Header />

      <main className="pt-24 md:pt-32">
        {/* HERO SECTION */}
        <section className="container mx-auto px-6 lg:px-24 mb-16 pt-12 md:pt-20 max-w-7xl flex flex-col md:flex-row items-start justify-between gap-12">
          {/* Esquerda: Título */}
          <div>
            <h1 className="text-5xl md:text-[80px] font-bold font-sans text-primary tracking-tight leading-[1]">
              Maranduba Gi
            </h1>
            <p className="text-muted-foreground/80 mt-2 tracking-widest uppercase text-sm font-semibold">{t('projetosPage.cliente')}: Maranduba Gi</p>
          </div>

          {/* Direita: Serviços */}
          <div className="text-left md:text-right flex flex-col items-start md:items-end mt-4 md:mt-0">
            <span className="text-primary font-bold text-xl mb-1">{t('projetosPage.servicos')}:</span>
            <h2 className="text-2xl md:text-4xl font-sans font-semibold text-primary tracking-tighter">
              Site
            </h2>
          </div>
        </section>

        {/* DESCRIÇÃO DO PROJETO */}
        <section className="bg-secondary text-white w-full">
          <div className="container mx-auto px-6 lg:px-24 py-20 max-w-7xl">
            <div className="max-w-4xl text-sm md:text-base lg:text-lg text-white/90 font-sans leading-relaxed space-y-8">
              <p>
                {t('projetosPage.marandubagi.desc')}
              </p>
              
              <div className="pt-4">
                <Button asChild variant="outline" className="rounded-pill px-8 py-6 text-sm md:text-base font-bold uppercase tracking-widest border-white/40 text-white hover:bg-white hover:text-secondary bg-transparent transition-all">
                  <a href="https://www.marandubagi.com/" target="_blank" rel="noopener noreferrer">
                    {t('projetosPage.visitarSite')}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* GALERIA MASONRY (Uso das Imagens do Projeto) */}
        <section className="w-full bg-background pb-20 pt-10">
          {/* Layout em pilha (stacked) conforme referência do design, com alinhamento das bordas */}
          <div className="flex flex-col w-full container mx-auto px-6 lg:px-24 max-w-7xl">
            {projectImages.map((filename) => (
              <div key={filename} className="w-full">
                <Image
                  src={`/projetos/marandubagi/images/${filename}`}
                  alt={`Apresentação Maranduba Gi: ${filename}`}
                  width={1920} height={1080}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* SEÇÃO "Vamos nos conectar?" (Mesmo formulário da Home/Sobre) */}
        <section className="py-24 px-6 md:px-8 bg-background relative z-20">
          <div className="container mx-auto max-w-5xl">
            <ContactForm />
          </div>
        </section>

      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
