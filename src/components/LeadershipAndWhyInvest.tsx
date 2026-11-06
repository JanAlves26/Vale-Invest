import React from 'react';
import { Award } from 'lucide-react';

interface LeadershipAndWhyInvestProps {
  onOpenLeadModal: (source?: string) => void;
}

export const LeadershipAndWhyInvest: React.FC<LeadershipAndWhyInvestProps> = ({ onOpenLeadModal }) => {
  return (
    <section id="lideranca" className="py-20 lg:py-28 bg-white text-slate-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 06: Credibilidade e Liderança */}
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#00452F] uppercase tracking-wider mb-3">
            <span>06. Credibilidade & Liderança</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span className="text-[#A8843F]">Governança Executiva</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Nefisson Pinheiro Executive Portrait */}
            <div className="lg:col-span-5">
              <div className="card-interactive relative rounded-2xl overflow-hidden border border-stone-200 shadow-xl bg-stone-100 group hover:border-[#C5A059]/60">
                <img
                  src="/public/assets/aistudio/image_e16cafd8.png"
                  alt="Nefisson Pinheiro - Liderança Vale da Saudade"
                  className="w-full h-auto object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003423]/95 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="font-serif text-2xl font-bold group-hover:text-[#DFBF7A] transition-colors">
                    Nefisson Pinheiro
                  </div>
                  <div className="text-xs text-[#C5A059] uppercase tracking-wider font-semibold">
                    Liderança & Condução do Projeto Memorial Fortaleza
                  </div>
                </div>
              </div>
            </div>

            {/* Narrative and Track Record */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#A8843F] uppercase tracking-wider mb-3">
                <Award className="w-4 h-4" />
                <span>Trajetória de Nefisson Pinheiro</span>
              </div>

              <div className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#003423] mb-2 tabular-nums">
                25 anos
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-800 mb-6 leading-tight">
                Uma trajetória sólida construída no atendimento às famílias
              </h3>

              <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed mb-6">
                Nefisson Pinheiro atua há 25 anos no setor funerário e participa ativamente da condução do projeto do Memorial Vale da Saudade Fortaleza.
              </p>

              <p className="text-base text-slate-600 leading-relaxed mb-8">
                Sua experiência orienta o planejamento minucioso da estrutura física, a organização rigorosa dos serviços, a preparação de equipes humanizadas e o relacionamento transparente com parceiros e investidores.
              </p>

              {/* 3 Pillars of Leadership */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-stone-200">
                <div className="p-4 bg-[#FAF8F3] hover:bg-white rounded-xl border border-stone-200 hover:border-[#00452F]/40 hover:shadow-sm transition-all duration-200">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#00452F] mb-1">
                    Experiência Real
                  </div>
                  <p className="text-xs text-slate-600">
                    Vivência prática na implantação e operação de memoriais regionais.
                  </p>
                </div>

                <div className="p-4 bg-[#FAF8F3] hover:bg-white rounded-xl border border-stone-200 hover:border-[#00452F]/40 hover:shadow-sm transition-all duration-200">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#00452F] mb-1">
                    Gestão Ética
                  </div>
                  <p className="text-xs text-slate-600">
                    Compromisso inflexível com governança e responsabilidade social.
                  </p>
                </div>

                <div className="p-4 bg-[#FAF8F3] hover:bg-white rounded-xl border border-stone-200 hover:border-[#00452F]/40 hover:shadow-sm transition-all duration-200">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#00452F] mb-1">
                    Visão de Expansão
                  </div>
                  <p className="text-xs text-slate-600">
                    Planejamento fundamentado em inteligência demográfica e demanda contínua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
