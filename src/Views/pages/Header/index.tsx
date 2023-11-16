import { Container, Card } from "./styles";

import newImageIcon from "../../../assets/Icons/new_image_icon.svg";
import libIcon from "../../../assets/Icons/lib_icon.svg";
import trashIcon from "../../../assets/Icons/trash_icon.svg";
import Loader from "../../../global/components/Loader";
import useHeaderController from "./useHeaderController";
import { CardAdd } from "../../../global/layouts/BaseCardAdd";
import { CardImage } from "../../../global/layouts/BaseCardImage";

export default function Header() {
  const { register, imageUrl, handleDeleteImage } = useHeaderController();

  return (
    <Container>
      <Card>
        <div className="head">
          <span>Logotipo</span>
        </div>
        <div className="main">
          {!!imageUrl && (
            <>
              <CardImage.Wrapper
                style={{
                  backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Loader isLoading={false} color="#0066ff" />
                <CardImage.Actions>
                  <CardImage.iconLabel
                    style={{ marginBottom: 10 }}
                    icon={newImageIcon}
                    {...register("image")}
                  />
                  <img
                    src={trashIcon}
                    onClick={handleDeleteImage}
                    style={{ cursor: "pointer" }}
                  />
                </CardImage.Actions>
              </CardImage.Wrapper>
            </>
          )}

          {!imageUrl && (
            <CardAdd.Wrapper style={{ marginTop: 22, height: 150 }}>
              <CardAdd.Icon icon={libIcon} />
              <CardAdd.Label text="+ Adicionar imagem" {...register("image")} />
            </CardAdd.Wrapper>
          )}
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
