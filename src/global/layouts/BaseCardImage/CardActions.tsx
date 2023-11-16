import { ReactNode, ComponentProps } from "react";

interface CardWrapperProps extends ComponentProps<"div"> {
  children: ReactNode;
}

export default function CardActions({ children, ...props }: CardWrapperProps) {
  return (
    <div
      {...props}
      style={{
        position: "absolute",
        right: 0,
        height: "100%",
        background: "rgba(232, 232, 232, 0.5)",
        padding: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </div>
  );
}
