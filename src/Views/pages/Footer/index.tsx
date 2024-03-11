import { useCallback, useState } from "react";
import HeaderSteps from "../../../global/components/HeaderSteps";
import { Container } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { TextInputWithoutLabel } from "../../../global/components/TextInputWithoutLabel";
import wtsIcon from "../../../assets/Icons/whatsapp.svg";
import localtionIcon from "../../../assets/Icons/location.svg";
import emailIcon from "../../../assets/Icons/email.svg";
import instagramIcon from "../../../assets/Icons/instagram.svg";
import facebookIcon from "../../../assets/Icons/facebook.svg";
import textIcon from "../../../assets/Icons/text.svg";
import { CardAdd } from "../../../global/layouts/BaseCardAdd";
import libIcon from "../../../assets/Icons/lib_icon.svg";

export default function Footer() {
  const [tabActive, setTabActive] = useState(0);

  const stepsHeader = [
    { id: 0, title: "Informações Gerais" },
    { id: 1, title: "Institucional" },
    { id: 2, title: "Serviços" },
  ];

  const handleToggleStep = useCallback((stepIndex: number) => {
    setTabActive(stepIndex);
  }, []);

  return (
    <Container>
      <div className="head">
        <div style={{ marginTop: 5 }}>📃</div>
        <div className="titles">
          <h1>Seja bem-vindo a seção do Rodapé!</h1>
          <p>
            Adicione nessa seção as informações importante sobre o sindicato.
            Vamos nessa!
          </p>
        </div>
      </div>

      <div className="main">
        <Swiper slidesPerView={1} spaceBetween={50}>
          <div slot="container-start">
            <HeaderSteps
              steps={stepsHeader}
              tabActive={tabActive}
              onToggleStep={handleToggleStep}
            />
          </div>

          <SwiperSlide>
            <div className="swiper-slide-container">
              <div className="contacts">
                <span>Contatos</span>

                <TextInputWithoutLabel
                  icon={wtsIcon}
                  placeholder="+ Adicionar número"
                  style={{ marginBottom: 10 }}
                  // {...register("description")}
                  // error={errors.description?.message}
                />

                <TextInputWithoutLabel
                  icon={localtionIcon}
                  placeholder="+ Adicionar endereço"
                  style={{ marginBottom: 10 }}
                  // {...register("description")}
                  // error={errors.description?.message}
                />

                <TextInputWithoutLabel
                  icon={emailIcon}
                  placeholder="+ Adicionar e-mail"
                  // {...register("description")}
                  // error={errors.description?.message}
                />
              </div>

              <div className="contacts">
                <span>Redes Sociais</span>

                <TextInputWithoutLabel
                  icon={instagramIcon}
                  placeholder="+ Adicionar link instagram"
                  style={{ marginBottom: 10 }}
                  // {...register("description")}
                  // error={errors.description?.message}
                />

                <TextInputWithoutLabel
                  icon={facebookIcon}
                  placeholder="+ Adicionar link facebook"
                  style={{ marginBottom: 10 }}
                  // {...register("description")}
                  // error={errors.description?.message}
                />
              </div>
            </div>

            <div className="swiper-slide-container">
              <div className="logo">
                <span>Logotipo</span>

                {/* <TextInputWithoutLabel
                  icon={wtsIcon}
                  placeholder="+ Adicionar número"
                  style={{ marginBottom: 10 }}
                  // {...register("description")}
                  // error={errors.description?.message}
                /> */}

                <CardAdd.Wrapper
                  style={{
                    height: 150,
                    width: 250,
                    marginBottom: 10,
                    marginTop: 10,
                  }}
                  // key={image.id}
                >
                  {/* {isLoadingUpdateOrDeleteImage ? (
                    <Loader
                      isLoading={isLoadingUpdateOrDeleteImage === image.id}
                      color="#0066ff"
                    />
                  ) : ( */}
                  <>
                    <CardAdd.Icon icon={libIcon} />
                    <CardAdd.Label
                      text="+ Adicionar imagem"
                      // onChange={({ target }) =>
                      //   updateImage(
                      //     image.id,
                      //     target.files ?? ([] as unknown as FileList)
                      //   )
                      // }
                    />
                  </>
                  {/* )} */}
                </CardAdd.Wrapper>

                <TextInputWithoutLabel
                  icon={textIcon}
                  placeholder="+ Adicionar texto"
                  style={{ marginBottom: 10 }}
                  // {...register("description")}
                  // error={errors.description?.message}
                />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <span>step2</span>
          </SwiperSlide>

          <SwiperSlide>
            <span>step3</span>
          </SwiperSlide>
        </Swiper>
      </div>
    </Container>
  );
}
