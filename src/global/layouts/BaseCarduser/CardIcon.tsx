interface cardIconProps {
  icon: string;
}

export default function CardIcon({ icon }: cardIconProps) {
  return <img src={icon} />;
}
