import { ReactNode, ComponentProps } from "react";

interface CardWrapperProps extends ComponentProps<"div"> {
  children: ReactNode;
}

export default function CardWrapper({ children, ...props }: CardWrapperProps) {
  return (
    <div
      {...props}
      style={{
        width: 250,
        borderRadius: 5,
        border: "1px dashed #000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        ...props.style,
      }}
    >
      {children}
    </div>
  );
}
