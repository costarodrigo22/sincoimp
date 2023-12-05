interface ButtonIconProps {
  icon: string;
  spaceLeft?: number;
}

export default function ButtonIcon({ icon, spaceLeft }: ButtonIconProps) {
  return <img src={icon} style={{ marginLeft: spaceLeft }} />;
}
