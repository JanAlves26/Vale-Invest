import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle2, TrendingUp, AlertCircle } from 'lucide-react';
import { MEMORIAL_DATA } from '../data/memorialData';

interface FinancialTermsAndSimulatorProps {
  onOpenLeadModal: (source?: string) => void;
}

export const FinancialTermsAndSimulator: React.FC<FinancialTermsAndSimulatorProps> = ({ onOpenLeadModal }) => {
  const [investmentAmount, setInvestmentAmount] = useState<number>(50000);

  // Calculation based on 1.8% monthly gross interest, non-capitalized, principal returned at month 24
  const monthlyRate = MEMORIAL_DATA.investmentConditions.monthlyInterestRate / 100; // 0.018
  const termMonths = MEMORIAL_DATA.investmentConditions.termMonths; // 24
  const monthlyInterest = investmentAmount * monthlyRate;
  const totalInterest = monthlyInterest * termMonths;
  const totalReturnGross = investmentAmount + totalInterest;

  const quickAmounts = [10000, 25000, 50000, 100000, 150000];

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="retorno" className="py-20 lg:py-28 bg-[#FAF8F3] text-slate-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 07 Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#00452F] uppercase tracking-wider mb-3">
            <span>05. Destinação dos Recursos & Retorno</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span className="text-[#A8843F]">Transparência Financeira</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003423] tracking-tight leading-tight mb-6 [text-wrap:balance]">
            Investimentos direcionados para{' '}
            <span className="text-[#A8843F] font-normal italic">
              construir resultados sólidos.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
            Os recursos captados são estritamente direcionados ao desenvolvimento, obras civis e estruturação das instalações memoriais em Aquiraz, integrando a expansão na Região Metropolitana de Fortaleza.
          </p>
        </div>

        {/* 2 Scenarios of Captation (PDF Slide 6) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Cenário Base */}
          <div className="card-interactive bg-white rounded-2xl p-8 border border-stone-200 shadow-sm relative overflow-hidden flex flex-col justify-between group cursor-default">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#00452F] group-hover:h-1.5 transition-all duration-300" />
            <div>
              <span className="text-xs font-semibold text-[#00452F] uppercase tracking-wider block mb-2">
                Faixa de Captação · Cenário Base
              </span>
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#003423] mb-1 tabular-nums group-hover:text-[#00452F] transition-colors">
                R$ 1 milhão
              </div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-4">
                (Captação Mínima)
              </span>
              <p className="text-sm text-slate-600 leading-relaxed">
                Recursos destinados às obras de construção e implantação do empreendimento cemiterial em Aquiraz/CE, permitindo a finalização dos módulos prioritários de atendimento.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-2 text-xs text-[#00452F]">
              <CheckCircle2 className="w-4 h-4 text-[#C5A059] group-hover:scale-110 transition-transform" />
              <span>Garante a viabilidade plena da operação e cronograma base</span>
            </div>
          </div>

          {/* Cenário Alternativo */}
          <div className="card-dark-interactive bg-[#003423] text-white rounded-2xl p-8 border border-[#C5A059]/40 shadow-lg relative overflow-hidden flex flex-col justify-between group cursor-default">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#C5A059] group-hover:h-1.5 transition-all duration-300" />
            <div>
              <span className="text-xs font-semibold text-[#C5A059] uppercase tracking-wider block mb-2">
                Faixa de Captação · Alternativo
              </span>
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#C5A059] mb-1 tabular-nums group-hover:text-[#DFBF7A] transition-colors">
                R$ 1,5 milhão
              </div>
              <span className="text-xs font-semibold text-emerald-200/60 uppercase tracking-wider block mb-4">
                (Captação Máxima)
              </span>
              <p className="text-sm text-emerald-100/90 leading-relaxed">
                Recursos destinados à mesma finalidade, com maior disponibilidade financeira para antecipar a execução das obras e ampliação da infraestrutura das salas de acolhimento.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-[#C5A059]">
              <TrendingUp className="w-4 h-4 text-[#C5A059] group-hover:scale-110 transition-transform" />
              <span>Maior velocidade e antecipação das fases executivas</span>
            </div>
          </div>
        </div>

        {/* Condições Principais (PDF Slide 7) */}
        <div className="bg-white rounded-2xl p-8 sm:p-10 border border-stone-200 shadow-sm mb-16 hover:border-[#C5A059]/50 hover:shadow-md transition-all duration-300">
          <div className="mb-8">
            <h3 className="font-serif text-2xl font-bold text-[#003423] mb-2">
              Condições Oficiais do Investimento
            </h3>
            <p className="text-xs text-slate-500">
              Parâmetros registrados no Contrato de Investimento Coletivo (CIC)
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pb-8 border-b border-stone-200">
            <div className="p-3 rounded-lg hover:bg-stone-50 transition-colors">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#003423] tabular-nums mb-1">
                R$ 10 mil
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#A8843F]">
                Aporte mínimo
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Valor inicial de entrada na rodada de dívida
              </p>
            </div>

            <div className="p-3 rounded-lg hover:bg-stone-50 transition-colors">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#003423] tabular-nums mb-1">
                24 meses
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#A8843F]">
                Prazo de retorno
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Duração contratual da operação de crédito
              </p>
            </div>

            <div className="p-3 rounded-lg hover:bg-stone-50 transition-colors">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#00452F] tabular-nums mb-1">
                1,8%
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#A8843F]">
                Juros ao mês
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Remuneração mensal sem capitalização
              </p>
            </div>
          </div>

          <div className="pt-6 text-xs text-slate-600 leading-relaxed bg-[#FAF8F3] p-4 rounded-lg mt-6 border border-stone-200 flex items-start gap-3">
            <AlertCircle className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-800">Nota regulatória:</strong> Juros mensais, sem capitalização, e devolução do principal ao final dos 24 meses, contados da liberação dos recursos à empresa. Valores brutos, sujeitos à tributação aplicável, conforme as condições contratuais.
            </div>
          </div>
        </div>

        {/* Interactive Investment Simulator */}
        <div className="bg-[#002b1d] text-white rounded-2xl p-8 sm:p-12 border border-[#C5A059]/40 shadow-2xl hover:border-[#C5A059]/70 transition-colors duration-300">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#C5A059]/20 flex items-center justify-center text-[#C5A059]">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Simulador de Fluxo de Pagamentos
                </h3>
                <p className="text-xs text-emerald-200/70">
                  Calcule a projeção contratual dos proventos com base em 1,8% ao mês
                </p>
              </div>
            </div>
            <span className="text-xs bg-[#003423] text-[#C5A059] px-3 py-1.5 rounded-full border border-[#C5A059]/30 font-medium shadow-sm">
              Taxa fixa contratual: 1,8% a.m.
            </span>
          </div>

          {/* Amount Selector */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div>
                <label className="text-xs font-semibold text-emerald-200/80 uppercase tracking-wider block mb-2">
                  Valor do Aporte Pretendido
                </label>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-[#C5A059] mb-4">
                  {formatCurrency(investmentAmount)}
                </div>

                <input
                  type="range"
                  min={10000}
                  max={250000}
                  step={5000}
                  value={investmentAmount}
                  onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                  className="w-full h-2.5 bg-emerald-950 rounded-lg appearance-none cursor-pointer accent-[#C5A059] hover:accent-[#D4AF37] transition-all"
                />
                <div className="flex justify-between text-[11px] text-emerald-200/60 mt-1">
                  <span>Mín. R$ 10.000</span>
                  <span>R$ 250.000+</span>
                </div>
              </div>

              {/* Quick Select Buttons with active click states */}
              <div>
                <span className="text-xs text-emerald-200/60 block mb-2">Selecione uma faixa rápida:</span>
                <div className="flex flex-wrap gap-2">
                  {quickAmounts.map((amt) => (
                    <button
                      key={amt}
                      onClick={() => setInvestmentAmount(amt)}
                      className={`px-3 py-1.5 text-xs rounded-md transition-all duration-200 cursor-pointer active:scale-90 ${
                        investmentAmount === amt
                          ? 'bg-[#C5A059] text-[#002b1d] font-bold shadow-md scale-102 ring-2 ring-[#C5A059]/50'
                          : 'bg-[#003423] text-emerald-100 hover:bg-[#00452F] hover:text-white border border-white/10'
                      }`}
                    >
                      {formatCurrency(amt)}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenLeadModal(`Simulação: ${formatCurrency(investmentAmount)}`)}
                className="btn-shimmer group w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#002b1d] bg-[#C5A059] hover:bg-[#D4AF37] active:bg-[#A8843F] hover:-translate-y-0.5 active:scale-95 rounded-md transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-[#C5A059]/30 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Quero participar com esse valor</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Results Display Card */}
            <div className="lg:col-span-7 bg-[#003423] p-6 sm:p-8 rounded-xl border border-[#C5A059]/30 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-6 border-b border-white/10">
                <div>
                  <span className="text-xs text-emerald-200/70 uppercase tracking-wider block mb-1">
                    Juros Brutos Mensais (24x)
                  </span>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[#C5A059] tabular-nums">
                    {formatCurrency(monthlyInterest)} <span className="text-xs font-normal text-white">/mês</span>
                  </div>
                  <span className="text-[11px] text-emerald-200/60 block mt-1">
                    Fluxo mensal depositado na conta
                  </span>
                </div>

                <div>
                  <span className="text-xs text-emerald-200/70 uppercase tracking-wider block mb-1">
                    Total em Juros (24 meses)
                  </span>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-white tabular-nums">
                    {formatCurrency(totalInterest)}
                  </div>
                  <span className="text-[11px] text-[#C5A059] block mt-1 font-semibold">
                    +43,2% de rentabilidade bruta total
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-emerald-200/70 uppercase tracking-wider block">
                    Devolução do Principal + Juros Acumulados
                  </span>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-white tabular-nums mt-0.5">
                    {formatCurrency(totalReturnGross)}
                  </div>
                </div>

                <div className="text-right sm:text-right">
                  <span className="text-[11px] text-emerald-200/60 block">
                    Principal amortizado integralmente no 24º mês
                  </span>
                </div>
              </div>

              {/* Timeline Flow Micro-representation */}
              <div className="bg-[#002217] p-4 rounded-lg border border-white/5 text-xs text-emerald-200/80">
                <div className="flex items-center justify-between text-[11px] text-emerald-300 mb-2">
                  <span>Mês 01 ao Mês 24</span>
                  <span>Mês 24</span>
                </div>
                <div className="w-full bg-[#00452F] h-2 rounded-full overflow-hidden flex">
                  <div className="bg-[#C5A059] h-full w-[70%]" title="Fluxo mensal de juros" />
                  <div className="bg-white h-full w-[30%]" title="Devolução do principal" />
                </div>
                <div className="flex justify-between text-[10px] text-white/50 mt-2">
                  <span>24 parcelas de juros ({formatCurrency(monthlyInterest)}/mês)</span>
                  <span>Devolução de {formatCurrency(investmentAmount)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
