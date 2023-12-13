import { Button } from "../../layouts/Button";
import { Container } from "./styles";
import { useSwiper } from "swiper/react";

interface StepsNavigationProps {
  isBeginning: boolean;
  isEnd: boolean;
}

export default function StepsNavigation({
  isBeginning,
  isEnd,
}: StepsNavigationProps) {
  const swiper = useSwiper();

  return (
    <Container>
      {!isBeginning && !isEnd && (
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
          onClick={() => swiper.slidePrev()}
        >
          <Button.Label style={{ fontSize: 12, color: "#000" }}>
            Retornar
          </Button.Label>
        </Button.Wrapper>
      )}

      {!isEnd && (
        <Button.Wrapper
          style={{
            width: 125,
            height: 35,
            background: "#06f",
            borderRadius: 5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 10,
          }}
          disabled={false}
          onClick={() => swiper.slideNext()}
        >
          <Button.Label style={{ fontSize: 12, color: "#fff" }}>
            Avançar
          </Button.Label>
        </Button.Wrapper>
      )}
    </Container>
  );
}
