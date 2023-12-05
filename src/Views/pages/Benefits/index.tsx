import { Button } from "../../../global/layouts/Button";
import Modal from "../../../global/layouts/Modal";
import { Card } from "./styles";
import useBenefitsController from "./useBenefitsController";

export default function Benefits() {
  const { modalVisible, setModalVisible } = useBenefitsController();

  return (
    <>
      <Modal
        title="Criar Publicação de Benefícios"
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
      >
        Conteúdo
      </Modal>

      <Card>
        <div style={{ marginRight: 15 }}>👋</div>
        <div>
          <h1 style={{ fontSize: 20, fontWeight: 500, marginBottom: 7 }}>
            Seja bem-vindo a seção de benefícios!
          </h1>
          <p style={{ fontSize: 12, marginBottom: 7 }}>
            Adicione nessa seção os benefícios do sindicalizado. Vamos nessa!
          </p>

          <Button.Wrapper
            style={{
              width: 125,
              height: 35,
              background: "#06f",
              borderRadius: 5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            disabled={false}
            onClick={() => setModalVisible(true)}
          >
            <Button.Label style={{ fontSize: 12, color: "#fff" }}>
              + Adicionar
            </Button.Label>
          </Button.Wrapper>
        </div>
      </Card>
    </>
  );
}
