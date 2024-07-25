import { StepperNextStepButton, StepperPreviousStepButton } from "..";
import { ListTopics } from "../../ListTopics";
import { Container } from "./styles";

interface TopicsProps {
  listTopics?: {
    id: string;
    icon: string;
    title: string;
    description: string;
  }[];
}

export function Topics({ listTopics }: TopicsProps) {
  return (
    <Container>
      <span style={{ fontSize: 13 }}>
        Adicione tópicos de vantagens a sua publicação!
      </span>

      <ListTopics listTopics={listTopics} />

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <StepperPreviousStepButton />

        <StepperNextStepButton />
      </div>
    </Container>
  );
}
