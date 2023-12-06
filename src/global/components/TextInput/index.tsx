import { ComponentProps, forwardRef } from "react";
import { Container } from "./styles";

interface TextInputProps extends ComponentProps<"input"> {
  error?: string;
  label: string;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ error, label, ...props }, ref) => {
    return (
      <Container error={error}>
        <div style={{ width: "70%", ...props.style }}>
          <span>
            <strong>Aa</strong> - {label}
          </span>

          <input
            {...props}
            ref={ref}
            style={{ width: "100%", outline: "none" }}
          />
        </div>

        <div className="edit-container">
          <span>Editar</span>
        </div>
      </Container>
    );
  }
);
