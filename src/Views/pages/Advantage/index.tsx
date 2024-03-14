import { useAdvantages } from "../../../app/hooks/useAdvantages";
import { Button } from "../../../global/layouts/Button";
import AdvantagesModal from "./components/AdvantagesModal";
import { Container } from "./styles";

export default function Advantage() {
  const { openAdvantagesModal } = useAdvantages();

  return (
    <Container>
      <AdvantagesModal />

      <div className="head">
        <div style={{ marginTop: 5 }}>⭐</div>
        <div className="titles">
          <h1>Seja bem-vindo a seção de Vantagens!</h1>
          <p>
            Adicione nessa seção as vantagens que o filiado tem quanto é filiado
            ao Simcoimp. Vamos nessa!
          </p>

          <Button.Wrapper
            style={{
              width: 125,
              height: 35,
              background: "#06f",
              marginTop: 20,
              borderRadius: 5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={openAdvantagesModal}
          >
            <Button.Label style={{ fontSize: 12, color: "#fff" }}>
              + Adicionar
            </Button.Label>
          </Button.Wrapper>
        </div>
      </div>
    </Container>
  );
}
