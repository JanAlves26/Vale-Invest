import React, { useState } from 'react';
import { MapPin, Calendar, CheckCircle2, ArrowRight, Eye } from 'lucide-react';
import { MEMORIAL_DATA } from '../data/memorialData';

interface ProjectsAndExpansionProps {
  onOpenLeadModal: (source?: string) => void;
  onSelectImagePreview: (img: { src: string; title: string; subtitle: string }) => void;
}

export const ProjectsAndExpansion: React.FC<ProjectsAndExpansionProps> = ({
  onOpenLeadModal,
  onSelectImagePreview,
}) => {
  const [activeTab, setActiveTab] = useState<'aquiraz' | 'timeline'>('aquiraz');

  return (
    <section id="projetos" className="py-20 lg:py-28 bg-white text-slate-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 04 Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#00452F] uppercase tracking-wider mb-3">
              <span>02. Projetos & Unidades</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span className="text-[#A8843F]">Trajetória Comprovada</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003423] tracking-tight leading-tight [text-wrap:balance]">
              Uma estrutura em desenvolvimento.{' '}
              <span className="text-[#A8843F] font-normal italic block sm:inline">
                Uma visão de expansão.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mt-4">
              Conheça os projetos que fazem parte da história e da capacidade de execução do Vale da Saudade no Nordeste brasileiro.
            </p>
          </div>

          {/* Interactive view mode tab */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-lg shrink-0 border border-stone-200">
            <button
              onClick={() => setActiveTab('aquiraz')}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-all duration-200 cursor-pointer active:scale-95 ${
                activeTab === 'aquiraz'
                  ? 'bg-[#00452F] text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-stone-200/60'
              }`}
            >
              Projeto Principal (Aquiraz)
            </button>
            <button
              onClick={() => setActiveTab('timeline')}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-all duration-200 cursor-pointer active:scale-95 ${
                activeTab === 'timeline'
                  ? 'bg-[#00452F] text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-stone-200/60'
              }`}
            >
              Histórico Regional (2014-2019)
            </button>
          </div>
        </div>

        {/* Section 05: Featured Project (Fortaleza & Aquiraz) */}
        <div className={`transition-opacity duration-300 ${activeTab === 'aquiraz' ? 'block' : 'hidden'}`}>
          <div className="bg-[#FAF8F3] rounded-2xl border border-stone-200 p-6 sm:p-10 lg:p-12 mb-16 shadow-sm hover:border-[#C5A059]/40 hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#00452F] uppercase tracking-wider mb-2">
              <span>Projeto em Destaque</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span className="text-[#A8843F]">Captação Aberta</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-5">
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#003423] mb-4 leading-tight">
                  {MEMORIAL_DATA.featuredProject.title}
                </h3>
                <p className="text-sm font-semibold text-[#A8843F] uppercase tracking-wider mb-4">
                  {MEMORIAL_DATA.featuredProject.subtitle}
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  {MEMORIAL_DATA.featuredProject.description}
                </p>

                <div className="space-y-3 mb-8">
                  {MEMORIAL_DATA.featuredProject.differentials.map((diff, index) => (
                    <div key={index} className="flex items-start gap-3 group/item">
                      <div className="w-5 h-5 rounded-full bg-[#00452F]/10 text-[#00452F] flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-[#00452F] group-hover/item:text-white transition-colors duration-200">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-[#003423]">{diff.title}: </span>
                        <span className="text-sm text-slate-600">{diff.description}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => onOpenLeadModal('Projeto em Destaque - Aquiraz')}
                  className="btn-shimmer group inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-[#00452F] hover:bg-[#063B2C] hover:-translate-y-0.5 active:scale-95 rounded-md transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-[#00452F]/30 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00452F]"
                >
                  <span>Quero conhecer este projeto</span>
                  <ArrowRight className="w-4 h-4 text-[#C5A059] transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>

              {/* Visual Showcase: Provisional building vs Future Complex 3D render */}
              <div className="lg:col-span-7 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Card 1: Prédio Provisório */}
                  <div className="card-interactive group relative rounded-xl overflow-hidden border border-stone-200 bg-white shadow-sm hover:border-[#00452F]/50">
                    <div className="aspect-[16/10] overflow-hidden bg-stone-100 relative">
                      <img
                        src="/public/assets/memorial/predio_provisorio.jpg"
                        alt="Prédio Provisório do Cemitério Aquiraz"
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <button
                        onClick={() =>
                          onSelectImagePreview({
                            src: '/public/assets/memorial/predio_provisorio.jpg',
                            title: 'Prédio Provisório do Cemitério Memorial',
                            subtitle: 'Unidade em Aquiraz/CE em funcionamento e atendimento inicial',
                          })
                        }
                        className="absolute bottom-3 right-3 p-2 bg-black/60 hover:bg-[#00452F] text-white rounded-md backdrop-blur-sm transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer shadow-lg"
                        title="Ver imagem ampliada"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="p-4">
                      <span className="text-xs font-semibold text-[#00452F] uppercase tracking-wider block mb-1">
                        Estágio Atual
                      </span>
                      <h4 className="font-serif text-base font-bold text-slate-900 mb-1 group-hover:text-[#00452F] transition-colors">
                        Prédio Provisório do Cemitério
                      </h4>
                      <p className="text-xs text-slate-500">
                        Estrutura inicial em operação em Aquiraz/CE para acolhimento de famílias e atendimento local.
                      </p>
                    </div>
                  </div>

                  {/* Card 2: 3D Render do Complexo de Velório */}
                  <div className="card-interactive group relative rounded-xl overflow-hidden border border-[#C5A059]/40 bg-white shadow-sm hover:border-[#C5A059]">
                    <div className="aspect-[16/10] overflow-hidden bg-stone-100 relative">
                      <img
                        src="/public/assets/memorial/complexo_projeto_render.jpg"
                        alt="Projeto 3D do Complexo de Velório Vale da Saudade"
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <button
                        onClick={() =>
                          onSelectImagePreview({
                            src: '/public/assets/memorial/complexo_projeto_render.jpg',
                            title: 'Projeto Complexo de Velório Vale da Saudade',
                            subtitle: 'Renderização arquitetônica das novas instalações modernas em desenvolvimento',
                          })
                        }
                        className="absolute bottom-3 right-3 p-2 bg-black/60 hover:bg-[#C5A059] hover:text-[#002b1d] text-white rounded-md backdrop-blur-sm transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer shadow-lg"
                        title="Ver imagem ampliada"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="p-4 bg-gradient-to-b from-[#FAF8F3] to-white">
                      <span className="text-xs font-semibold text-[#A8843F] uppercase tracking-wider block mb-1">
                        Empreendimento Futuro
                      </span>
                      <h4 className="font-serif text-base font-bold text-[#003423] mb-1 group-hover:text-[#88682D] transition-colors">
                        Projeto Complexo de Velório
                      </h4>
                      <p className="text-xs text-slate-500">
                        Estrutura definitiva com suítes memoriais, climatização integral e acessibilidade universal.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#00452F]/5 border border-[#00452F]/15 rounded-lg p-4 text-xs text-slate-700 flex items-center justify-between gap-4">
                  <span>
                    Essa experiência oferece referências consolidadas para o planejamento e a implantação do Cemitério de Aquiraz e do Complexo de Velório na Região Metropolitana de Fortaleza.
                  </span>
                  <span className="font-semibold text-[#00452F] shrink-0">Ceará · Brasil</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline of Regional Units (Recife, Salvador, João Pessoa, Campina Grande) */}
        <div className={`transition-opacity duration-300 ${activeTab === 'timeline' ? 'block' : 'hidden md:block'}`}>
          <div className="mb-6 flex items-center justify-between">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#003423]">
              Trajetória Regional Consolidada (2014 – 2019)
            </h3>
            <span className="text-xs font-semibold text-slate-500">
              Unidades e projetos do grupo
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MEMORIAL_DATA.regionalUnits.map((unit, idx) => (
              <div
                key={idx}
                className="card-interactive group rounded-xl border border-stone-200 overflow-hidden bg-white hover:border-[#00452F]/70 shadow-sm flex flex-col cursor-default"
              >
                <div className="aspect-[16/11] overflow-hidden bg-stone-100 relative">
                  <img
                    src={unit.image}
                    alt={`Unidade Vale da Saudade ${unit.city}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#00452F] group-hover:bg-[#C5A059] group-hover:text-[#002b1d] text-white px-2.5 py-1 rounded text-xs font-serif font-bold transition-colors duration-300 shadow">
                    {unit.year}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-[#A8843F] font-semibold uppercase tracking-wider mb-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{unit.city} — {unit.state}</span>
                    </div>
                    <h4 className="font-serif text-lg font-bold text-[#003423] mb-2 group-hover:text-[#00452F] transition-colors">
                      {unit.role}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {unit.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] font-medium text-slate-400 group-hover:text-[#A8843F] transition-colors">
                    Operação e desenvolvimento estruturado
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
