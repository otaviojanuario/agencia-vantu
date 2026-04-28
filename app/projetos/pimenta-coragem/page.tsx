"use client";

import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ContactForm } from "@/components/contact-form"
import { useLanguage } from "@/contexts/language-context"

export default function ProjetoPimentaCoragem() {
  const { t } = useLanguage();
  const projectImages = [
    'images-00.png',
    'images-01.png',
    'images-02.png',
    'images-03.png',
    'images-04.png',
    'images-05.png',
    'images-06.png',
    'images-07.png',
    'images-08.png',
    'images-09.png',
    'images-10.png',
    'images-11.png'
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
              Pimenta Coragem
            </h1>
            <p className="text-muted-foreground/80 mt-2 tracking-widest uppercase text-sm font-semibold">{t('projetosPage.cliente')}: Pimenta Coragem</p>
          </div>

          {/* Direita: Serviços */}
          <div className="text-left md:text-right flex flex-col items-start md:items-end mt-4 md:mt-0">
            <span className="text-primary font-bold text-xl mb-1">{t('projetosPage.servicos')}:</span>
            <h2 className="text-2xl md:text-4xl font-sans font-semibold text-primary tracking-tighter">
              Naming, Branding
            </h2>
          </div>
        </section>

        {/* DESCRIÇÃO DO PROJETO */}
        <section className="bg-secondary text-white w-full">
          <div className="container mx-auto px-6 lg:px-24 py-20 max-w-7xl">
            <div className="max-w-4xl text-sm md:text-base lg:text-lg text-white/90 font-sans leading-relaxed space-y-6">
              <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">{t('projetosPage.pimentaCoragem.title')}</h3>
              <p>
                {t('projetosPage.pimentaCoragem.desc')}
              </p>
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
                  src={`/projetos/pimenta-coragem/images/${filename}`}
                  alt={`Apresentação Pimenta Coragem: ${filename}`}
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
