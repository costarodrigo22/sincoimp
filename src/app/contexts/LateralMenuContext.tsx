import { ReactNode, createContext, useState, useCallback } from "react";

interface lateralMenuContextprops {
  selected: string;
  onTogglemenu: (label: string) => void;
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
      value={{ selected: menuSelected, onTogglemenu: handleSelecteMenuItem }}
    >
      {children}
    </LateralMenuContext.Provider>
  );
}
