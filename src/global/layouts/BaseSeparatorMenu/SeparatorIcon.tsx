interface separatorIconProps {
  icon: string;
}

export default function SeparatorIcon({ icon }: separatorIconProps) {
  return <img src={icon} />;
}
