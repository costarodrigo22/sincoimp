import { HashLoader } from "react-spinners";
import { Container } from "./styles";
import { Fade } from "@chakra-ui/react";
interface lounchScreenProps {
  isLoading: boolean;
}

export default function LounchScreen({ isLoading }: lounchScreenProps) {
  return (
    <Fade in={isLoading}>
      <Container>
        <HashLoader color="#fff" />
      </Container>
    </Fade>
  );
}
