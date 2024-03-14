import { ReactNode, createContext, useCallback, useState } from "react";

interface AdvantagesContextProps {
  isAdvantagesModalOpen: boolean;
  tabActive: number;
  handleToggleStep: (stepIndex: number) => void;
  openAdvantagesModal: () => void;
  closeAdvantagesModal: () => void;
}

export const AdvantagesContext = createContext({} as AdvantagesContextProps);

export default function AdvantagesProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isAdvantagesModalOpen, setIsAdvantagesModalOpen] = useState(false);
  const [tabActive, setTabActive] = useState(0);

  const handleToggleStep = useCallback((stepIndex: number) => {
    setTabActive(stepIndex);
  }, []);

  function openAdvantagesModal() {
    setIsAdvantagesModalOpen(true);
  }

  function closeAdvantagesModal() {
    setIsAdvantagesModalOpen(false);
  }

  return (
    <AdvantagesContext.Provider
      value={{
        isAdvantagesModalOpen,
        tabActive,
        handleToggleStep,
        openAdvantagesModal,
        closeAdvantagesModal,
      }}
    >
      {children}
    </AdvantagesContext.Provider>
  );
}
