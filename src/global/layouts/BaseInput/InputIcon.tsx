// import { ElementType } from "react";

interface InputIconProps {
  icon: string;
}

export function InputIcon({ icon: Icon }: InputIconProps) {
  return <img src={Icon} />;
}
