import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onOpenLeadModal: (source?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenLeadModal }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#00452F]/95 backdrop-blur-md border-b border-[#C5A059]/20 shadow-lg py-3.5'
          : 'bg-gradient-to-b from-black/50 via-black/15 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#hero"
            className="flex items-center gap-3 shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]"
          >
            <img
              src="/public/assets/aistudio/logo_invest_2_5be6b009.png"
              alt="Vale da Saudade Invest"
              className="h-9 sm:h-10 md:h-11 w-auto max-w-[220px] sm:max-w-[260px] md:max-w-none object-contain transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
              referrerPolicy="no-referrer"
            />
          </a>

          {/* Zone 2: Navigation Links (single-line, clean text links with animated hover underline) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-emerald-100/90">
            <a
              href="#projetos"
              className="relative whitespace-nowrap shrink-0 hover:text-[#C5A059] transition-colors py-1 group/nav"
            >
              <span>Projetos & Unidades</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C5A059] transition-all duration-300 group-hover/nav:w-full" />
            </a>
            <a
              href="#oportunidade"
              className="relative whitespace-nowrap shrink-0 hover:text-[#C5A059] transition-colors py-1 group/nav"
            >
              <span>Oportunidade</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C5A059] transition-all duration-300 group-hover/nav:w-full" />
            </a>
            <a
              href="#modelo"
              className="relative whitespace-nowrap shrink-0 hover:text-[#C5A059] transition-colors py-1 group/nav"
            >
              <span>Modelo & Retorno</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C5A059] transition-all duration-300 group-hover/nav:w-full" />
            </a>
            <a
              href="#lideranca"
              className="relative whitespace-nowrap shrink-0 hover:text-[#C5A059] transition-colors py-1 group/nav"
            >
              <span>Liderança</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C5A059] transition-all duration-300 group-hover/nav:w-full" />
            </a>
            <a
              href="#faq"
              className="relative whitespace-nowrap shrink-0 hover:text-[#C5A059] transition-colors py-1 group/nav"
            >
              <span>Perguntas Frequentes</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C5A059] transition-all duration-300 group-hover/nav:w-full" />
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenLeadModal('Header CTA')}
              className="btn-shimmer group inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#00452F] bg-[#C5A059] hover:bg-[#D4AF37] active:bg-[#A8843F] rounded-md transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-[#C5A059]/30 hover:-translate-y-0.5 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C5A059]"
            >
              <span>Quero Investir</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
