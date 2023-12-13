import { ReactNode, useCallback, useState } from "react";
import { Header } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import StepsNavigation from "../StepsNavigation";
import "swiper/css";
import HeaderSteps from "../HeaderSteps";

interface WizardProps {
  steps: {
    id: number;
    title: string;
    component: ReactNode;
  }[];
}

export default function Wizard({ steps }: WizardProps) {
  const [tabActive, setTabActive] = useState(0);
  const [swiperIsBeginning, setSwiperIsBeginning] = useState(true);
  const [swiperIsEnd, setSwiperIsEnd] = useState(false);

  const handleToggleStep = useCallback((stepIndex: number) => {
    setTabActive(stepIndex);
  }, []);

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={50}
      onSlideChange={(swiper) => {
        setSwiperIsBeginning(swiper.isBeginning);
        setSwiperIsEnd(swiper.isEnd);
        setTabActive(swiper.snapIndex);
      }}
    >
      <Header slot="container-start">
        <HeaderSteps
          steps={steps}
          tabActive={tabActive}
          onToggleStep={handleToggleStep}
        />
      </Header>
      {steps.map((item) => (
        <SwiperSlide key={item.id}>{item.component}</SwiperSlide>
      ))}

      <StepsNavigation isBeginning={swiperIsBeginning} isEnd={swiperIsEnd} />
    </Swiper>
  );
}
