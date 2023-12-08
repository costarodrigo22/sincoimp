import { ComponentProps, forwardRef } from "react";
import { Container } from "./styles";

interface TextInputProps extends ComponentProps<"input"> {
  error?: string;
  label: string;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ error, label, ...props }, ref) => {
    return (
      <div style={{ display: "flex", flexDirection: "column", ...props.style }}>
        <Container error={error}>
          <div style={{ width: "85%" }}>
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
        {/* {error && <span style={{ color: "red", fontSize: 11 }}>{error}</span>} */}
      </div>
    );
  }
);
