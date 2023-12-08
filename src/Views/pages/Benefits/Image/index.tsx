import Loader from "../../../../global/components/Loader";
import { CardAdd } from "../../../../global/layouts/BaseCardAdd";
import { CardImage } from "../../../../global/layouts/BaseCardImage";
import useImageController from "./useImageController";
import newImageIcon from "../../../../assets/Icons/new_image_icon.svg";
import libIcon from "../../../../assets/Icons/lib_icon.svg";
import trashIcon from "../../../../assets/Icons/trash_icon.svg";
import { Button } from "../../../../global/layouts/Button";

export default function Image() {
  const { register, handleDeleteImage, handleSubmit, imageUrl } =
    useImageController();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <span style={{ fontSize: 13, marginTop: 15 }}>
        Dê um título e uma descrição a sua publicação!
      </span>

      <div style={{ display: "flex", alignItems: "center" }}>
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
          <>
            <CardAdd.Wrapper style={{ marginTop: 22, height: 150 }}>
              <CardAdd.Icon icon={libIcon} />
              <CardAdd.Label text="+ Adicionar imagem" {...register("image")} />
            </CardAdd.Wrapper>
          </>
        )}

        <div
          style={{
            marginLeft: 25,
            marginTop: 20,
            width: 240,
            height: 115,
            background: "#ECECEC",
            display: "flex",
            flexDirection: "column",
            fontSize: 11,
            padding: 10,
            borderRadius: 5,
          }}
        >
          <span>Informações sugeridas para a imagem:</span>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 25,
              fontSize: 11,
            }}
          >
            <span>Lagura: 1000 px</span>
            <span>Altura: 1000 px</span>
            <span>Formato: PNG</span>
          </div>
        </div>
      </div>

      <div
        style={{ marginTop: 30, display: "flex", justifyContent: "flex-end" }}
      >
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
          onClick={handleSubmit}
        >
          <Button.Label style={{ fontSize: 12, color: "#fff" }}>
            Salvar
          </Button.Label>
        </Button.Wrapper>
      </div>
    </div>
  );
}
