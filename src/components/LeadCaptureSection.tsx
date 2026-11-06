import React, { useState } from 'react';
import { Send, CheckCircle2, MessageCircle, ExternalLink, ShieldCheck, Phone, Globe } from 'lucide-react';
import { MEMORIAL_DATA } from '../data/memorialData';

interface LeadCaptureSectionProps {
  initialSource?: string;
  onOpenDeckModal: () => void;
}

export const LeadCaptureSection: React.FC<LeadCaptureSectionProps> = ({ initialSource, onOpenDeckModal }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cityState, setCityState] = useState('');
  const [investmentBracket, setInvestmentBracket] = useState('R$ 10.000 a R$ 25.000');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone) return;
    setLoading(true);

    // Store in localStorage for lead tracking
    try {
      const existingLeads = JSON.parse(localStorage.getItem('vale_saudade_leads') || '[]');
      existingLeads.push({
        fullName,
        email,
        phone,
        cityState,
        investmentBracket,
        message,
        source: initialSource || 'Formulário Principal',
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem('vale_saudade_leads', JSON.stringify(existingLeads));
    } catch {
      // Local storage fallback
    }

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Olá! Tenho interesse em conhecer a rodada de investimento da Vale da Saudade Invest (Cemitério Memorial Fortaleza S.A.). Meu nome é ${fullName || 'Investidor'}. Faixa pretendida: ${investmentBracket}. Gostaria de receber o material completo.`
    );
    window.open(`https://wa.me/551152863862?text=${text}`, '_blank');
  };

  return (
    <section id="captacao" className="py-20 lg:py-28 bg-[#002217] text-white relative overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00452F]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Proposition & Raise Capital Trust */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#C5A059] uppercase tracking-wider mb-3">
              <span>07. Captação & Relacionamento</span>
              <span aria-hidden="true" className="text-white/30">·</span>
              <span className="text-emerald-200/90 font-normal">Atendimento Exclusivo</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-6 [text-wrap:balance]">
              Vamos conversar sobre o seu{' '}
              <span className="text-[#C5A059] font-normal italic">
                próximo investimento?
              </span>
            </h2>

            <p className="text-base sm:text-lg text-emerald-100/90 font-normal leading-relaxed mb-6">
              Conheça as oportunidades disponíveis, entenda o modelo de participação e tenha acesso às informações detalhadas dos nossos projetos memoriais.
            </p>

            <p className="text-sm text-emerald-200/75 leading-relaxed mb-8">
              Nossa equipe de relações com investidores e a plataforma parceira estão preparadas para apresentar a tese executiva e esclarecer quaisquer dúvidas.
            </p>

            {/* Raise Capital Official Partner Box (PDF Slide 8) */}
            <div className="card-dark-interactive bg-[#002b1d] border border-[#C5A059]/30 rounded-xl p-6 mb-8 shadow-md hover:border-[#C5A059]/70 cursor-default">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#C5A059] uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                <span>Plataforma Parceira Raise</span>
              </div>
              <h4 className="font-serif text-lg font-bold text-white mb-2">
                Conheça o projeto antes de decidir
              </h4>
              <p className="text-xs text-emerald-100/80 leading-relaxed mb-4">
                Na plataforma Raise você consulta as informações essenciais, os documentos contratuais completos e os fatores de risco da oferta pública regulada.
              </p>
              <div className="text-[11px] font-semibold text-amber-300/90 mb-4 bg-amber-950/40 border border-amber-500/20 p-2.5 rounded">
                "Não invista antes de entender as informações essenciais da oferta."
              </div>

              <div className="grid grid-cols-2 gap-4 pt-3 border-t border-white/10 text-xs">
                <div>
                  <span className="text-emerald-200/60 block text-[10px] uppercase">Telefone Raise:</span>
                  <a
                    href="tel:1152863862"
                    className="font-semibold text-white hover:text-[#C5A059] transition-all flex items-center gap-1 mt-0.5 active:scale-95"
                  >
                    <Phone className="w-3 h-3 text-[#C5A059]" />
                    <span>(11) 5286-3862</span>
                  </a>
                </div>
                <div>
                  <span className="text-emerald-200/60 block text-[10px] uppercase">Portal Oficial:</span>
                  <a
                    href="https://raisecapital.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-white hover:text-[#C5A059] transition-all flex items-center gap-1 mt-0.5 active:scale-95"
                  >
                    <Globe className="w-3 h-3 text-[#C5A059]" />
                    <span>raisecapital.com.br</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Actions with dynamic hover & active states */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={onOpenDeckModal}
                className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#C5A059] border border-[#C5A059]/40 hover:bg-[#C5A059] hover:text-[#002b1d] rounded-md transition-all duration-200 hover:-translate-y-0.5 active:scale-95 cursor-pointer shadow-sm hover:shadow"
              >
                <span>Visualizar Apresentação Completa</span>
              </button>
              <button
                onClick={handleWhatsAppRedirect}
                className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#25D366]/20 hover:bg-[#25D366] hover:text-[#002b1d] border border-[#25D366]/40 rounded-md transition-all duration-200 hover:-translate-y-0.5 active:scale-95 cursor-pointer shadow-sm hover:shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:text-[#002b1d] transition-colors" />
                <span>Conversar no WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF8F3] text-slate-900 rounded-2xl p-8 sm:p-10 border border-[#C5A059]/40 shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#00452F]/10 text-[#00452F] flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-[#00452F]" />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#003423] mb-3">
                    Solicitação Recebida com Sucesso
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
                    Agradecemos o seu interesse na Vale da Saudade Invest. Um de nossos especialistas em relações com investidores entrará em contato em breve para disponibilizar a lâmina executiva.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button
                      onClick={handleWhatsAppRedirect}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#00452F] hover:bg-[#063B2C] rounded-md transition-colors cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 text-[#25D366]" />
                      <span>Falar Agora no WhatsApp</span>
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 text-sm font-medium text-slate-600 hover:text-slate-900 underline text-xs"
                    >
                      Enviar nova mensagem
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-stone-200 pb-4 mb-2">
                    <h3 className="font-serif text-2xl font-bold text-[#003423]">
                      Manifestação de Interesse
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Preencha o formulário institucional para receber a lâmina executiva e as condições da oferta.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Ex: Carlos Eduardo Silveira"
                        className="w-full px-4 py-2.5 text-sm bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00452F] focus:border-transparent text-slate-900 placeholder:text-slate-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        E-mail Corporativo ou Pessoal *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Ex: carlos@empresa.com.br"
                        className="w-full px-4 py-2.5 text-sm bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00452F] focus:border-transparent text-slate-900 placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Telefone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(DDD) 99999-9999"
                        className="w-full px-4 py-2.5 text-sm bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00452F] focus:border-transparent text-slate-900 placeholder:text-slate-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Cidade e Estado
                      </label>
                      <input
                        type="text"
                        value={cityState}
                        onChange={(e) => setCityState(e.target.value)}
                        placeholder="Ex: Fortaleza, CE"
                        className="w-full px-4 py-2.5 text-sm bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00452F] focus:border-transparent text-slate-900 placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Faixa de Investimento Pretendida
                    </label>
                    <select
                      value={investmentBracket}
                      onChange={(e) => setInvestmentBracket(e.target.value)}
                      className="w-full px-4 py-2.5 text-sm bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00452F] focus:border-transparent text-slate-900 cursor-pointer"
                    >
                      <option value="R$ 10.000 a R$ 25.000">R$ 10.000 a R$ 25.000 (Aporte Inicial)</option>
                      <option value="R$ 25.000 a R$ 50.000">R$ 25.000 a R$ 50.000</option>
                      <option value="R$ 50.000 a R$ 100.000">R$ 50.000 a R$ 100.000</option>
                      <option value="R$ 100.000 a R$ 250.000">R$ 100.000 a R$ 250.000</option>
                      <option value="Acima de R$ 250.000">Acima de R$ 250.000 (Investidor Qualificado)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Mensagem ou Dúvidas Específicas
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Gostaria de saber mais sobre a documentação do CIC ou prazos de integralização..."
                      className="w-full px-4 py-2.5 text-sm bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00452F] focus:border-transparent text-slate-900 placeholder:text-slate-400"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-shimmer group w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-sm sm:text-base font-semibold text-white bg-[#00452F] hover:bg-[#063B2C] active:bg-[#002b1d] hover:-translate-y-0.5 active:scale-95 rounded-md transition-all duration-200 shadow-md hover:shadow-xl hover:shadow-[#00452F]/30 cursor-pointer disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#00452F]"
                    >
                      {loading ? (
                        <span>Enviando dados...</span>
                      ) : (
                        <>
                          <span>Quero receber a apresentação para investidores</span>
                          <Send className="w-4 h-4 text-[#C5A059] transition-transform duration-200 group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-500 text-center leading-normal">
                    Seus dados estão protegidos sob sigilo corporativo. Não realizamos spam e utilizamos suas informações unicamente para o envio da documentação de investimento.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
