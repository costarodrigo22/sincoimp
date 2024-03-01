import { Card, HasContentContainer, ContainerHover } from "./styles";
import useBenefitsController from "./useBenefitsController";
import dotsIcon from "../../../assets/Icons/dots_icon.svg";
import trashIcon from "../../../assets/Icons/trash_icon.svg";
import eyeIcon from "../../../assets/Icons/eye_view_icon.svg";
import "swiper/css";

import BenefitsModal from "./components/BenefitsModal";
import { ClockLoader } from "react-spinners";
import BenefitsHeader from "./components/BenefitsHeader";
import ModalDelete from "../../../global/components/ModalDelete";

export default function Benefits() {
  const {
    listTitleAndDescription,
    loadingData,
    dataFormRef,
    isModalDeleteVisible,
    setIsModalDeleteVisible,
    handleForwardRefToModal,
    handleDeletePublication,
  } = useBenefitsController();

  return (
    <>
      <BenefitsModal ref={dataFormRef} />

      <ModalDelete
        isOpen={isModalDeleteVisible}
        onClose={() => setIsModalDeleteVisible(false)}
        onDelete={handleDeletePublication}
      />

      <Card style={{ display: "flex", flexDirection: "column" }}>
        <BenefitsHeader
          isDisabled={loadingData || listTitleAndDescription.length > 0}
        />

        {loadingData && (
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

        {listTitleAndDescription.data?.length > 0 && (
          <HasContentContainer>
            <div>
              <span style={{ fontSize: 15 }}>Minhas publicações</span>
            </div>

            <ContainerHover>
              <div
                style={{
                  width: "50%",
                  height: 400,
                  backgroundImage: listTitleAndDescription?.data[0]?.base64
                    ? `url(data:image/jpeg;base64,${listTitleAndDescription?.data[0]?.base64})`
                    : "none",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  maxHeight: 250,
                }}
              />

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  width: "100%",
                  padding: "15px 0px",
                }}
              >
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
                    <span>Excluir publicação</span>
                  </div>
                  <img src={dotsIcon} />
                </div>

                <div>
                  <h1 style={{ fontSize: 30, fontWeight: 500 }}>
                    {listTitleAndDescription?.data[0]?.titulo}
                  </h1>
                  <span style={{ fontSize: 13 }}>
                    {listTitleAndDescription?.data[0]?.descricao}
                  </span>
                </div>

                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <img
                    src={eyeIcon}
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      handleForwardRefToModal(listTitleAndDescription)
                    }
                  />
                </div>
              </div>
            </ContainerHover>
          </HasContentContainer>
        )}
      </Card>
    </>
  );
}
