"use client";

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export function Header() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="fixed top-4 left-0 w-full z-50 flex justify-center px-4 md:px-6 pointer-events-none">
      <header className="w-full bg-white/80 backdrop-blur-md border border-white/20 shadow-sm rounded-full h-20 flex items-center justify-between px-6 md:px-10 pointer-events-auto transition-all">
        <div className="w-[120px]">
          <Link href="/">
            <Image src="/assets/LOGO-VANTU-ROXO.svg" alt="Agência Vantu" width={120} height={40} className="w-full h-auto" />
          </Link>
        </div>
        
        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex items-center gap-8 text-sm font-semibold text-secondary">
            <Link href="/quem-somos" className="hover:text-primary transition-colors">{t('nav.quemSomos')}</Link>
            <Link href="/#projetos" className="hover:text-primary transition-colors">{t('nav.projetos')}</Link>
            <Link href="/#solucoes" className="hover:text-primary transition-colors">{t('nav.solucoes')}</Link>
            <Link href="/galeria" className="hover:text-primary transition-colors">{t('nav.galeria')}</Link>
            <Link href="/#contato" className="hover:text-primary transition-colors">{t('nav.contato')}</Link>
          </nav>
          <div className="h-4 w-px bg-secondary/20"></div> {/* Separator */}
          <div className="flex font-mono text-xs font-bold gap-3 text-muted-foreground/50 cursor-pointer">
            <span 
              onClick={() => setLanguage('pt')}
              className={`hover:text-primary transition-colors ${language === 'pt' ? 'text-secondary' : ''}`}
            >
              PT
            </span>
            <span 
              onClick={() => setLanguage('es')}
              className={`hover:text-primary transition-colors ${language === 'es' ? 'text-secondary' : ''}`}
            >
              ES
            </span>
            <span 
              onClick={() => setLanguage('en')}
              className={`hover:text-primary transition-colors ${language === 'en' ? 'text-secondary' : ''}`}
            >
              EN
            </span>
          </div>
        </div>

        {/* Mobile Menu Toggle (Simplified) */}
        <button className="lg:hidden text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>
      </header>
    </div>
  )
}
