import { Container } from "./styles";
import logo from "../../../assets/Icons/logo_white.svg";
import { CardUser } from "../../layouts/BaseCarduser";
import { MenuItem } from "../../layouts/BaseMenuItem";

import bellIcon from "../../../assets/Icons/bell_icon.svg";
import registerIcon from "../../../assets/Icons/register_icon.svg";
import arrowIcon from "../../../assets/Icons/menu_arrow.svg";

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

        <MenuItem.Wrapper margin_top={10}>
          <MenuItem.Icon icon={registerIcon} />
          <MenuItem.Title title="Financeiro" />
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
