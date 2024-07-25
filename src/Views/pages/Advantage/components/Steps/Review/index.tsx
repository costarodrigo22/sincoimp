import { Button } from "../../../../../../global/layouts/Button";
import { Container } from "./styles";
import eyeIcon from "../../../../../../assets/Icons/eye_icon.svg";
import { StepperPreviousStepButton } from "..";
import revisionIcon from "../../../../../../assets/Icons/revision_icon.svg";
import { useAdvantages } from "../../../../../../app/hooks/useAdvantages";

interface ReviewProps {
  update?: () => void;
}

export function Review({ update }: ReviewProps) {
  const { closeAdvantagesModal } = useAdvantages();

  function handleUpdated() {
    if (update) {
      update();
    }

    closeAdvantagesModal();
  }

  return (
    <Container>
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
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 10,
          marginTop: 30,
        }}
      >
        <StepperPreviousStepButton />

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
          onClick={handleUpdated}
        >
          <Button.Icon icon={eyeIcon} />
          <Button.Label style={{ marginLeft: 8, fontSize: 12 }}>
            Revisar
          </Button.Label>
        </Button.Wrapper>
      </div>
    </Container>
  );
}
