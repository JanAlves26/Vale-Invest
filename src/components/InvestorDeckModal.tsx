import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Download, ExternalLink, ShieldCheck } from 'lucide-react';

interface InvestorDeckModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenLeadModal: (source?: string) => void;
}

export const InvestorDeckModal: React.FC<InvestorDeckModalProps> = ({
  isOpen,
  onClose,
  onOpenLeadModal,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!isOpen) return null;

  const slides = [
    {
      title: 'Vale da Saudade Invest',
      subtitle: 'Experiência no cuidado. Um projeto em Aquiraz, com oferta na plataforma Raise.',
      image: '/public/assets/memorial/memorial_hero_facade.jpg',
      content:
        'Apresentação institucional da rodada de dívida para o desenvolvimento do Memorial em Aquiraz, Ceará, atendendo a Região Metropolitana de Fortaleza.',
      tags: ['Capa Oficial', 'Plataforma Raise', 'Aquiraz / CE'],
    },
    {
      title: 'Trajetória de Nefisson Pinheiro',
      subtitle: '25 anos de atuação sólida e dedicada no setor funerário brasileiro.',
      image: '/public/assets/aistudio/image_e16cafd8.png',
      content:
        'Liderança executiva que orienta o planejamento estrutural, a governança dos serviços e o preparo das equipes de acolhimento.',
      tags: ['Liderança', '25 Anos', 'Experiência'],
    },
    {
      title: 'Experiência em Diferentes Regiões',
      subtitle: 'Histórico de presença em Recife (2014), Salvador (2016), João Pessoa (2018) e Campina Grande (2019).',
      image: '/public/assets/memorial/recife_2014.jpg',
      content:
        'Capacidade de replicação e gestão em múltiplos polos metropolitanos do Nordeste com padrões rigorosos de qualidade.',
      tags: ['Histórico', 'Expansão', 'Nordeste'],
    },
    {
      title: 'Localização Estratégica & Complexo',
      subtitle: 'Do Prédio Provisório ao Complexo Definitivo de Velório em Aquiraz/CE.',
      image: '/public/assets/memorial/complexo_projeto_render.jpg',
      content:
        'Integração de memorial moderno com salas de velório climatizadas, suítes de acolhimento e facilidade de acesso viário.',
      tags: ['Projeto 3D', 'Engenharia', 'Infraestrutura'],
    },
    {
      title: 'A Modalidade de Investimento (CIC)',
      subtitle: 'Contrato de Investimento Coletivo de Dívida Não Conversível.',
      image: '/public/assets/memorial/predio_provisorio.jpg',
      content:
        'Você é credor da sociedade Cemitério Memorial Vale da Saudade Fortaleza S.A. Sem passivo societário ou aquisição de jazigos.',
      tags: ['Segurança Jurídica', 'Credor', 'Dívida Sênior'],
    },
    {
      title: 'Aplicação dos Recursos Captados',
      subtitle: 'Cenário Base (R$ 1.000.000) e Cenário Alternativo (R$ 1.500.000).',
      image: '/public/assets/memorial/memorial_hero_facade.jpg',
      content:
        'Recursos integralmente direcionados para as obras civis, instalações de equipamentos, tecnologia operacional e licenciamento.',
      tags: ['R$ 1M a R$ 1.5M', 'Obras Civis', 'Transparência'],
    },
    {
      title: 'Condições Financeiras do Investimento',
      subtitle: 'Aporte mínimo de R$ 10 mil · Prazo de 24 meses · Juros de 1,8% ao mês.',
      image: '/public/assets/memorial/complexo_projeto_render.jpg',
      content:
        'Juros mensais, sem capitalização, e devolução integral do principal ao final de 24 meses contados da liberação dos recursos.',
      tags: ['1,8% a.m.', '24 Meses', 'R$ 10.000 Mín.'],
    },
    {
      title: 'Conheça o Projeto Antes de Decidir',
      subtitle: 'Oferta disponível e auditada na plataforma Raise Capital.',
      image: '/public/assets/memorial/memorial_hero_facade.jpg',
      content:
        'Consulte as informações essenciais, lâmina de riscos e documentos contratuais em raisecapital.com.br ou pelo telefone (11) 5286-3862.',
      tags: ['Plataforma Raise', 'Telefone (11) 5286-3862', 'Auditoria'],
    },
  ];

  const slide = slides[currentSlide];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-[#002b1d] border border-[#C5A059]/40 text-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#002217]">
          <div className="flex items-center gap-3">
            <span className="font-serif text-lg font-bold text-[#C5A059]">
              Lâmina Executiva da Oferta
            </span>
            <span className="text-xs text-white/40">·</span>
            <span className="text-xs text-emerald-200/70">
              Lâmina {currentSlide + 1} de {slides.length}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-md transition-colors cursor-pointer"
            aria-label="Fechar apresentação"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Slide Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
          <div className="aspect-[16/9] w-full rounded-xl overflow-hidden relative bg-black/40 border border-white/10">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
              <div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {slide.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] uppercase font-semibold tracking-wider px-2 py-0.5 rounded bg-[#C5A059] text-[#002b1d]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-1">
                  {slide.title}
                </h3>
                <p className="text-xs sm:text-sm text-emerald-100/90 font-medium">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#003423] p-5 rounded-xl border border-white/10 text-sm text-emerald-100/90 leading-relaxed">
            {slide.content}
          </div>
        </div>

        {/* Navigation & Controls */}
        <div className="px-6 py-4 bg-[#002217] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
              disabled={currentSlide === 0}
              className="p-2 rounded-md bg-[#003423] hover:bg-[#00452F] disabled:opacity-40 text-white cursor-pointer transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs text-white/70 px-2 tabular-nums">
              {currentSlide + 1} / {slides.length}
            </span>
            <button
              onClick={() => setCurrentSlide(Math.min(slides.length - 1, currentSlide + 1))}
              disabled={currentSlide === slides.length - 1}
              className="p-2 rounded-md bg-[#003423] hover:bg-[#00452F] disabled:opacity-40 text-white cursor-pointer transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href="/public/assets/aistudio/VALE_DA_SAUDADE_INVEST_-_FINAL_9590240c.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-emerald-200 border border-white/20 hover:bg-white/10 rounded-md transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Baixar PDF Oficial</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onOpenLeadModal(`Interesse através da Lâmina ${currentSlide + 1}: ${slide.title}`);
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-[#002b1d] bg-[#C5A059] hover:bg-[#D4AF37] rounded-md transition-colors cursor-pointer"
            >
              <span>Quero Aportar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
