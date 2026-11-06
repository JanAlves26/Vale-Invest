export interface RegionalProject {
  year: string;
  city: string;
  state: string;
  role: string;
  image: string;
  description: string;
}

export interface InvestmentScenario {
  title: string;
  badge: string;
  amount: string;
  description: string;
  focus: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const MEMORIAL_DATA = {
  company: {
    name: "Vale da Saudade Invest",
    tagline: "Construindo projetos. Desenvolvendo oportunidades. Planejando o futuro.",
    legalIssuer: "Cemitério Memorial Vale da Saudade Fortaleza S.A.",
    modality: "Contrato de Investimento Coletivo de Dívida Não Conversível (CIC)",
    platformPartner: "Raise Capital",
    platformUrl: "https://raisecapital.com.br",
    partnerPhone: "(11) 5286-3862",
    whatsappPhone: "5585999999999", // Editable or customizable
    whatsappDisplay: "+55 (11) 5286-3862",
    supportEmail: "invest@valedasaudade.com.br",
  },
  metrics: [
    { value: "25 anos", label: "Experiência de mercado", detail: "Atuação consolidada no setor funerário" },
    { value: "4 regiões", label: "Presença comprovada", detail: "Recife, Salvador, João Pessoa e Campina Grande" },
    { value: "R$ 10 mil", label: "Aporte mínimo", detail: "Acessível para investidores qualificados" },
    { value: "1,8% a.m.", label: "Taxa de retorno", detail: "Juros mensais contratuais por 24 meses" },
  ],
  regionalUnits: [
    {
      year: "2014",
      city: "Recife",
      state: "PE",
      role: "Unidade Pioneira",
      image: "/public/assets/memorial/recife_2014.jpg",
      description: "Início da atuação regional com foco em acolhimento e padronização arquitetônica de memoriais.",
    },
    {
      year: "2016",
      city: "Salvador",
      state: "BA",
      role: "Expansão Metropolitana",
      image: "/public/assets/memorial/salvador_2016.jpg",
      description: "Desenvolvimento e presença estruturada na capital baiana, ampliando a capacidade de atendimento.",
    },
    {
      year: "2018",
      city: "João Pessoa",
      state: "PB",
      role: "Estruturação & Gestão",
      image: "/public/assets/memorial/joao_pessoa_2018.jpg",
      description: "Implantação de unidade moderna e integração de processos operacionais de alto padrão.",
    },
    {
      year: "2019",
      city: "Campina Grande",
      state: "PB",
      role: "Consolidação Regional",
      image: "/public/assets/memorial/campina_grande_2019.jpg",
      description: "Expansão para polo metropolitano estratégico com modelo arquitetônico e gestão eficiente.",
    },
  ] as RegionalProject[],
  featuredProject: {
    title: "Fortaleza & Aquiraz: um projeto com visão de futuro",
    subtitle: "Cemitério Memorial Vale da Saudade & Complexo de Velório",
    description:
      "O Complexo de Velório Vale da Saudade representa uma iniciativa voltada à implantação de uma estrutura moderna, planejada para oferecer serviços memoriais com qualidade, organização e acolhimento para atender famílias da Região Metropolitana de Fortaleza.",
    provisionalImage: "/public/assets/memorial/predio_provisorio.jpg",
    renderImage: "/public/assets/memorial/complexo_projeto_render.jpg",
    differentials: [
      {
        title: "Infraestrutura planejada",
        description: "Engenharia de precisão com paisagismo biofílico e circulação acolhedora para famílias.",
      },
      {
        title: "Ambientes modernos e funcionais",
        description: "Salas de velório climatizadas, suítes de repouso privativas e áreas sociais integradas.",
      },
      {
        title: "Localização estratégica",
        description: "Eixo rodoviário com acesso facilitado e rápido para toda a Região Metropolitana de Fortaleza.",
      },
      {
        title: "Gestão e operação profissional",
        description: "Governança corporativa rígida e protocolos operacionais aperfeiçoados ao longo de 25 anos.",
      },
    ],
  },
  stages: [
    {
      number: "01",
      title: "Planejamento Estratégico",
      description: "Estudos de viabilidade demográfica, definição de localização privilegiada e estruturação executiva do projeto.",
    },
    {
      number: "02",
      title: "Regularização e Licenciamento",
      description: "Desenvolvimento dos processos técnicos, ambientais, documentais e legais necessários perante órgãos públicos.",
    },
    {
      number: "03",
      title: "Implantação e Infraestrutura",
      description: "Execução das obras civis, paisagismo, estruturas físicas, instalações técnicas e preparação dos ambientes.",
    },
    {
      number: "04",
      title: "Operação e Desenvolvimento",
      description: "Treinamento de equipes de acolhimento, gestão profissional dos serviços e início das atividades conforme o cronograma aprovado.",
    },
  ],
  investmentConditions: {
    minimumInvestment: 10000,
    termMonths: 24,
    monthlyInterestRate: 1.8,
    scenarioBase: {
      title: "Cenário Base (Captação Mínima)",
      amount: "R$ 1.000.000",
      description: "Recursos destinados às obras de construção e implantação do empreendimento cemiterial em Aquiraz/CE.",
    },
    scenarioMax: {
      title: "Cenário Alternativo (Captação Máxima)",
      amount: "R$ 1.500.000",
      description: "Recursos destinados à mesma finalidade, com maior disponibilidade financeira para acelerar a execução das obras.",
    },
    notes:
      "Juros mensais, sem capitalização, e devolução do principal ao final dos 24 meses, contados da liberação dos recursos à empresa. Valores brutos, sujeitos à tributação aplicável, conforme as condições contratuais.",
  },
  faq: [
    {
      question: "Quem pode investir no Vale da Saudade?",
      answer:
        "Pessoas físicas ou jurídicas interessadas em conhecer as modalidades de participação oferecidas pelo empreendimento, observados os critérios de elegibilidade de cada modalidade e da regulamentação aplicável.",
    },
    {
      question: "Como funciona a modalidade do investimento?",
      answer:
        "A oferta é estruturada sob a forma de Contrato de Investimento Coletivo de Dívida Não Conversível (CIC). A empresa emissora/devedora é a Cemitério Memorial Vale da Saudade Fortaleza S.A. O investidor ingressa na posição de credor da operação, recebendo juros contratuais mensais com liquidação do principal ao final do período, sem participação societária ou aquisição de jazigos.",
    },
    {
      question: "Qual é o valor mínimo para investir?",
      answer:
        "O aporte mínimo inicial definido para a rodada é de R$ 10.000,00 (dez mil reais), possibilitando a diversificação patrimonial em um ativo de crédito privado ancorado na infraestrutura memorial.",
    },
    {
      question: "Como posso conhecer os projetos e acessar a documentação?",
      answer:
        "Basta preencher o formulário nesta página ou acionar nossa equipe diretamente via WhatsApp. Você receberá o material institucional completo e o link de acesso aos documentos e termos da oferta disponibilizados na plataforma Raise Capital.",
    },
    {
      question: "Existe garantia de rentabilidade?",
      answer:
        "As condições econômicas e os riscos dependem da modalidade de investimento. Conforme as normas vigentes, investimentos em crédito privado e contratos de investimento coletivo não possuem garantia pelo FGC e envolvem riscos de crédito e liquidez. Os juros pactuados de 1,8% ao mês constituem obrigação contratual da emissora.",
    },
    {
      question: "Qual é o papel da plataforma Raise Capital?",
      answer:
        "A Raise Capital é a plataforma autorizada que operacionaliza a captação, assegurando a checagem cadastral, formalização digital dos contratos e custódia segura do fluxo de liquidação financeira entre investidores e a sociedade empresária.",
    },
  ] as FaqItem[],
};
