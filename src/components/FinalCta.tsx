import React from 'react';
import { ArrowRight, MessageCircle, ShieldCheck } from 'lucide-react';

interface FinalCtaProps {
  onOpenLeadModal: (source?: string) => void;
  onOpenWhatsApp: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenLeadModal, onOpenWhatsApp }) => {
  return (
    <section className="relative py-24 lg:py-32 bg-[#002b1d] text-white overflow-hidden">
      {/* Background Architectural Photograph with Dark Luxury Tint */}
      <div className="absolute inset-0 z-0">
        <img
          src="/public/assets/memorial/memorial_hero_facade.jpg"
          alt="Memorial Vale da Saudade"
          className="w-full h-full object-cover object-center filter brightness-[0.25] saturate-[0.8]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001f15] via-[#002b1d]/90 to-[#002b1d]/95" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Unboxed Metadata Header */}
        <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#C5A059] uppercase tracking-wider mb-4">
          <span>Decisão Estratégica</span>
          <span aria-hidden="true" className="text-white/40">·</span>
          <span>Rodada Aberta de Captação</span>
        </div>

        {/* Big Headline from brief */}
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15] mb-6 [text-wrap:balance]">
          O futuro também é construído por{' '}
          <span className="text-[#C5A059] font-normal italic block sm:inline">
            grandes decisões.
          </span>
        </h2>

        <p className="text-base sm:text-xl text-emerald-100/90 font-normal leading-relaxed max-w-2xl mx-auto mb-10">
          Participe do desenvolvimento do Cemitério Memorial Vale da Saudade Fortaleza. Um mercado essencial, ativos reais e rentabilidade de 1,8% ao mês em um contrato de 24 meses.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button
            onClick={() => onOpenLeadModal('Final CTA - Quero ser um investidor')}
            className="btn-shimmer group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 text-base font-semibold text-[#002b1d] bg-[#C5A059] hover:bg-[#D4AF37] active:bg-[#A8843F] hover:-translate-y-1 active:scale-95 rounded-md transition-all duration-200 shadow-xl hover:shadow-2xl hover:shadow-[#C5A059]/40 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>Quero ser um investidor</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1.5" />
          </button>

          <button
            onClick={onOpenWhatsApp}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-black/40 hover:bg-black/60 border border-white/20 hover:border-[#C5A059] hover:-translate-y-1 active:scale-95 rounded-md transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl"
          >
            <MessageCircle className="w-5 h-5 text-[#25D366] transition-transform duration-200 group-hover:scale-110" />
            <span>Falar com especialista via WhatsApp</span>
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 text-xs text-emerald-200/70">
          <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
          <span>Aporte mínimo de R$ 10.000 · Plataforma autorizada Raise Capital</span>
        </div>
      </div>
    </section>
  );
};
