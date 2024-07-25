import React, { createContext, useCallback, useState } from "react";
import { Container, StepperHeader } from "./styles";
import { Button } from "../../../../../global/layouts/Button";
import { useStepper } from "./Topics/useStepper";

interface StepsProps {
  initialStep?: number;
  steps: {
    label: string;
    content: React.ReactNode;
  }[];
}

interface StepperContextProps {
  previousStep: () => void;
  nextStep: () => void;
}

export const StepperContext = createContext({} as StepperContextProps);

export function Steps({ steps, initialStep = 0 }: StepsProps) {
  const [currentStep, setCurrentStep] = useState(initialStep);

  const previousStep = useCallback(() => {
    setCurrentStep((prevState) => Math.max(0, prevState - 1));
  }, []);

  const nextStep = useCallback(() => {
    setCurrentStep((prevState) => Math.min(steps.length - 1, prevState + 1));
  }, [steps]);

  return (
    <StepperContext.Provider value={{ previousStep, nextStep }}>
      <Container>
        <StepperHeader>
          {steps.map((step, index) => (
            <li
              key={step.label}
              style={{
                fontSize: 12,
                paddingBottom: 8,
                marginRight: 20,
                borderBottom:
                  currentStep === index ? "3px solid #0066FF" : "none",
                outline: "none",
                cursor: "pointer",
              }}
            >
              {step.label}
            </li>
          ))}
        </StepperHeader>

        <div className="content">{steps[currentStep].content}</div>
      </Container>
    </StepperContext.Provider>
  );
}

export function StepperPreviousStepButton() {
  const { previousStep } = useStepper();

  return (
    <Button.Wrapper
      style={{
        width: 125,
        height: 35,
        background: "#F3F3F3",
        borderRadius: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 10,
      }}
      onClick={previousStep}
      disabled={false}
      type="button"
    >
      <Button.Label style={{ fontSize: 12, color: "#343434" }}>
        Anterior
      </Button.Label>
    </Button.Wrapper>
  );
}

export function StepperNextStepButton({
  preventDefault = false,
  ...props
}: Omit<React.ComponentPropsWithoutRef<typeof Button.Wrapper>, "onClick"> & {
  preventDefault?: boolean;
}) {
  const { nextStep } = useStepper();

  const nextStepHandler = !preventDefault ? nextStep : undefined;

  return (
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
      onClick={nextStepHandler}
      disabled={false}
      type="button"
      {...props}
    >
      <Button.Label style={{ fontSize: 12, color: "#fff" }}>
        Próximo
      </Button.Label>
    </Button.Wrapper>
  );
}
