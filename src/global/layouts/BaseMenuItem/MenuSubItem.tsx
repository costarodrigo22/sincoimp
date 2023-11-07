import { ComponentProps } from "react";
import { useTheme } from "../../../theme/useTheme";

interface subMenuProps extends ComponentProps<"div"> {
  name: string;
  active: boolean;
}

export default function MenuSubItem({ name, active, ...props }: subMenuProps) {
  const theme = useTheme();

  return (
    <div
      {...props}
      style={{
        width: "100%",
        borderLeft: `1px solid ${theme.colors.menu_text}`,
        paddingTop: 5,
        paddingBottom: 5,
        fontSize: 12,
        color: theme.colors.menu_text,
      }}
    >
      <div
        style={{
          paddingTop: 5,
          paddingBottom: 5,
          paddingLeft: 8,
          paddingRight: 0,
          marginLeft: active ? "-2px" : "0px",
          borderLeft: active ? "3px solid #0066FF" : "none",
        }}
      >
        <span>{name}</span>
      </div>
    </div>
  );
}
