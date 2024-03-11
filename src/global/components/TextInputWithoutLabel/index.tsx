import { ComponentProps, forwardRef } from "react";
import { Container } from "./styles";

interface TextInputWithoutLabelProps extends ComponentProps<"input"> {
  error?: string;
  icon: string;
}

export const TextInputWithoutLabel = forwardRef<
  HTMLInputElement,
  TextInputWithoutLabelProps
>(({ error, icon, ...props }, ref) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", ...props.style }}>
      <Container error={error}>
        <img src={icon} />
        <div style={{ width: "85%" }}>
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
});
