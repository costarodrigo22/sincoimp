import { useTheme } from "../../../theme/useTheme";

interface separatorLabelProps {
  label: string;
}

export default function SeparatorLabel({ label }: separatorLabelProps) {
  const theme = useTheme();

  return (
    <span
      style={{ fontSize: 12, color: theme.colors.menu_text, paddingLeft: 8 }}
    >
      {label}
    </span>
  );
}
