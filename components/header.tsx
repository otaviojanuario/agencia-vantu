"use client";

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { Menu, X } from "lucide-react"

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-4 left-0 w-full z-50 flex flex-col px-4 md:px-6 pointer-events-none gap-4">
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

        {/* Mobile Menu Toggle */}
        <button 
          type="button"
          className="lg:hidden text-secondary p-2 -mr-2"
          onClick={(e) => {
            e.stopPropagation();
            setIsMobileMenuOpen((prev) => !prev);
          }}
          aria-label="Toggle menu"
        >
            {isMobileMenuOpen ? <X size={24} className="pointer-events-none" /> : <Menu size={24} className="pointer-events-none" />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="w-full bg-white/95 backdrop-blur-md border border-white/20 shadow-lg rounded-[2rem] p-6 flex flex-col gap-6 lg:hidden pointer-events-auto transition-all animate-in fade-in slide-in-from-top-4">
          <nav className="flex flex-col gap-4 text-base font-semibold text-secondary text-center">
            <Link href="/quem-somos" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors">{t('nav.quemSomos')}</Link>
            <Link href="/#projetos" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors">{t('nav.projetos')}</Link>
            <Link href="/#solucoes" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors">{t('nav.solucoes')}</Link>
            <Link href="/galeria" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors">{t('nav.galeria')}</Link>
            <Link href="/#contato" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors">{t('nav.contato')}</Link>
          </nav>
          
          <div className="h-px w-full bg-secondary/10"></div>
          
          <div className="flex font-mono text-sm font-bold gap-6 text-muted-foreground/50 justify-center">
            <span 
              onClick={() => { setLanguage('pt'); setIsMobileMenuOpen(false); }}
              className={`cursor-pointer hover:text-primary transition-colors ${language === 'pt' ? 'text-secondary' : ''}`}
            >
              PT
            </span>
            <span 
              onClick={() => { setLanguage('es'); setIsMobileMenuOpen(false); }}
              className={`cursor-pointer hover:text-primary transition-colors ${language === 'es' ? 'text-secondary' : ''}`}
            >
              ES
            </span>
            <span 
              onClick={() => { setLanguage('en'); setIsMobileMenuOpen(false); }}
              className={`cursor-pointer hover:text-primary transition-colors ${language === 'en' ? 'text-secondary' : ''}`}
            >
              EN
            </span>
          </div>
        </div>
      )}
    </div>
  )
}
