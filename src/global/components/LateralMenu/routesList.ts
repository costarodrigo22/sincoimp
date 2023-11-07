const subMenuRegister = [
  {
    name: "Funcionário do Sindicato",
    routePush: "/funcionario-sindicato",
  },
  {
    name: "Empresa",
    routePush: "/empresa",
  },
  {
    name: "Empresa Conveniada",
    routePush: "/empresa-conveniada",
  },
];

const subMenuFinancial = [
  {
    name: "Receita Funcionário",
    routePush: "/receita-funcionario",
  },
  {
    name: "Receita Empresa",
    routePush: "/receita-empresa",
  },
  {
    name: "Repasse Sindical",
    routePush: "/repasse-sindical",
  },
];

const subMenuReport = [
  {
    name: "Pagamentos Funcionários",
    routePush: "/pagamento-funcionario",
  },
  {
    name: "Pagamentos Empresa",
    routePush: "/pagamento-empresa",
  },
  {
    name: "Repasses Sindicais",
    routePush: "/repasse-sindical-relatorio",
  },
];

const subMenuSections = [
  {
    name: "Cabeçalho",
    routePush: "/cabecalho",
  },
  {
    name: "Boas-vindas",
    routePush: "/boas-vindas",
  },
  {
    name: "Benefícios",
    routePush: "/beneficios",
  },
  {
    name: "Notícias",
    routePush: "/noticias",
  },
  {
    name: "Vantagens",
    routePush: "/vantagens",
  },
  {
    name: "Rodapé",
    routePush: "/rodape",
  },
];

export const routes = {
  subMenuRegister,
  subMenuFinancial,
  subMenuReport,
  subMenuSections,
};
