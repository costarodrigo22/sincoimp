import { Container, Card, CardImageSelected, CardImageChoose } from "./styles";

import exclamationIcon from "../../../assets/Icons/exclamation_icon.svg";
import libIcon from "../../../assets/Icons/lib_icon.svg";
import trashIcon from "../../../assets/Icons/trash_icon.svg";

export default function Header() {
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
              <input type="checkbox" checked={true} readOnly />

              <span>image</span>

              <div className="actions">
                <img src={trashIcon} />
              </div>
            </CardImageSelected>
          </div>

          <div style={{ width: "100%" }}>
            <CardImageChoose>
              <img src={libIcon} />
              <label>
                <span style={{ fontSize: 11 }}>+ Adicionar imagem</span>

                <input type="file" />
              </label>
            </CardImageChoose>
          </div>
        </div>
      </Card>
    </Container>
  );
}
