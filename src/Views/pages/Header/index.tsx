import { Container, Card, CardImageSelected } from "./styles";

import exclamationIcon from "../../../assets/Icons/exclamation_icon.svg";
import libIcon from "../../../assets/Icons/lib_icon.svg";
import trashIcon from "../../../assets/Icons/trash_icon.svg";
import Loader from "../../../global/components/Loader";
import useHeaderController from "./useHeaderController";
import { CardAdd } from "../../../global/layouts/BaseCardAdd";

export default function Header() {
  const { register, handleDeleteImage } = useHeaderController();

  return (
    <Container>
      <Card>
        <div className="head">
          <span>Logotipo</span>
        </div>
        <div className="main">
          <div style={{ width: "100%" }}>
            <div style={{ display: "flex" }}>
              <img src={exclamationIcon} />
              <span style={{ fontSize: 10, color: "#06F", marginLeft: 5 }}>
                Imagem atual
              </span>
            </div>
            <CardImageSelected>
              <Loader color="#0066FF" isLoading={false} />

              <input type="checkbox" checked={true} readOnly />

              <span style={{ fontSize: 10 }}>Nenhuma imagem</span>

              <div className="actions">
                <img src={trashIcon} onClick={handleDeleteImage} />
              </div>
            </CardImageSelected>
          </div>

          <div style={{ width: "100%", position: "relative" }}>
            <CardAdd.Wrapper style={{ marginTop: 22, height: 150 }}>
              <CardAdd.Icon icon={libIcon} />
              <CardAdd.Label text="+ Adicionar imagem" {...register("image")} />
            </CardAdd.Wrapper>
          </div>
        </div>

        <div className="footer">
          <span style={{ marginBottom: 10, fontWeight: 600 }}>
            Tamanho sugerido:
          </span>

          <span>Lagura: 250 px</span>
          <span>Altura: 150 px</span>
        </div>
      </Card>
    </Container>
  );
}
