import { useAdvantages } from "../../../app/hooks/useAdvantages";
import { Button } from "../../../global/layouts/Button";
import AdvantagesModal from "./components/AdvantagesModal";
import { Container, ContainerContainsInfos, ContainerInfos } from "./styles";
import { useAdvantagesController } from "./useAdvantagesController";
import dotsIcon from "../../../assets/Icons/dots_icon.svg";
import trashIcon from "../../../assets/Icons/trash_icon.svg";
import iconAdvantage from "../../../assets/Icons/icon_advantage.svg";
import eyeIcon from "../../../assets/Icons/eye_view_icon.svg";
import { ClockLoader } from "react-spinners";
import ModalDelete from "../../../global/components/ModalDelete";

export default function Advantage() {
  const { openAdvantagesModal } = useAdvantages();

  const {
    isLoading,
    listData,
    isModalDeleteVisible,
    isLoadingDelete,
    handleUpdateData,
    setIsModalDeleteVisible,
    handleDeletePublication,
  } = useAdvantagesController();

  const categoriesEdit = listData?.categories?.map((item) => ({
    id: item.id,
    icon: item.icone,
    title: item.titulo,
    description: item.texto,
  }));

  return (
    <Container>
      <AdvantagesModal
        dataDefaultEdit={{
          id: listData?.id,
          titleValueDefault: listData?.title,
          descriptionValueDefault: listData?.description,
          topics: categoriesEdit,
        }}
        onUpdated={handleUpdateData}
      />

      <ModalDelete
        isOpen={isModalDeleteVisible}
        onClose={() => setIsModalDeleteVisible(false)}
        onDelete={handleDeletePublication}
      />

      <div className="head">
        {isLoading && (
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <ClockLoader color="#141926" />
          </div>
        )}

        {!isLoading && (
          <>
            <div style={{ marginTop: 5 }}>⭐</div>
            <div className="titles">
              <h1>Seja bem-vindo a seção de Vantagens!</h1>
              <p>
                Adicione nessa seção as vantagens que o filiado tem quanto é
                filiado ao Simcoimp. Vamos nessa!
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
                disabled={isLoading || !!listData?.id}
              >
                <Button.Label style={{ fontSize: 12, color: "#fff" }}>
                  + Adicionar
                </Button.Label>
              </Button.Wrapper>
            </div>
          </>
        )}
      </div>

      {listData?.id && (
        <ContainerContainsInfos>
          <span className="title">Minhas publicações</span>

          <ContainerInfos>
            <div
              style={{
                width: "100%",
                alignItems: "center",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <div
                style={{
                  background: "#FFFFFF",
                  boxShadow: "0px 1px 1px 0px rgba(0, 0, 0, 0.05)",
                  borderRadius: "10px 0px 10px 10px",
                  width: 140,
                  height: 35,
                  fontSize: 11,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 12,
                  cursor: "pointer",
                }}
                onClick={() => setIsModalDeleteVisible(true)}
              >
                <img src={trashIcon} style={{ marginRight: 8 }} />
                <span>
                  {isLoadingDelete ? "Apagando..." : "Excluir publicação"}
                </span>
              </div>
              <img src={dotsIcon} />
            </div>

            <div className="infos-data">
              <img src={iconAdvantage} />

              <div className="title-and-description">
                <span>{listData?.title}</span>

                <small>{listData?.description}</small>
              </div>

              <img
                onClick={openAdvantagesModal}
                src={eyeIcon}
                style={{ cursor: "pointer" }}
              />
            </div>
          </ContainerInfos>
        </ContainerContainsInfos>
      )}
    </Container>
  );
}
