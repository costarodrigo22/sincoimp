import { useTheme } from "../../../theme/useTheme";

interface menuIconProps {
  title: string;
}

export default function MenuTitle({ title }: menuIconProps) {
  const theme = useTheme();

  return (
    <span style={{ fontSize: 12, color: theme.colors.menu_text }}>{title}</span>
  );
}
