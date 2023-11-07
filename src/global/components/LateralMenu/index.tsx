import { Container } from "./styles";
import logo from "../../../assets/Icons/logo_white.svg";
import { CardUser } from "../../layouts/BaseCarduser";
import { MenuItem } from "../../layouts/BaseMenuItem";

import bellIcon from "../../../assets/Icons/bell_icon.svg";
import registerIcon from "../../../assets/Icons/register_icon.svg";
import arrowIcon from "../../../assets/Icons/menu_arrow.svg";
import financialIcon from "../../../assets/Icons/financial_icon.svg";
import reportIcon from "../../../assets/Icons/report_icon.svg";

export default function LateralMenu() {
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

  return (
    <Container>
      <div className="container-cards">
        <CardUser.Wrapper>
          <CardUser.Profile />
          <CardUser.Infos name="Rodrigo Costa" type="Sindicalizado" />
          <CardUser.Icon icon={bellIcon} />
        </CardUser.Wrapper>

        <MenuItem.Wrapper margin_top={10} list_subMenu={subMenuRegister}>
          <MenuItem.Icon icon={registerIcon} />
          <MenuItem.Title title="Cadastro" />
          <MenuItem.Icon icon={arrowIcon} />
        </MenuItem.Wrapper>

        <MenuItem.Wrapper margin_top={10} list_subMenu={subMenuFinancial}>
          <MenuItem.Icon icon={financialIcon} />
          <MenuItem.Title title="Financeiro" />
          <MenuItem.Icon icon={arrowIcon} />
        </MenuItem.Wrapper>

        <MenuItem.Wrapper margin_top={10} list_subMenu={subMenuReport}>
          <MenuItem.Icon icon={reportIcon} />
          <MenuItem.Title title="Relatórios" />
          <MenuItem.Icon icon={arrowIcon} />
        </MenuItem.Wrapper>
      </div>

      <div className="section-logo">
        <img src={logo} />

        <span>Sindicato dos comerciarios de Imperatriz</span>
      </div>
    </Container>
  );
}
