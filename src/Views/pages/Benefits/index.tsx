import { Button } from "../../../global/layouts/Button";
import Modal from "../../../global/layouts/Modal";
import useBenefitsController from "./useBenefitsController";
import { Card } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import HeaderSteps from "../../../global/components/HeaderSteps";
import StepsNavigation from "../../../global/components/StepsNavigation";
import { TextInput } from "../../../global/components/TextInput";
import { InconInput } from "../../../global/components/IconInput";
import trashIcon from "../../../assets/Icons/trash_icon.svg";
import newTopicIcon from "../../../assets/Icons/newTopic_icon.svg";
import { CardImage } from "../../../global/layouts/BaseCardImage";
import Loader from "../../../global/components/Loader";
import newImageIcon from "../../../assets/Icons/new_image_icon.svg";
import libIcon from "../../../assets/Icons/lib_icon.svg";
import revisionIcon from "../../../assets/Icons/revision_icon.svg";
import eyeIcon from "../../../assets/Icons/eye_icon.svg";
import { CardAdd } from "../../../global/layouts/BaseCardAdd";

export default function Benefits() {
  const {
    modalVisible,
    tabActive,
    swiperIsEnd,
    swiperIsBeginning,
    stepsHeader,
    errors,
    fields,
    imageUrl,
    handleDeleteImage,
    handleSubmit,
    append,
    register,
    remove,
    setTabActive,
    setSwiperIsEnd,
    setSwiperIsBeginning,
    handleToggleStep,
    setModalVisible,
  } = useBenefitsController();

  console.log(errors);

  return (
    <>
      <Modal
        style={{ height: 480 }}
        title="Criar Publicação de Benefícios"
        isOpen={modalVisible}
        onClose={() => (setModalVisible(false), setTabActive(0))}
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={50}
          onSlideChange={(swiper) => {
            setSwiperIsBeginning(swiper.isBeginning);
            setSwiperIsEnd(swiper.isEnd);
            setTabActive(swiper.snapIndex);
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
                        backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
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
                onClick={handleSubmit}
              >
                <Button.Icon icon={eyeIcon} />
                <Button.Label style={{ marginLeft: 8, fontSize: 12 }}>
                  Revisar
                </Button.Label>
              </Button.Wrapper>
            </div>
          </SwiperSlide>

          <StepsNavigation
            isBeginning={swiperIsBeginning}
            isEnd={swiperIsEnd}
          />
        </Swiper>

        {/* <Wizard steps={steps} /> */}
      </Modal>

      <Card>
        <div style={{ marginRight: 15 }}>👋</div>
        <div>
          <h1 style={{ fontSize: 20, fontWeight: 500, marginBottom: 7 }}>
            Seja bem-vindo a seção de benefícios!
          </h1>
          <p style={{ fontSize: 12, marginBottom: 7 }}>
            Adicione nessa seção os benefícios do sindicalizado. Vamos nessa!
          </p>

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
            disabled={false}
            onClick={() => setModalVisible(true)}
          >
            <Button.Label style={{ fontSize: 12, color: "#fff" }}>
              + Adicionar
            </Button.Label>
          </Button.Wrapper>
        </div>
      </Card>
    </>
  );
}
