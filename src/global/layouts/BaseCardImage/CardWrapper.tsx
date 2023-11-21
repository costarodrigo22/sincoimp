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
        position: "relative",
        borderRadius: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 150,
        border: "1px solid #999",
        ...props.style,
      }}
    >
      {children}
    </div>
  );
}
