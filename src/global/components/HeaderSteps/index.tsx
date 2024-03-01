import { Container } from "./styles";
import { useSwiper } from "swiper/react";

interface HeaderStepsProps {
  steps: {
    id: number;
    title: string;
  }[];
  tabActive: number;
  onToggleStep: (id: number) => void;
}

export default function HeaderSteps({
  steps,
  tabActive,
  onToggleStep,
}: HeaderStepsProps) {
  const swiper = useSwiper();

  return (
    <Container>
      {steps.map((item) => (
        <div
          key={item.id}
          style={{
            fontSize: 12,
            paddingBottom: 8,
            marginRight: 20,
            borderBottom: tabActive === item.id ? "3px solid #0066FF" : "none",
            outline: "none",
            cursor: "pointer",
          }}
          onClick={() => (onToggleStep(item.id), swiper.slideTo(item.id))}
        >
          {item.title}
        </div>
      ))}
    </Container>
  );
}
