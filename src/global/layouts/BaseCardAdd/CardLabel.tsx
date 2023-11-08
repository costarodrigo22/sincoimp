import { ComponentProps, forwardRef } from "react";

interface CardLabelProps extends ComponentProps<"input"> {
  text: string;
}

export const CardLabel = forwardRef<HTMLInputElement, CardLabelProps>(
  ({ text, name, ...props }, ref) => {
    return (
      <label style={{ cursor: "pointer" }}>
        <span style={{ fontSize: 11 }}>{text}</span>

        <input
          {...props}
          style={{ display: "none" }}
          type="file"
          accept="image/*"
          ref={ref}
          name={name}
        />
      </label>
    );
  }
);
