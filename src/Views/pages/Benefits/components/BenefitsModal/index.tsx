import { Swiper, SwiperSlide } from "swiper/react";
import HeaderSteps from "../../../../../global/components/HeaderSteps";
import { TextInput } from "../../../../../global/components/TextInput";
import { Button } from "../../../../../global/layouts/Button";
import { InconInput } from "../../../../../global/components/IconInput";
import { CardImage } from "../../../../../global/layouts/BaseCardImage";
import Loader from "../../../../../global/components/Loader";
import { CardAdd } from "../../../../../global/layouts/BaseCardAdd";
import StepsNavigation from "../../../../../global/components/StepsNavigation";

import trashIcon from "../../../../../assets/Icons/trash_icon.svg";
import newTopicIcon from "../../../../../assets/Icons/newTopic_icon.svg";
import newImageIcon from "../../../../../assets/Icons/new_image_icon.svg";
import libIcon from "../../../../../assets/Icons/lib_icon.svg";
import revisionIcon from "../../../../../assets/Icons/revision_icon.svg";
import eyeIcon from "../../../../../assets/Icons/eye_icon.svg";
import Modal from "../../../../../global/layouts/Modal";
import { useBenefitsModalController } from "./useBenefitsModalController";
import ModalPreviewBonefits from "../ModalPreviewBonefits";
import { useBenefits } from "../../../../../app/hooks/useBenefits";
import { forwardRef, useImperativeHandle } from "react";

interface ItemValueProps {
  data: {
    id: string;
    titulo: string;
    descricao: string;
    logo: string;
    base64: string;
    link: string;
    associado_id: string;
    created_at: string;
    updated_at: string;
    categoria_primeiro_informativo: TopicsProps[];
  }[];
}

interface TopicsProps {
  titulo: string;
  icone: string;
  primeiro_informativo_id: string;
  created_at: string;
  updated_at: string;
}

const BenefitsModal = forwardRef((_, ref) => {
  const {
    // image,
    fields,
    errors,
    swiperIsBeginning,
    swiperIsEnd,
    imageUrl,
    stepsHeader,
    modalViewVisible,
    description,
    title,
    topics,
    isAllMutationsLoading,
    handleDeleteImage,
    handleResetModal,
    setValue,
    handleSubmit,
    append,
    remove,
    register,
    setSwiperIsBeginning,
    setSwiperIsEnd,
    handleCloseModalView,
    handleOpenModalView,
  } = useBenefitsModalController();

  const {
    isBenefitsModalOpen,
    tabActive,
    closeBenefitsModal,
    handleToggleStep,
  } = useBenefits();

  useImperativeHandle(
    ref,
    () => ({
      setFieldsValues: (values: ItemValueProps) => {
        const arrayTopics = values.data[0].categoria_primeiro_informativo.map(
          (item) => ({
            icon: item.icone,
            title: item.titulo,
          })
        );

        setValue("title", values.data[0].titulo);
        setValue("description", values.data[0].descricao);
        setValue("topics", arrayTopics);
        setValue("image", values.data[0].base64);
      },
    }),
    [setValue]
  );

  return (
    <Modal
      style={{ height: 480, width: 650 }}
      title="Criar Publicação de Benefícios"
      isOpen={isBenefitsModalOpen}
      onClose={() => (
        closeBenefitsModal(), handleToggleStep(0), handleResetModal()
      )}
    >
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        onSlideChange={(swiper) => {
          setSwiperIsBeginning(swiper.isBeginning);
          setSwiperIsEnd(swiper.isEnd);
          handleToggleStep(swiper.snapIndex);
        }}
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

            <TextInput
              label="título"
              placeholder="+ Adicionar um título"
              {...register("title")}
              error={errors.title?.message}
            />
            <TextInput
              label="descrição"
              placeholder="+ Adicionar uma descrição"
              {...register("description")}
              error={errors.description?.message}
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
              Adicione tópicos a sua publicação!
            </span>

            <Button.Wrapper
              style={{
                width: 125,
                height: 35,
                background: "#D9D9D9",
                borderRadius: 5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              disabled={false}
              onClick={() => append({ icon: "", title: "" })}
            >
              <Button.Icon icon={newTopicIcon} />
              <Button.Label
                style={{
                  fontSize: 12,
                  color: "#000",
                  fontWeight: 500,
                  marginLeft: 8,
                }}
              >
                Novo tópico
              </Button.Label>
            </Button.Wrapper>

            <div
              style={{
                overflow: "auto",
                height: 200,
                marginTop: 10,
              }}
            >
              {fields.map((field, index) => (
                <div
                  key={field.id}
                  style={{
                    display: "flex",
                    gap: 10,
                    marginBottom: 10,
                  }}
                >
                  <InconInput
                    style={{ width: "25%" }}
                    error={errors.topics?.[index]?.icon?.message}
                    {...register(`topics.${index}.icon`)}
                  />

                  <TextInput
                    label="título"
                    placeholder="+ Adicionar um título"
                    error={errors.topics?.[index]?.title?.message}
                    style={{ width: "75%" }}
                    {...register(`topics.${index}.title`)}
                  />
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img src={trashIcon} onClick={() => remove(index)} />
                  </div>
                </div>
              ))}
            </div>
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
              Adicione uma imagem a sua publicação!
            </span>

            <div style={{ display: "flex", alignItems: "center" }}>
              {!!imageUrl && (
                <>
                  <CardImage.Wrapper
                    style={{
                      backgroundImage: imageUrl ? `url(${imageUrl})` : "null",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <Loader isLoading={false} color="#0066ff" />
                    <CardImage.Actions>
                      <CardImage.IconLabel
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
                    <CardAdd.Label
                      text="+ Adicionar imagem"
                      {...register("image")}
                    />
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
      </Swiper>

      <Modal
        isOpen={modalViewVisible}
        style={{ height: 570, width: 1900 }}
        title=""
        onClose={handleCloseModalView}
      >
        <ModalPreviewBonefits
          image={imageUrl}
          topics={topics}
          title={title}
          description={description}
          isLoading={isAllMutationsLoading}
          onSubmit={handleSubmit}
        />
      </Modal>

      {/* <Wizard steps={steps} /> */}
    </Modal>
  );
});

export default BenefitsModal;
