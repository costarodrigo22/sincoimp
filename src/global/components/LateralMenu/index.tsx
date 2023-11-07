import { Container } from "./styles";
import logo from "../../../assets/Icons/logo_white.svg";
import { CardUser } from "../../layouts/BaseCarduser";
import { MenuItem } from "../../layouts/BaseMenuItem";

import bellIcon from "../../../assets/Icons/bell_icon.svg";
import registerIcon from "../../../assets/Icons/register_icon.svg";
import arrowIcon from "../../../assets/Icons/menu_arrow.svg";
import financialIcon from "../../../assets/Icons/financial_icon.svg";
import reportIcon from "../../../assets/Icons/report_icon.svg";
import settinsIcon from "../../../assets/Icons/settings_icon.svg";
import sectionsIcon from "../../../assets/Icons/sections_icon.svg";
import { routes } from "./routesList";
import { Separator } from "../../layouts/BaseSeparatorMenu";

export default function LateralMenu() {
  return (
    <Container>
      <div className="container-cards">
        <CardUser.Wrapper>
          <CardUser.Profile />
          <CardUser.Infos name="Rodrigo Costa" type="Sindicalizado" />
          <CardUser.Icon icon={bellIcon} />
        </CardUser.Wrapper>

        <MenuItem.Wrapper margin_top={10} list_subMenu={routes.subMenuRegister}>
          <MenuItem.Icon icon={registerIcon} />
          <MenuItem.Title title="Cadastro" />
          <MenuItem.Icon icon={arrowIcon} />
        </MenuItem.Wrapper>

        <MenuItem.Wrapper
          margin_top={10}
          list_subMenu={routes.subMenuFinancial}
        >
          <MenuItem.Icon icon={financialIcon} />
          <MenuItem.Title title="Financeiro" />
          <MenuItem.Icon icon={arrowIcon} />
        </MenuItem.Wrapper>

        <MenuItem.Wrapper margin_top={10} list_subMenu={routes.subMenuReport}>
          <MenuItem.Icon icon={reportIcon} />
          <MenuItem.Title title="Relatórios" />
          <MenuItem.Icon icon={arrowIcon} />
        </MenuItem.Wrapper>

        <Separator.Wrapper>
          <Separator.Icon icon={settinsIcon} />
          <Separator.Label label="Ferramentas do site" />
        </Separator.Wrapper>

        <MenuItem.Wrapper margin_top={10} list_subMenu={routes.subMenuSections}>
          <MenuItem.Icon icon={sectionsIcon} />
          <MenuItem.Title title="Seções" />
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
