import { ReactNode, ComponentProps } from "react";
import { useTheme } from "../../../theme/useTheme";

interface CardWrapperProps extends ComponentProps<"div"> {
  children: ReactNode;
  margin_top?: number;
}

export default function CardWrapper({
  children,
  margin_top,
  ...props
}: CardWrapperProps) {
  const theme = useTheme();

  return (
    <div
      {...props}
      style={{
        background: theme.colors.menu.item,
        borderRadius: "8px",
        padding: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: margin_top,
      }}
    >
      {children}
    </div>
  );
}
