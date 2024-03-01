import {
  ReactNode,
  createContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { localStorageKeys } from "../config/localStorageKeys";

interface lateralMenuContextprops {
  selected: string | null;
  onSelectMenuItem: (label: string) => void;
}

export const LateralMenuContext = createContext({} as lateralMenuContextprops);

export default function LateralmenuProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [menuSelected, setMenuSelected] = useState(() => {
    const itemMenuSelected = localStorage.getItem(
      localStorageKeys.LATERAL_MENU
    );

    return itemMenuSelected;
  });

  const handleSelecteMenuItem = useCallback((label: string) => {
    setMenuSelected(label);
  }, []);

  useEffect(() => {
    if (menuSelected)
      localStorage.setItem(localStorageKeys.LATERAL_MENU, menuSelected);
  }, [menuSelected]);

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
