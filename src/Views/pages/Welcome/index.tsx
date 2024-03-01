import { Fragment, useEffect } from "react";
import { CardAdd } from "../../../global/layouts/BaseCardAdd";
import { Container, ContainerSpinner } from "./styles";
import libIcon from "../../../assets/Icons/lib_icon.svg";
import useWelcome from "./useWelcome";
import { CardImage } from "../../../global/layouts/BaseCardImage";
import newImageIcon from "../../../assets/Icons/new_image_icon.svg";
import trashIcon from "../../../assets/Icons/trash_icon.svg";
import Loader from "../../../global/components/Loader";
import { Spinner } from "@chakra-ui/react";

export default function Welcome() {
  const {
    images,
    isLoadingGetImages,
    isLoadingUpdateOrDeleteImage,
    getImages,
    updateImage,
    deleteImage,
  } = useWelcome();

  useEffect(() => {
    getImages();
  }, [getImages]);

  return (
    <Container>
      <div className="head">
        <span>Boas-vindas</span>
      </div>

      {isLoadingGetImages ? (
        <ContainerSpinner>
          <Spinner />
        </ContainerSpinner>
      ) : (
        <div className="main">
          <div style={{ display: "flex", gap: 20 }}>
            {images?.map((image) => (
              <Fragment key={image.id}>
                {image.base64 ? (
                  <CardImage.Wrapper
                    style={{
                      backgroundImage: image?.base64
                        ? `url(data:image/jpeg;base64,${image?.base64})`
                        : "none",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <Loader
                      isLoading={isLoadingUpdateOrDeleteImage === image.id}
                      color="#0066ff"
                    />

                    <CardImage.Actions>
                      <CardImage.IconLabel
                        onChange={({ target }) =>
                          updateImage(
                            image.id,
                            target.files ?? ([] as unknown as FileList)
                          )
                        }
                        style={{ marginBottom: 10 }}
                        icon={newImageIcon}
                      />
                      <img
                        src={trashIcon}
                        alt="trash"
                        onKeyDown={() => deleteImage(image.id)}
                        onClick={() => deleteImage(image.id)}
                        style={{ cursor: "pointer" }}
                      />
                    </CardImage.Actions>
                  </CardImage.Wrapper>
                ) : (
                  <CardAdd.Wrapper
                    style={{ height: 150, width: 250 }}
                    key={image.id}
                  >
                    {isLoadingUpdateOrDeleteImage ? (
                      <Loader
                        isLoading={isLoadingUpdateOrDeleteImage === image.id}
                        color="#0066ff"
                      />
                    ) : (
                      <>
                        <CardAdd.Icon icon={libIcon} />
                        <CardAdd.Label
                          text="+ Adicionar imagem"
                          onChange={({ target }) =>
                            updateImage(
                              image.id,
                              target.files ?? ([] as unknown as FileList)
                            )
                          }
                        />
                      </>
                    )}
                  </CardAdd.Wrapper>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      )}

      <div className="footer">
        <span style={{ marginBottom: 10, fontWeight: 600 }}>
          Tamanho sugerido:
        </span>

        <span>Largura: 1920 px</span>
        <span>Altura: 1080 px</span>
      </div>
    </Container>
  );
}
