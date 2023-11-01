import { useTheme } from "../../../theme/useTheme";
import { ComponentProps, forwardRef } from "react";

export interface InputWrapperProps extends ComponentProps<"input"> {
  margin_top?: number;
  error?: string;
}

export const InputWrapper = forwardRef<HTMLInputElement, InputWrapperProps>(
  ({ children, placeholder, name, margin_top, error, ...props }, ref) => {
    const theme = useTheme();

    return (
      <>
        <div
          style={{
            borderLeft: `5px solid ${theme.colors.login.primary.lighter}`,
            boxShadow: "0px 1px 4px 0px rgba(0, 0, 0, 0.10)",
            padding: 10,
            display: "flex",
            marginTop: margin_top,
          }}
        >
          {children}

          <input
            {...props}
            ref={ref}
            name={name}
            placeholder={placeholder}
            style={{
              width: "100%",
              height: "100%",
              padding: "5px 0px",
              border: "none",
              marginLeft: 5,
              outline: 0,
            }}
          />
        </div>

        {error && (
          <span
            style={{
              color: theme.colors.login.primary.lighter,
              fontSize: 12,
            }}
          >
            {error}
          </span>
        )}
      </>
    );
  }
);
