import { ComponentProps, ReactNode } from "react";
import { Container } from "./styles";

interface ButtonWrapperProps extends ComponentProps<"button"> {
  children: ReactNode;
}

export default function ButtonWrapper({
  children,
  disabled,
  ...props
}: ButtonWrapperProps) {
  const backgroundColor = disabled ? "#ccc" : props.style?.background;

  return (
    <Container
      {...props}
      disabled={disabled}
      style={{
        ...props.style,
        background: backgroundColor,
        cursor: disabled ? "not-allowed" : "pointer",
      }}
    >
      {children}
    </Container>
  );
}
