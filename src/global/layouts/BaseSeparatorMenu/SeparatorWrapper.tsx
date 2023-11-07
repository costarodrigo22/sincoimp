import { ReactNode } from "react";
import { useTheme } from "../../../theme/useTheme";

export default function SeparatorWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const theme = useTheme();

  return (
    <div
      style={{
        borderTop: `1px solid ${theme.colors.menu_text}`,
        marginTop: 30,
        marginBottom: 25,
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
      <div
        style={{
          display: "flex",
          marginTop: -16,
          background: theme.colors.primary.lighter,
          paddingTop: 6,
          paddingBottom: 6,
          paddingLeft: 8,
        }}
      >
        {children}
      </div>
    </div>
  );
}
