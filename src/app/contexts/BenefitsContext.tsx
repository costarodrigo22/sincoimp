import { ReactNode, createContext, useCallback, useState } from "react";

interface BenefitsContextProps {
  isBenefitsModalOpen: boolean;
  tabActive: number;
  handleToggleStep: (stepIndex: number) => void;
  openBenefitsModal: () => void;
  closeBenefitsModal: () => void;
}

export const BenefitsContext = createContext({} as BenefitsContextProps);

export default function BenefitsProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isBenefitsModalOpen, setIsBenefitsModalOpen] = useState(false);
  const [tabActive, setTabActive] = useState(0);

  const handleToggleStep = useCallback((stepIndex: number) => {
    setTabActive(stepIndex);
  }, []);

  function openBenefitsModal() {
    setIsBenefitsModalOpen(true);
  }

  function closeBenefitsModal() {
    setIsBenefitsModalOpen(false);
  }

  return (
    <BenefitsContext.Provider
      value={{
        isBenefitsModalOpen,
        tabActive,
        handleToggleStep,
        openBenefitsModal,
        closeBenefitsModal,
      }}
    >
      {children}
    </BenefitsContext.Provider>
  );
}
