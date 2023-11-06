import { ReactNode } from "react";
import { useTheme } from "../../../theme/useTheme";

interface CardWrapperProps {
  children: ReactNode;
}

export default function CardWrapper({ children }: CardWrapperProps) {
  const theme = useTheme();

  return (
    <div
      style={{
        background: theme.colors.menu.item,
        borderRadius: "8px",
        padding: "12px",
      }}
    >
      {children}
    </div>
  );
}
