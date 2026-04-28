"use client";

import Image from "next/image";
import { galleryData } from "./data";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { useLanguage } from "@/contexts/language-context";

export default function GaleriaDeArte() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white relative">
      {/* HEADER FLUTUANTE (opcional, mas estou usando o da Vantu) */}
      <Header />

      <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24">
        {/* CABEÇALHO MINIMALISTA DA GALERIA */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl lg:text-[80px] font-bold tracking-tight leading-[1.05]">
              {t('galeria.hero')}
            </h1>
          </div>
          
          <div className="flex gap-12 text-sm md:text-base whitespace-nowrap">
            <div>
              <p className="font-bold mb-1">{t('galeria.artistas')}</p>
              <p>Vantuir Januario</p>
              <p>Otávio Januario</p>
              <p>Pedro Januario</p>
            </div>
          </div>
        </div>

        {/* GRADE DE ARTE (MASONRY) */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {galleryData.map((item) => (
            <div key={item.id} className="break-inside-avoid">
              <div className="relative group w-full cursor-pointer overflow-hidden bg-gray-100">
                {/* Imagem Original */}
                <Image 
                  src={item.original} 
                  alt={item.title} 
                  width={800} 
                  height={1000} 
                  className="w-full h-auto object-cover transition-opacity duration-500 group-hover:opacity-0" 
                  priority={item.id.includes("001")}
                />
                
                {/* Imagem no Quadro (Aparece no Hover) */}
                {item.framed && (
                  <Image 
                    src={item.framed} 
                    alt={`${item.title} no quadro`} 
                    width={800} 
                    height={1000} 
                    className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100" 
                  />
                )}
              </div>
              
              {/* Legenda */}
              <div className="mt-4 mb-8 px-2">
                <p className="font-bold text-lg text-black">{item.artist}</p>
                <p className="text-gray-600">
                  {item.title} {item.dimensions ? `- ${item.dimensions}` : ''}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* CONTATO */}
      <section className="py-24 px-6 md:px-8 bg-[#F5F5F5]">
        <div className="container mx-auto max-w-5xl">
          <ContactForm />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
