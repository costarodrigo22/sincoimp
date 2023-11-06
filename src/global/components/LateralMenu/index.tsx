import { Container } from "./styles";
import logo from "../../../assets/Icons/logo_white.svg";
import { CardUser } from "../../layouts/BaseCarduser";

import bell from "../../../assets/Icons/bell_icon.svg";

export default function LateralMenu() {
  return (
    <Container>
      <div className="container-cards">
        <CardUser.Wrapper>
          <CardUser.Profile />
          <CardUser.Infos name="Rodrigo Costa" type="Sindicalizado" />
          <CardUser.Icon icon={bell} />
        </CardUser.Wrapper>
      </div>

      <div className="section-logo">
        <img src={logo} />

        <span>Sindicato dos comerciarios de Imperatriz</span>
      </div>
    </Container>
  );
}
