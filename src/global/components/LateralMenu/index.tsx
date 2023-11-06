import { Container } from "./styles";
import logo from "../../../assets/Icons/logo_white.svg";
import { CardUser } from "../../layouts/BaseCarduser";

export default function LateralMenu() {
  return (
    <Container>
      <div>
        <CardUser.Wrapper>
          <span>menu lateral</span>
        </CardUser.Wrapper>
      </div>

      <div className="section-logo">
        <img src={logo} />

        <span>Sindicato dos comerciarios de Imperatriz</span>
      </div>
    </Container>
  );
}
