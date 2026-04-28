"use client";

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ParticlesBackground } from "@/components/ui/particles-background"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ContactForm } from "@/components/contact-form"
import { useLanguage } from "@/contexts/language-context"

const projetosData = [
  {
    id: "infocuscx",
    image: "/projetos/infocuscx/capa/CAPA-2.png",
    type: "Projeto Branding",
    name: "InfocusCX",
    bg: "bg-gray-200"
  },
  {
    id: "toca-da-patroa",
    image: "/projetos/toca-da-patroa/capa/CAPA.png",
    type: "Projeto Naming, Branding",
    name: "Toca da Patroa",
    bg: "bg-gray-200"
  },
  {
    id: "marandubagi",
    image: "/projetos/marandubagi/capa/CAPA.png",
    type: "Projeto Site",
    name: "Maranduba Gi",
    bg: "bg-[#E9EBE2]"
  },
  {
    id: "pimenta-coragem",
    image: "/projetos/pimenta-coragem/capa/CAPA.png",
    type: "Projeto Naming, Branding",
    name: "Pimenta Coragem",
    bg: "bg-[#E9EBE2]"
  },
  {
    id: "flor-de-maracuja",
    image: "/projetos/flor-de-maracuja/capa/CAPA.png",
    type: "Projeto Naming, Branding",
    name: "Flor de Maracujá",
    bg: "bg-[#E9EBE2]"
  }
];

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-foreground font-sans selection:bg-primary selection:text-white relative">

      {/* HEADER FLUTUANTE */}
      <Header />

      <main>
        {/* WRAPPER PARA HERO E QUEM SOMOS (Para partículas rolarem com a tela) */}
        <div className="relative overflow-hidden w-full">
          {/* Partículas abrangendo ambas as seções */}
          <div className="absolute inset-0 z-0 pointer-events-auto">
            <ParticlesBackground />
          </div>

          {/* HERO */}
          <section className="relative w-full pt-40 pb-24 px-6 flex justify-center min-h-[60vh] items-center z-10">
            <div className="container mx-auto relative w-full flex justify-start">
              <div className="max-w-4xl relative w-full">
                <h1 className="relative z-10 text-[64px] font-bold font-sans text-primary tracking-tight leading-[1.05] mb-6">
                  {t('home.hero.title')}
                </h1>
                <p className="relative z-10 text-[22px] font-sans text-primary/80 leading-relaxed mb-10 max-w-3xl">
                  {t('home.hero.subtitle')}
                </p>
                <a href={t('home.hero.ctaLink')} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="relative z-30 rounded-[32px] px-8 py-6 text-[20px] md:text-[24px] font-sans uppercase border border-secondary text-secondary hover:bg-secondary hover:text-white bg-transparent transition-all shadow-sm hover:scale-105 cursor-pointer">
                    {t('home.hero.cta')}
                  </Button>
                </a>
              </div>
            </div>
          </section>

        {/* QUEM SOMOS */}
        <section id="quem-somos" className="w-full relative z-10">
          <div className="bg-secondary text-white w-full py-24 pl-10 pr-10 md:pl-24 md:pr-32 lg:pl-32 lg:pr-64 flex flex-col md:flex-row gap-8 md:gap-16 items-center lg:items-center shadow-xl">
            
            <div className="flex flex-col gap-4 w-full md:w-1/3 shrink-0 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight text-[#ececec]">
                {t('home.sobre.title')}
              </h2>
            </div>


            <div className="flex flex-col gap-4 w-full md:w-2/3 shrink-0 font-sans text-base md:text-lg leading-[1.6] text-white/90">
              <p>
                {t('home.sobre.text1')}<strong className="text-white">{t('home.sobre.textBold')}</strong>{t('home.sobre.text2')}
              </p>
              <Link href="/quem-somos" className="flex items-center gap-2 text-white hover:text-white/80 transition-colors font-medium w-fit mt-2 text-sm">
                {t('home.sobre.link')} <span className="text-lg">→</span>
              </Link>
            </div>

          </div>
        </section>
        </div> {/* Fim do Wrapper das Partículas */}

        {/* PROJETOS */}
        <section id="projetos" className="py-24 px-6 pt-32 w-full max-w-[1920px] mx-auto overflow-hidden relative">
          <div className="container mx-auto flex items-center justify-center md:justify-between mb-16 px-6">
            <h2 className="text-4xl md:text-6xl font-bold text-secondary tracking-tight">{t('home.projetos.title')}</h2>
            {/* Setas de Navegação do Carrossel */}
            <div className="hidden md:flex gap-4">
              <button className="w-12 h-12 rounded-full border border-secondary text-secondary flex items-center justify-center hover:bg-secondary hover:text-white transition-colors text-xl pb-1" aria-label="Anterior" onClick={() => { const el = document.getElementById('project-carousel'); if (el) el.scrollBy({ left: -400, behavior: 'smooth' }); }}>
                ←
              </button>
              <button className="w-12 h-12 rounded-full border border-secondary text-secondary flex items-center justify-center hover:bg-secondary hover:text-white transition-colors text-xl pb-1" aria-label="Próximo" onClick={() => { const el = document.getElementById('project-carousel'); if (el) el.scrollBy({ left: 400, behavior: 'smooth' }); }}>
                →
              </button>
            </div>
          </div>

          <div id="project-carousel" className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory px-6 md:px-[6vw] pb-10 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {/* Project Cards Loops */}
            {[...projetosData, ...projetosData, ...projetosData, ...projetosData].map((p, idx) => (
              <Link key={idx} href={`/projetos/${p.id}`} className="group cursor-pointer shrink-0 w-[85vw] md:w-[400px] snap-center block">
                <div className={`aspect-[4/5] rounded-[32px] overflow-hidden ${p.bg} flex items-center justify-center relative mb-4 shadow-sm group-hover:shadow-lg transition-shadow`}>
                  <Image src={p.image} alt={`Capa ${p.name}`} fill className="object-cover transition-transform group-hover:scale-105 duration-700" />
                </div>
                <div className="flex flex-col gap-1 px-2 font-sans">
                  <span className="text-secondary text-sm font-bold">{p.type}</span>
                  <span className="text-primary text-xs font-mono font-bold uppercase tracking-widest mt-1">{p.name}</span>
                </div>
              </Link>
            ))}
            <div className="shrink-0 w-[4vw] md:w-[10vw]"></div>
          </div>
        </section>

        {/* SOLUÇÕES */}
        <section id="solucoes" className="py-24 px-6 container mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-secondary tracking-tight text-left">{t('home.solucoes.title')}</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Solução 1 */}
            <div className="bg-secondary rounded-[32px] p-8 md:p-10 flex flex-col justify-between text-white min-h-[320px] shadow-lg">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-[1.1] tracking-[-1px]" dangerouslySetInnerHTML={{ __html: t('home.solucoes.trafego.title').replace(' ', '<br/>') }}></h3>
                <p className="font-sans text-lg text-white/80 leading-relaxed">
                  {t('home.solucoes.trafego.desc')}
                </p>
              </div>
            </div>

            {/* Solução 2 */}
            <div className="bg-secondary rounded-[32px] p-8 md:p-10 flex flex-col justify-between text-white min-h-[320px] shadow-lg">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-[1.1] tracking-[-1px]">{t('home.solucoes.branding.title')}</h3>
                <p className="font-sans text-lg text-white/80 leading-relaxed">
                  {t('home.solucoes.branding.desc')}
                </p>
              </div>
            </div>

            {/* Solução 3 */}
            <div className="bg-secondary rounded-[32px] p-8 md:p-10 flex flex-col justify-between text-white min-h-[320px] shadow-lg">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-[1.1] tracking-[-1px]">{t('home.solucoes.tech.title')}</h3>
                <p className="font-sans text-lg text-white/80 leading-relaxed">
                  {t('home.solucoes.tech.desc')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTATO (Formulário Atualizado) */}
        <section id="contato" className="py-24 px-6 md:px-8">
          <div className="container mx-auto max-w-5xl">
            <ContactForm />
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <Footer />

      {/* WhatsApp Flutuante */}
      <WhatsAppButton />

    </div>
  )
}
