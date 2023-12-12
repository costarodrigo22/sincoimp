import { ComponentProps, ReactNode } from "react";

interface ButtonLabelProps extends ComponentProps<"span"> {
  children: ReactNode;
}

export default function ButtonLabel({ children, ...props }: ButtonLabelProps) {
  return <span {...props}>{children}</span>;
}
