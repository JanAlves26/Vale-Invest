import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { MEMORIAL_DATA } from '../data/memorialData';

interface FaqSectionProps {
  onOpenLeadModal: (source?: string) => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenLeadModal }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#FAF8F3] text-slate-900 border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#00452F] uppercase tracking-wider mb-3">
            <HelpCircle className="w-4 h-4 text-[#A8843F]" />
            <span>08. FAQ — Perguntas Frequentes</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003423] tracking-tight leading-tight mb-4">
            Esclareça suas dúvidas sobre a operação
          </h2>

          <p className="text-base text-slate-600">
            Respostas claras e transparentes sobre o modelo de investimento, governança e condições de participação.
          </p>
        </div>

        {/* Accordion List with Hairline Borders */}
        <div className="space-y-3">
          {MEMORIAL_DATA.faq.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-stone-200 overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00452F]"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-[#003423]">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-stone-100 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#00452F] text-white' : 'text-slate-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-stone-100 bg-stone-50/50">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center bg-white p-6 rounded-xl border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm text-slate-600">
            Tem alguma pergunta técnica que não encontrou aqui?
          </span>
          <button
            onClick={() => onOpenLeadModal('Dúvida FAQ Específica')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#00452F] hover:text-[#063B2C] underline decoration-[#C5A059] decoration-2 underline-offset-4 cursor-pointer shrink-0"
          >
            <span>Falar com especialista de RI</span>
            <ArrowRight className="w-4 h-4 text-[#C5A059]" />
          </button>
        </div>
      </div>
    </section>
  );
};
