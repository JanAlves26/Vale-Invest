import React from 'react';
import { Shield, FileText, ArrowRight, UserCheck, Layers, Landmark } from 'lucide-react';
import { MEMORIAL_DATA } from '../data/memorialData';

interface BusinessModelAndStagesProps {
  onOpenLeadModal: (source?: string) => void;
}

export const BusinessModelAndStages: React.FC<BusinessModelAndStagesProps> = ({ onOpenLeadModal }) => {
  return (
    <section id="modelo" className="py-20 lg:py-28 bg-[#002b1d] text-white border-b border-[#00452F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 06 Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#C5A059] uppercase tracking-wider mb-3">
            <span>04. Modelo de Implantação & Governança</span>
            <span aria-hidden="true" className="text-white/30">·</span>
            <span className="text-emerald-200/90 font-normal">Metodologia Construtiva</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-6 [text-wrap:balance]">
            Cada etapa planejada.{' '}
            <span className="text-[#C5A059] font-normal italic">
              Cada decisão com propósito.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-emerald-100/90 font-normal leading-relaxed">
            A implantação de um empreendimento exige organização, acompanhamento rigoroso e planejamento estratégico. Estruturamos nossos projetos em fases que garantem disciplina de execução e acompanhamento transparente de sua evolução física e financeira.
          </p>
        </div>

        {/* 4 Stages Sequence Cards with Editorial Numbering */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {MEMORIAL_DATA.stages.map((stage, idx) => (
            <div
              key={idx}
              className="card-dark-interactive bg-[#003423] border border-[#C5A059]/25 rounded-xl p-6 flex flex-col justify-between group shadow-lg cursor-default"
            >
              <div>
                <div className="font-serif text-3xl font-bold text-[#C5A059] mb-4 opacity-90 group-hover:scale-110 group-hover:text-[#DFBF7A] transition-all duration-300">
                  {stage.number}
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-[#C5A059] transition-colors">
                  {stage.title}
                </h3>
                <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed">
                  {stage.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#C5A059]">
                <span className="group-hover:text-white transition-colors">Fase Estruturada</span>
                <span className="text-white/40 group-hover:text-[#C5A059] transition-colors">0{idx + 1}/04</span>
              </div>
            </div>
          ))}
        </div>

        {/* A Modalidade de Investimento (Card Lâmina 5 do PDF) */}
        <div className="bg-[#FAF8F3] text-slate-900 rounded-2xl p-8 sm:p-12 border border-[#C5A059]/40 shadow-2xl hover:border-[#C5A059] transition-colors duration-300">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10 pb-8 border-b border-stone-200">
            <div>
              <span className="text-xs font-semibold text-[#00452F] uppercase tracking-wider block mb-2">
                Estrutura Jurídica & Transparência
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#003423]">
                A modalidade de investimento
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Contrato de Investimento Coletivo de Dívida Não Conversível (CIC).
              </p>
            </div>

            <div className="bg-[#00452F] hover:bg-[#063B2C] transition-colors text-white px-5 py-3 rounded-lg text-xs shrink-0 flex items-center gap-2.5 shadow-md">
              <Landmark className="w-4 h-4 text-[#C5A059]" />
              <div>
                <span className="text-emerald-200/70 block text-[10px]">Empresa Emissora / Devedora:</span>
                <span className="font-semibold text-white">Cemitério Memorial Vale da Saudade Fortaleza S.A.</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Box 1: Você é credor */}
            <div className="card-interactive bg-white rounded-xl p-6 sm:p-8 border border-stone-200 shadow-sm hover:border-[#00452F]/60 flex flex-col justify-between group cursor-default">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#00452F]/10 text-[#00452F] flex items-center justify-center mb-4 group-hover:bg-[#00452F] group-hover:text-white transition-all duration-300">
                  <Shield className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h4 className="font-serif text-xl font-bold text-[#003423] mb-3 group-hover:text-[#00452F] transition-colors">
                  Posição Jurídica: Você é credor
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Não há participação societária, aquisição de jazigo ou propriedade direta sobre o terreno. O investidor adquire um título de crédito estruturado com remuneração definida e obrigação formal de quitação.
                </p>
              </div>
              <ul className="space-y-2 text-xs text-slate-700 pt-2 border-t border-stone-100">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                  <span>Sem passivo trabalhista ou societário para o investidor</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                  <span>Direito a fluxo contratual de juros mensais brutos de 1,8%</span>
                </li>
              </ul>
            </div>

            {/* Box 2: Jornada do Investidor */}
            <div className="card-interactive bg-white rounded-xl p-6 sm:p-8 border border-stone-200 shadow-sm hover:border-[#C5A059]/80 flex flex-col justify-between group cursor-default">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#C5A059]/15 text-[#88682D] flex items-center justify-center mb-4 group-hover:bg-[#C5A059] group-hover:text-[#002b1d] transition-all duration-300">
                  <UserCheck className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h4 className="font-serif text-xl font-bold text-[#003423] mb-3 group-hover:text-[#88682D] transition-colors">
                  Jornada do Investidor
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Análise, adesão, aporte e liberação. Todo o processo é operacionalizado digitalmente através da plataforma parceira Raise Capital com auditoria e controle de etapas.
                </p>
              </div>
              <div className="grid grid-cols-4 gap-2 text-center pt-2 border-t border-stone-100">
                <div className="p-2 bg-stone-50 hover:bg-[#00452F] hover:text-white rounded border border-stone-100 transition-all duration-200 group/step cursor-pointer">
                  <span className="text-[10px] font-bold text-[#00452F] group-hover/step:text-white block">1. Análise</span>
                  <span className="text-[9px] text-slate-500 group-hover/step:text-emerald-100">Documental</span>
                </div>
                <div className="p-2 bg-stone-50 hover:bg-[#00452F] hover:text-white rounded border border-stone-100 transition-all duration-200 group/step cursor-pointer">
                  <span className="text-[10px] font-bold text-[#00452F] group-hover/step:text-white block">2. Adesão</span>
                  <span className="text-[9px] text-slate-500 group-hover/step:text-emerald-100">Digital</span>
                </div>
                <div className="p-2 bg-stone-50 hover:bg-[#00452F] hover:text-white rounded border border-stone-100 transition-all duration-200 group/step cursor-pointer">
                  <span className="text-[10px] font-bold text-[#00452F] group-hover/step:text-white block">3. Aporte</span>
                  <span className="text-[9px] text-slate-500 group-hover/step:text-emerald-100">Custodiado</span>
                </div>
                <div className="p-2 bg-stone-50 hover:bg-[#00452F] hover:text-white rounded border border-stone-100 transition-all duration-200 group/step cursor-pointer">
                  <span className="text-[10px] font-bold text-[#00452F] group-hover/step:text-white block">4. Liberação</span>
                  <span className="text-[9px] text-slate-500 group-hover/step:text-emerald-100">Execução</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-500">
              Quer entender a fundo a documentação jurídica do CIC?
            </span>
            <button
              onClick={() => onOpenLeadModal('Apresentação Modalidade CIC')}
              className="group inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#00452F] hover:text-[#063B2C] underline decoration-[#C5A059] decoration-2 underline-offset-4 cursor-pointer active:scale-95 transition-transform"
            >
              <span>Solicitar minuta e documentação da oferta</span>
              <ArrowRight className="w-4 h-4 text-[#C5A059] transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
