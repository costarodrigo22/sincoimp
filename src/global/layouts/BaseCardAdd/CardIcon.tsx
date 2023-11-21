interface menuIconProps {
  icon: string;
}

export default function CardIcon({ icon }: menuIconProps) {
  return <img src={icon} />;
}
