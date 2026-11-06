import React from 'react';
import { Activity, TrendingUp, Building2, CheckCircle2 } from 'lucide-react';

interface MarketOpportunityProps {
  onOpenLeadModal: (source?: string) => void;
}

export const MarketOpportunity: React.FC<MarketOpportunityProps> = () => {
  return (
    <section id="oportunidade" className="py-20 lg:py-28 bg-[#FAF8F3] text-slate-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 03: Market Opportunity Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#00452F] uppercase tracking-wider mb-3">
            <span>03. Oportunidade de Mercado</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span className="text-[#A8843F]">Fundamentos de Valor</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003423] tracking-tight leading-tight mb-6 [text-wrap:balance]">
            Um mercado essencial.{' '}
            <span className="text-[#A8843F] font-normal italic">
              Uma oportunidade de longo prazo.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
            O segmento de serviços memoriais desempenha um papel fundamental na sociedade. Mais do que uma atividade empresarial, representa um serviço essencial que une demanda contínua, infraestrutura planejada e solidez de longo prazo.
          </p>
        </div>

        {/* 3 Pillars Grid with Asymmetric Bento and Hairline Borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Pillar 1 */}
          <div className="card-interactive bg-white rounded-xl p-8 border border-stone-200 shadow-sm hover:border-[#00452F]/60 flex flex-col justify-between group cursor-default">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#00452F]/10 text-[#00452F] flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#00452F] group-hover:text-white">
                <Activity className="w-6 h-6 transition-colors" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#003423] mb-3 group-hover:text-[#00452F] transition-colors">
                Demanda Permanente
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Atuação em um segmento de necessidade contínua, não sujeito a modismos ou sazonalidades conjunturais. A demanda por serviços memoriais dignos é contínua e universal.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 text-xs font-semibold text-[#00452F] flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
              <span>Resiliência econômica comprovada</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="card-interactive bg-white rounded-xl p-8 border border-stone-200 shadow-sm hover:border-[#C5A059]/80 flex flex-col justify-between group cursor-default">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#C5A059]/15 text-[#A8843F] flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#C5A059] group-hover:text-[#002b1d]">
                <TrendingUp className="w-6 h-6 transition-colors" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#003423] mb-3 group-hover:text-[#88682D] transition-colors">
                Expansão Planejada
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Possibilidade de desenvolvimento metódico em diferentes localidades estratégicas com déficits estruturais de memoriais dignos e modernos.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 text-xs font-semibold text-[#00452F] flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
              <span>Escala com disciplina e governança</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="card-interactive bg-white rounded-xl p-8 border border-stone-200 shadow-sm hover:border-[#00452F]/60 flex flex-col justify-between group cursor-default">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#00452F]/10 text-[#00452F] flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#00452F] group-hover:text-white">
                <Building2 className="w-6 h-6 transition-colors" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#003423] mb-3 group-hover:text-[#00452F] transition-colors">
                Estrutura Especializada
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Projetos concebidos desde o primeiro rascunho para oferecer acolhimento humano, sustentabilidade ambiental e alta eficiência na operação e conservação.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 text-xs font-semibold text-[#00452F] flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
              <span>Padrão de engenharia e acolhimento</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
