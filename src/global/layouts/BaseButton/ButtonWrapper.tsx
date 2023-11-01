import { PulseLoader } from "react-spinners";
import { useTheme } from "../../../theme/useTheme";
import { ComponentProps, ReactNode } from "react";

interface ButtonWrapperProps extends ComponentProps<"button"> {
  children?: ReactNode;
  width?: number;
  label: string;
  margin_top?: number;
  border_radius?: number;
  color?: string;
  isLoading?: boolean;
}

export default function ButtonWrapper({
  children,
  width,
  label,
  margin_top,
  border_radius,
  color,
  isLoading,
  disabled,
  ...props
}: ButtonWrapperProps) {
  const theme = useTheme();

  return (
    <button
      style={{
        backgroundColor: `${theme.colors.login.primary.lighter}`,
        border: "none",
        width: width ?? "100%",
        padding: 15,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: margin_top,
        borderRadius: border_radius,
        color: color ?? "#fff",
      }}
      disabled={disabled || isLoading}
      {...props}
    >
      {!isLoading && label}
      {!isLoading && children}

      {isLoading && (
        <PulseLoader
          color="#fff"
          margin={5}
          size={6}
          style={{ marginTop: 0 }}
        />
      )}
    </button>
  );
}
