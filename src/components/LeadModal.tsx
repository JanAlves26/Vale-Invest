import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageCircle, ShieldCheck } from 'lucide-react';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  sourceContext?: string;
}

export const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose, sourceContext }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [investmentBracket, setInvestmentBracket] = useState('R$ 25.000 a R$ 50.000');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone) return;
    setLoading(true);

    try {
      const existingLeads = JSON.parse(localStorage.getItem('vale_saudade_leads') || '[]');
      existingLeads.push({
        fullName,
        email,
        phone,
        investmentBracket,
        source: sourceContext || 'Modal CTA',
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem('vale_saudade_leads', JSON.stringify(existingLeads));
    } catch {
      // Ignore storage errors
    }

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Olá! Tenho interesse em investir no Memorial Vale da Saudade (Aquiraz/CE). Meu nome é ${fullName || 'Investidor'}. Faixa pretendida: ${investmentBracket}. Por favor, me envie a lâmina executiva da oferta.`
    );
    window.open(`https://wa.me/551152863862?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-[#FAF8F3] text-slate-900 border border-[#C5A059]/40 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl relative">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#002b1d] text-white border-b border-white/10">
          <div>
            <span className="font-serif text-lg font-bold text-[#C5A059]">
              Quero ser um Investidor
            </span>
            <p className="text-[11px] text-emerald-200/70">
              {sourceContext || 'Cemitério Memorial Vale da Saudade Fortaleza S.A.'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-md transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 rounded-full bg-[#00452F]/10 text-[#00452F] flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-[#00452F]" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#003423] mb-2">
                Solicitação Confirmada
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Nossa equipe de relações com investidores já recebeu seus dados e enviará a lâmina completa com as condições de participação.
              </p>
              <div className="space-y-3">
                <button
                  onClick={handleWhatsAppDirect}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#00452F] hover:bg-[#063B2C] rounded-md transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Acelerar Atendimento pelo WhatsApp</span>
                </button>
                <button
                  onClick={onClose}
                  className="w-full text-xs text-slate-500 hover:text-slate-800 underline py-1"
                >
                  Fechar janela
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Seu nome"
                  className="w-full px-3.5 py-2 text-sm bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00452F]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  E-mail *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu.email@exemplo.com"
                  className="w-full px-3.5 py-2 text-sm bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00452F]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Telefone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(DDD) 99999-9999"
                  className="w-full px-3.5 py-2 text-sm bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00452F]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Faixa de Aporte Pretendida
                </label>
                <select
                  value={investmentBracket}
                  onChange={(e) => setInvestmentBracket(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00452F] cursor-pointer"
                >
                  <option value="R$ 10.000 a R$ 25.000">R$ 10.000 a R$ 25.000 (Mínimo)</option>
                  <option value="R$ 25.000 a R$ 50.000">R$ 25.000 a R$ 50.000</option>
                  <option value="R$ 50.000 a R$ 100.000">R$ 50.000 a R$ 100.000</option>
                  <option value="R$ 100.000 a R$ 250.000">R$ 100.000 a R$ 250.000</option>
                  <option value="Acima de R$ 250.000">Acima de R$ 250.000</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-shimmer group w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#00452F] hover:bg-[#063B2C] hover:-translate-y-0.5 active:scale-95 rounded-md transition-all shadow-md hover:shadow-lg cursor-pointer disabled:opacity-60"
                >
                  {loading ? (
                    <span>Processando...</span>
                  ) : (
                    <>
                      <span>Receber Documentos da Oferta</span>
                      <Send className="w-4 h-4 text-[#C5A059] transition-transform duration-200 group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Atendimento confidencial e seguro</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
