import { ReactNode, ComponentProps } from "react";

interface CArdWrapperProps extends ComponentProps<"div"> {
  children: ReactNode;
}

export default function CardWrapper({ children, ...props }: CArdWrapperProps) {
  return (
    <div
      {...props}
      style={{
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
