interface menuIconProps {
  icon: string;
}

export default function MenuIcon({ icon }: menuIconProps) {
  return <img src={icon} />;
}
