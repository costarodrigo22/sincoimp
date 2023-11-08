import { ClockLoader } from "react-spinners";
import { Container } from "./styles";

interface LoaderProps {
  color: string;
  isLoading: boolean;
}

export default function Loader({ color, isLoading }: LoaderProps) {
  if (!isLoading) return null;

  return (
    <Container>
      <ClockLoader color={color} />
    </Container>
  );
}
