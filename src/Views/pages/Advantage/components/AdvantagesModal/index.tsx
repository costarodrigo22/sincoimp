// import { Swiper, SwiperSlide } from "swiper/react";
// import HeaderSteps from "../../../../../global/components/HeaderSteps";
// import { TextInput } from "../../../../../global/components/TextInput";
// import { Button } from "../../../../../global/layouts/Button";
// import StepsNavigation from "../../../../../global/components/StepsNavigation";

// import revisionIcon from "../../../../../assets/Icons/revision_icon.svg";
// import eyeIcon from "../../../../../assets/Icons/eye_icon.svg";
import Modal from "../../../../../global/layouts/Modal";
// import { useAdvantagesModalController } from "./useAdvantagesModalController";
// import { useAdvantagesController } from "../../useAdvantagesController";
import { useAdvantages } from "../../../../../app/hooks/useAdvantages";
import { Steps } from "../Steps";
import { TitleAndDescription } from "../Steps/TitleAndDescription";
import { Topics } from "../Steps/Topics";
import { Review } from "../Steps/Review";
// import AdvantageInput from "../../../../../global/components/AdvantageInput";

interface defaultValuesProps {
  dataDefaultEdit?: {
    id?: string;
    titleValueDefault?: string;
    descriptionValueDefault?: string;
    topics?: {
      id: string;
      icon: string;
      title: string;
      description: string;
    }[];
  };

  onUpdated?: () => void;
}

export default function AdvantagesModal({
  dataDefaultEdit,
  onUpdated,
}: defaultValuesProps) {
  // const { swiperIsBeginning, swiperIsEnd, handleOpenModalView } =
  //   useAdvantagesModalController();

  // const { stepsHeader } = useAdvantagesController();

  const {
    isAdvantagesModalOpen,
    // tabActive,
    closeAdvantagesModal,
    handleToggleStep,
  } = useAdvantages();

  return (
    <Modal
      style={{ height: 480, width: 740 }}
      title="Criar Publicação de Vantagens"
      isOpen={isAdvantagesModalOpen}
      onClose={() => (closeAdvantagesModal(), handleToggleStep(0))}
    >
      <Steps
        initialStep={0}
        steps={[
          {
            label: "Título e descrição",
            content: (
              <TitleAndDescription
                idValueDefault={dataDefaultEdit?.id}
                titleValueDefault={dataDefaultEdit?.titleValueDefault}
                descriptionValueDefault={
                  dataDefaultEdit?.descriptionValueDefault
                }
              />
            ),
          },
          {
            label: "Tópicos",
            content: <Topics listTopics={dataDefaultEdit?.topics} />,
          },
          { label: "Revisão", content: <Review update={onUpdated} /> },
        ]}
      />
      {/* <Swiper
        slidesPerView={1}
        spaceBetween={50}
        // onSlideChange={(swiper) => {
        //   setSwiperIsBeginning(swiper.isBeginning);
        //   setSwiperIsEnd(swiper.isEnd);
        //   handleToggleStep(swiper.snapIndex);
        // }}
      >
        <div slot="container-start">
          <HeaderSteps
            steps={stepsHeader}
            tabActive={tabActive}
            onToggleStep={handleToggleStep}
          />
        </div>

        <SwiperSlide>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: 15,
            }}
          >
            <span style={{ fontSize: 13, marginTop: 15 }}>
              Dê um título e uma descrição a sua publicação!
            </span>

            <TextInput label="título" placeholder="+ Adicionar um título" />
            <TextInput
              label="descrição"
              placeholder="+ Adicionar uma descrição"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <span style={{ fontSize: 13, marginTop: 15, marginBottom: 15 }}>
              Adicione tópicos de vantagens a sua publicação!
            </span>

            <div>
              <AdvantageInput />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 30,
              marginTop: 30,
            }}
          >
            <img src={revisionIcon} width={300} />

            <span style={{ fontSize: 13 }}>
              Antes de publicar, vamos revisar sua publicação! 🕵️
            </span>

            <Button.Wrapper
              style={{
                width: 125,
                height: 35,
                background: "#06f",
                color: "#fff",
                borderRadius: 5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={() => handleOpenModalView()}
            >
              <Button.Icon icon={eyeIcon} />
              <Button.Label style={{ marginLeft: 8, fontSize: 12 }}>
                Revisar
              </Button.Label>
            </Button.Wrapper>
          </div>
        </SwiperSlide>

        <StepsNavigation isBeginning={swiperIsBeginning} isEnd={swiperIsEnd} />
      </Swiper> */}
    </Modal>
  );
}
