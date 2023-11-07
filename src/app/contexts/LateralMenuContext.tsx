import { ReactNode, createContext, useState, useCallback } from "react";

interface lateralMenuContextprops {
  selected: string;
  onSelectMenuItem: (label: string) => void;
}

export const LateralMenuContext = createContext({} as lateralMenuContextprops);

export default function LateralmenuProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [menuSelected, setMenuSelected] = useState("");

  const handleSelecteMenuItem = useCallback((label: string) => {
    setMenuSelected(label);
  }, []);

  return (
    <LateralMenuContext.Provider
      value={{
        selected: menuSelected,
        onSelectMenuItem: handleSelecteMenuItem,
      }}
    >
      {children}
    </LateralMenuContext.Provider>
  );
}
