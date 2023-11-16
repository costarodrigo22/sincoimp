import { CardAdd } from "../../../global/layouts/BaseCardAdd";
import { Container } from "./styles";
import libIcon from "../../../assets/Icons/lib_icon.svg";
import { ButtonMore } from "../../../global/components/ButtonMore";

export default function Welcome() {
  return (
    <Container>
      <div className="head">
        <span>Boas-vindas</span>
      </div>

      <div className="main">
        <div style={{ display: "flex", gap: 20 }}>
          <CardAdd.Wrapper style={{ marginTop: 22, height: 150, width: 250 }}>
            <CardAdd.Icon icon={libIcon} />
            <CardAdd.Label text="+ Adicionar imagem" />
          </CardAdd.Wrapper>

          <CardAdd.Wrapper style={{ marginTop: 22, height: 150, width: 250 }}>
            <CardAdd.Icon icon={libIcon} />
            <CardAdd.Label text="+ Adicionar imagem" />
          </CardAdd.Wrapper>
        </div>

        <ButtonMore>+</ButtonMore>
      </div>

      <div className="footer">
        <span style={{ marginBottom: 10, fontWeight: 600 }}>
          Tamanho sugerido:
        </span>

        <span>Lagura: 250 px</span>
        <span>Altura: 150 px</span>
      </div>
    </Container>
  );
}
