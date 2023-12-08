import { ComponentProps, forwardRef, useState } from "react";
import * as RadixIcons from "@radix-ui/react-icons";
import { IconDisplay } from "../IconDisplay";
import { Container } from "./styles";

type RadixIconNames = keyof typeof RadixIcons;

interface SelectItemProps extends ComponentProps<"select"> {
  error?: string;
}

export const InconInput = forwardRef<HTMLSelectElement, SelectItemProps>(
  ({ error, ...props }, forwardedRef) => {
    const [iconSelected, setIconSelected] = useState<RadixIconNames | null>(
      null
    );

    const radixIcons = Object.entries(RadixIcons);

    const selectOptions = radixIcons.map(([iconName, icon]) => ({
      label: iconName,
      icon,
    }));

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          ...props.style,
        }}
      >
        <Container error={error}>
          <select
            {...props}
            ref={forwardedRef}
            onChange={(event) =>
              setIconSelected(event.target.value as RadixIconNames)
            }
            style={{ width: "100%", outline: "none" }}
          >
            <option value="">+ ícone</option>
            {selectOptions.map((option, index) => (
              <option key={index} value={option.label}>
                {option.label}
              </option>
            ))}
          </select>
          <IconDisplay selectedIcon={iconSelected} />
        </Container>
      </div>
    );
  }
);
