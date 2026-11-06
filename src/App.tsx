import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MarketOpportunity } from './components/MarketOpportunity';
import { ProjectsAndExpansion } from './components/ProjectsAndExpansion';
import { BusinessModelAndStages } from './components/BusinessModelAndStages';
import { FinancialTermsAndSimulator } from './components/FinancialTermsAndSimulator';
import { LeadershipAndWhyInvest } from './components/LeadershipAndWhyInvest';
import { LeadCaptureSection } from './components/LeadCaptureSection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { InvestorDeckModal } from './components/InvestorDeckModal';
import { LeadModal } from './components/LeadModal';
import { ImageLightboxModal } from './components/ImageLightboxModal';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [leadModalSource, setLeadModalSource] = useState('Geral');
  const [isDeckModalOpen, setIsDeckModalOpen] = useState(false);
  const [activeLightboxImage, setActiveLightboxImage] = useState<{
    src: string;
    title: string;
    subtitle: string;
  } | null>(null);

  const handleOpenLeadModal = (source = 'Interesse Geral') => {
    setLeadModalSource(source);
    setIsLeadModalOpen(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      'Olá! Gostaria de conversar com a equipe de RI da Vale da Saudade Invest sobre a oportunidade de investimento no Memorial Vale da Saudade.'
    );
    window.open(`https://wa.me/551152863862?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-slate-800 font-sans selection:bg-[#C5A059]/25 selection:text-[#00452F]">
      {/* Fixed Header */}
      <Header onOpenLeadModal={handleOpenLeadModal} />

      {/* Main Content Flow */}
      <main>
        {/* 01. Hero */}
        <Hero
          onOpenLeadModal={handleOpenLeadModal}
          onOpenWhatsApp={handleWhatsAppDirect}
        />

        {/* 02. Projetos & Unidades (Segunda Dobra) */}
        <ProjectsAndExpansion
          onOpenLeadModal={handleOpenLeadModal}
          onSelectImagePreview={setActiveLightboxImage}
        />

        {/* 03. Oportunidade de Mercado */}
        <MarketOpportunity onOpenLeadModal={handleOpenLeadModal} />

        {/* 04. Modelo de Implantação & Modalidade CIC */}
        <BusinessModelAndStages onOpenLeadModal={handleOpenLeadModal} />

        {/* 05. Destinação de Recursos & Condições Financeiras (Simulador) */}
        <FinancialTermsAndSimulator onOpenLeadModal={handleOpenLeadModal} />

        {/* 06. Credibilidade e Liderança Executiva */}
        <LeadershipAndWhyInvest onOpenLeadModal={handleOpenLeadModal} />

        {/* 07. Captação — Conversão & Raise Capital */}
        <LeadCaptureSection
          initialSource={leadModalSource}
          onOpenDeckModal={() => setIsDeckModalOpen(true)}
        />

        {/* 08. FAQ — Perguntas Frequentes */}
        <FaqSection onOpenLeadModal={handleOpenLeadModal} />

        {/* CTA Final */}
        <FinalCta
          onOpenLeadModal={handleOpenLeadModal}
          onOpenWhatsApp={handleWhatsAppDirect}
        />
      </main>

      {/* 12. Rodapé Institucional */}
      <Footer
        onOpenDeckModal={() => setIsDeckModalOpen(true)}
        onOpenLeadModal={handleOpenLeadModal}
      />

      {/* Floating Discreet WhatsApp Contact Button */}
      <button
        onClick={handleWhatsAppDirect}
        className="fixed bottom-6 right-6 z-40 p-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl shadow-[#25D366]/30 hover:scale-110 active:scale-90 transition-all duration-300 flex items-center gap-2 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
        aria-label="Falar com especialista no WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white transition-transform duration-300 group-hover:rotate-12" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-semibold text-white px-0 group-hover:px-1">
          Falar no WhatsApp
        </span>
      </button>

      {/* Interactive Modals */}
      <LeadModal
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
        sourceContext={leadModalSource}
      />

      <InvestorDeckModal
        isOpen={isDeckModalOpen}
        onClose={() => setIsDeckModalOpen(false)}
        onOpenLeadModal={handleOpenLeadModal}
      />

      <ImageLightboxModal
        image={activeLightboxImage}
        onClose={() => setActiveLightboxImage(null)}
      />
    </div>
  );
}
