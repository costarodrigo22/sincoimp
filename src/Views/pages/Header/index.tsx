import { Container, Card } from "./styles";

import exclamationIcon from "../../../assets/Icons/exclamation_icon.svg";

export default function Header() {
  return (
    <Container>
      <Card>
        <div className="head">
          <span>Logotipo</span>
        </div>

        <div className="main">
          <span>add header</span>
        </div>
      </Card>
    </Container>
  );
}
