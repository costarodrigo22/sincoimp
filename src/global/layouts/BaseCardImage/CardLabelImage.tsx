import { ComponentProps, forwardRef } from "react";

interface CardLabelImageProps extends ComponentProps<"input"> {
  icon: string;
}

export const CardLabelImage = forwardRef<HTMLInputElement, CardLabelImageProps>(
  ({ icon, name, ...props }, ref) => {
    return (
      <label style={{ cursor: "pointer" }}>
        <img src={icon} style={{ ...props.style }} />

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
