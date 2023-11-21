import { Fragment } from "react";
import { CardAdd } from "../../../global/layouts/BaseCardAdd";
import { Container } from "./styles";
import libIcon from "../../../assets/Icons/lib_icon.svg";
import { ButtonMore } from "../../../global/components/ButtonMore";
import useWelcomeController from "./useWelcomeController";
import { CardImage } from "../../../global/layouts/BaseCardImage";
import newImageIcon from "../../../assets/Icons/new_image_icon.svg";
import trashIcon from "../../../assets/Icons/trash_icon.svg";

export default function Welcome() {
  const {
    fields,
    imageUrl,
    errors,
    register,
    handleAddNewImage,
    handleSubmit,
  } = useWelcomeController();

  console.log("Erros: ", errors);

  return (
    <Container>
      <div className="head">
        <span>Boas-vindas</span>
      </div>

      <div className="main">
        <button onClick={handleSubmit}>submit</button>
        <div style={{ display: "flex", gap: 20 }}>
          {fields.map((field, index) => (
            <Fragment key={field.id}>
              {!!imageUrl && (
                <CardImage.Wrapper
                  style={{
                    backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  {/* <Loader isLoading={false} color="#0066ff" /> */}
                  <CardImage.Actions>
                    <CardImage.iconLabel
                      style={{ marginBottom: 10 }}
                      icon={newImageIcon}
                      {...register(`list.${index}.image`)}
                    />
                    <img
                      src={trashIcon}
                      // onClick={handleDeleteImage}
                      style={{ cursor: "pointer" }}
                    />
                  </CardImage.Actions>
                </CardImage.Wrapper>
              )}
              {!imageUrl && (
                <CardAdd.Wrapper
                  style={{ marginTop: 22, height: 150, width: 250 }}
                  key={field.id}
                >
                  <CardAdd.Icon icon={libIcon} />
                  <CardAdd.Label text="+ Adicionar imagem" />
                </CardAdd.Wrapper>
              )}
            </Fragment>
          ))}
        </div>

        <ButtonMore onClick={handleAddNewImage}>+</ButtonMore>
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
