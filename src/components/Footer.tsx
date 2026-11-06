import React from 'react';
import { ShieldCheck, Phone, Globe, Mail, MapPin } from 'lucide-react';
import { MEMORIAL_DATA } from '../data/memorialData';

interface FooterProps {
  onOpenDeckModal: () => void;
  onOpenLeadModal: (source?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDeckModal, onOpenLeadModal }) => {
  return (
    <footer className="bg-[#001a12] text-white border-t border-[#003423] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Mission (Col 1 & 2) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#hero" className="inline-block group mb-1">
              <img
                src="/public/assets/aistudio/logo_invest_2_5be6b009.png"
                alt="Vale da Saudade Invest"
                className="h-11 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </a>
            <p className="font-serif text-lg text-[#C5A059] italic">
              {MEMORIAL_DATA.company.tagline}
            </p>
            <p className="text-xs text-emerald-200/75 leading-relaxed max-w-sm">
              Empresa voltada à estruturação, desenvolvimento e expansão de empreendimentos no segmento de memoriais funerários, com foco na captação qualificada e transparência corporativa.
            </p>
            <div className="pt-2 text-xs text-emerald-300/80 space-y-1">
              <div>
                <strong>Sociedade Emissora:</strong> {MEMORIAL_DATA.company.legalIssuer}
              </div>
              <div>
                <strong>Modalidade:</strong> {MEMORIAL_DATA.company.modality}
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs text-emerald-100/80">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#oportunidade" className="hover:text-white transition-colors">
                  Oportunidade de Mercado
                </a>
              </li>
              <li>
                <a href="#projetos" className="hover:text-white transition-colors">
                  Projetos & Unidades
                </a>
              </li>
              <li>
                <a href="#modelo" className="hover:text-white transition-colors">
                  Modelo de Implantação
                </a>
              </li>
              <li>
                <a href="#retorno" className="hover:text-white transition-colors">
                  Condições & Simulador
                </a>
              </li>
              <li>
                <a href="#lideranca" className="hover:text-white transition-colors">
                  Liderança & Governança
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Contatos & Relações com Investidores */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-4">
              Relações com Investidores
            </h4>
            <ul className="space-y-3 text-xs text-emerald-100/80">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>{MEMORIAL_DATA.company.supportEmail}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>Região Metropolitana de Fortaleza · Ceará</span>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => onOpenLeadModal('Footer RI Contact')}
                  className="px-4 py-2 text-xs font-semibold text-[#002b1d] bg-[#C5A059] hover:bg-[#D4AF37] rounded-md transition-colors cursor-pointer"
                >
                  Falar com RI
                </button>
              </li>
            </ul>
          </div>

          {/* Plataforma Parceira */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-4">
              Plataforma Raise
            </h4>
            <div className="bg-[#00251a] p-4 rounded-lg border border-white/5 space-y-2 text-xs text-emerald-100/80">
              <div className="flex items-center gap-1.5 font-semibold text-white">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Oferta Pública de CIC</span>
              </div>
              <p className="text-[11px] text-emerald-200/60 leading-relaxed">
                Intermediação e custódia da rodada na plataforma de investimentos coletivos Raise Capital.
              </p>
              <div className="pt-2 text-[11px] space-y-1">
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3 h-3 text-[#C5A059]" />
                  <span>(11) 5286-3862</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Globe className="w-3 h-3 text-[#C5A059]" />
                  <a
                    href="https://raisecapital.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#C5A059] transition-colors"
                  >
                    raisecapital.com.br
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory Disclaimer (Mandatory for Investment Landing Pages) */}
        <div className="pt-8 pb-6 border-b border-white/5 text-[11px] text-emerald-200/60 leading-relaxed space-y-3">
          <div className="font-semibold text-emerald-100/80 uppercase tracking-wider text-[10px]">
            Aviso de Risco e Informações Regulatórias
          </div>
          <p>
            As informações apresentadas nesta página têm finalidade institucional e promocional da oportunidade de investimento ofertada pela sociedade <strong>Cemitério Memorial Vale da Saudade Fortaleza S.A.</strong> sob a modalidade de Contrato de Investimento Coletivo (CIC) de dívida não conversível, intermediada pela plataforma <strong>Raise Capital</strong> nos termos da regulamentação aplicável da Comissão de Valores Mobiliários (CVM).
          </p>
          <p>
            Investimentos em títulos de crédito privado e contratos de investimento coletivo envolvem riscos significativos, incluindo risco de crédito da sociedade devedora e restrições de liquidez, e <strong>NÃO contam com garantia do Fundo Garantidor de Créditos (FGC)</strong>. A taxa de remuneração estipulada de 1,8% ao mês constitui obrigação contratual da empresa emissora. Antes de realizar qualquer aporte, leia com atenção as informações essenciais da lâmina de oferta e os documentos de risco disponíveis na plataforma autorizada.
          </p>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-200/50">
          <div>
            © {new Date().getFullYear()} Vale da Saudade Invest. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <button
              onClick={onOpenDeckModal}
              className="hover:text-[#C5A059] transition-colors underline cursor-pointer"
            >
              Lâmina da Oferta (PDF)
            </button>
            <span aria-hidden="true">·</span>
            <span>Segurança & Sigilo</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
