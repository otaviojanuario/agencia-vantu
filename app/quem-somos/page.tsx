"use client";

import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ContactForm } from "@/components/contact-form"
import { useLanguage } from "@/contexts/language-context"

export default function QuemSomos() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white relative">
      <Header />

      <main className="pt-32">
        {/* SEÇÃO 1: O Nosso Manifesto */}
        <section className="container mx-auto px-6 lg:px-24 mb-24 pt-12 md:pt-20 max-w-7xl">
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold font-sans text-primary tracking-tight leading-[1.05] mb-8">
            {t('quemSomos.manifesto.title')}
          </h1>
          <p className="text-secondary text-lg md:text-xl lg:text-[22px] leading-relaxed font-sans max-w-6xl">
            {t('quemSomos.manifesto.text')}
          </p>
        </section>

        {/* SEÇÃO 2: A Origem: O Legado de Vantu */}
        <section className="bg-secondary text-white w-full">
          <div className="container mx-auto max-w-7xl relative flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24 py-20 px-6 lg:px-24 md:min-h-[600px]">
            {/* Imagem Origem */}
            <div className="w-full md:w-5/12 flex flex-col justify-center relative">
              <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold mb-8 leading-[1.1] text-accent">
                {t('quemSomos.origem.title')}
              </h2>
              <div className="relative w-full aspect-square max-w-md mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                <Image 
                  src="/quem-somos/644490805_26502886899306652_6763267245453972887_n.jpg"
                  alt="A Origem - Legado de Vantuir"
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Texto Origem */}
            <div className="w-full md:w-7/12 flex flex-col justify-center text-sm md:text-base lg:text-lg text-white/90 font-sans leading-relaxed space-y-6">
              <p>
                {t('quemSomos.origem.text')}
              </p>
            </div>
          </div>
        </section>

        {/* SEÇÃO 3: O Fundador */}
        <section className="bg-primary text-white w-full">
          <div className="container mx-auto max-w-7xl relative flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-24 py-20 px-6 lg:px-24 md:min-h-[600px]">
            {/* Texto Fundador */}
            <div className="w-full md:w-7/12 flex flex-col justify-center text-sm md:text-base lg:text-lg text-white/95 font-sans leading-relaxed space-y-6">
              <p>
                {t('quemSomos.fundador.text')}
              </p>
            </div>

            {/* Imagem Fundador */}
            <div className="w-full md:w-5/12 flex flex-col justify-center items-center md:items-end relative">
               <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold mb-8 leading-[1.1] text-right text-white w-full">
                {t('quemSomos.fundador.title')}
              </h2>
              <div className="relative w-full aspect-square max-w-[350px] mx-auto md:ml-auto md:mr-0 rounded-full overflow-hidden shadow-2xl border-4 border-white/20 grayscale hover:grayscale-0 transition-all duration-700">
                <Image 
                  src="/quem-somos/pp.jpeg"
                  alt="O Fundador - Otávio"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 4: Vamos nos conectar? (Formulário Atualizado) */}
        <section className="py-24 px-6 md:px-8 bg-background relative -mt-10 z-20">
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
