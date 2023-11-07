import { useTheme } from "../../../theme/useTheme";

interface infosProps {
  name: string;
  type: string;
}

export default function CardInfos({ name, type }: infosProps) {
  const theme = useTheme();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        color: theme.colors.menu_text,
      }}
    >
      <span style={{ fontSize: 11 }}>{name}</span>
      <span style={{ fontSize: 9 }}>{type}</span>
    </div>
  );
}
