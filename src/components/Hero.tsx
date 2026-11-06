import React from 'react';
import { ArrowRight, ShieldCheck, ChevronDown, MessageCircle } from 'lucide-react';
import { MEMORIAL_DATA } from '../data/memorialData';

interface HeroProps {
  onOpenLeadModal: (source?: string) => void;
  onOpenWhatsApp: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenLeadModal, onOpenWhatsApp }) => {
  return (
    <section id="hero" className="relative min-h-[95vh] flex flex-col justify-between overflow-hidden pt-28 pb-12 lg:pt-36 lg:pb-16 bg-[#002b1d]">
      {/* Background Architectural Photograph with Right-side Visibility */}
      <div className="absolute inset-0 z-0">
        <img
          src="/public/assets/memorial/memorial_hero_facade.jpg"
          alt="Memorial Vale da Saudade - Arquitetura contemporânea e paisagismo"
          className="w-full h-full object-cover object-right md:object-center filter brightness-[1.0] contrast-[1.02]"
          referrerPolicy="no-referrer"
        />
        {/* Left-side scrim only behind copy for sharp text contrast; right side clear to reveal facade, glass and sky */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#002217]/95 via-[#002217]/75 via-35% md:via-45% to-transparent" />
        {/* Bottom subtle vignette grounding the metrics bar without darkening the upper building */}
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#001c13]/90 via-[#001c13]/40 to-transparent" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full">
        <div className="max-w-3xl">
          {/* Unboxed Metadata Tagline with Typographic Separator */}
          <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#C5A059] tracking-wider uppercase mb-5">
            <span className="font-semibold">Vale da Saudade Invest</span>
            <span aria-hidden="true" className="text-white/40">·</span>
            <span className="text-emerald-100/90 font-normal">Captação Estruturada</span>
            <span aria-hidden="true" className="text-white/40">·</span>
            <span className="text-emerald-100/90 font-normal">Oferta via Raise Capital</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12] mb-6 [text-wrap:balance]">
            Um novo olhar sobre o futuro.{' '}
            <span className="text-[#C5A059] font-normal italic block sm:inline">
              Uma oportunidade para investir.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-emerald-100/90 font-normal leading-relaxed mb-8 max-w-2xl">
            Faça parte de um empreendimento que une planejamento, infraestrutura e um mercado essencial. Conheça o projeto Vale da Saudade e descubra novas possibilidades de investimento no segmento memorial.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
            <button
              onClick={() => onOpenLeadModal('Hero Primary CTA')}
              className="btn-shimmer group inline-flex items-center justify-center gap-3 px-7 py-3.5 text-sm sm:text-base font-semibold text-[#003423] bg-[#C5A059] hover:bg-[#D4AF37] active:bg-[#A8843F] rounded-md transition-all duration-200 shadow-xl hover:shadow-2xl hover:shadow-[#C5A059]/30 hover:-translate-y-0.5 active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Quero conhecer o investimento</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            <a
              href="#projetos"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-medium text-white border border-white/30 hover:border-[#C5A059] hover:text-[#C5A059] bg-black/20 hover:bg-black/40 hover:-translate-y-0.5 active:scale-95 backdrop-blur-sm rounded-md transition-all duration-200 cursor-pointer"
            >
              <span>Conheça o empreendimento</span>
            </a>

            <button
              onClick={onOpenWhatsApp}
              className="group inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-medium text-emerald-200 hover:text-white hover:-translate-y-0.5 active:scale-95 transition-all duration-200 cursor-pointer"
              title="Falar no WhatsApp"
            >
              <MessageCircle className="w-5 h-5 text-[#25D366] transition-transform duration-200 group-hover:scale-110" />
              <span className="sm:hidden lg:inline text-xs">Atendimento WhatsApp</span>
            </button>
          </div>

          {/* Regulatory Transparency Micro-note */}
          <div className="flex items-center gap-2 text-xs text-emerald-200/70">
            <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
            <span>Contrato de Investimento Coletivo (CIC) com custódia e intermediação da plataforma Raise.</span>
          </div>
        </div>
      </div>

      {/* Floating Bottom Metric Bar with Refined Hairline Glass */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12">
        <div className="bg-[#002b1d]/90 backdrop-blur-md border border-[#C5A059]/30 rounded-xl p-5 sm:p-6 shadow-2xl grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          {MEMORIAL_DATA.metrics.map((item, idx) => (
            <div
              key={idx}
              className={`pt-4 lg:pt-0 group/metric transition-all duration-300 hover:-translate-y-1 hover:bg-white/5 p-2 rounded-lg cursor-default ${
                idx > 0 ? 'lg:pl-6' : ''
              }`}
            >
              <div className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#C5A059] group-hover/metric:text-[#DFBF7A] tabular-nums tracking-tight mb-1 transition-colors">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wider mb-0.5">
                {item.label}
              </div>
              <div className="text-xs text-emerald-200/75">
                {item.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Quiet scroll indicator to 2nd section (Projetos) */}
        <div className="flex justify-center mt-6">
          <a
            href="#projetos"
            className="text-white/60 hover:text-[#C5A059] transition-colors p-2 inline-flex items-center gap-1 text-xs"
            aria-label="Rolar para a próxima seção"
          >
            <span>Conhecer Projetos & Unidades</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#C5A059]" />
          </a>
        </div>
      </div>
    </section>
  );
};
