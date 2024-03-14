import { useCallback, useState } from "react";

export function useAdvantagesController() {
  const [modalViewVisible, setModalViewVisible] = useState(false);
  const [tabActive, setTabActive] = useState(0);

  const stepsHeader = [
    { id: 0, title: "Título e Descrição" },
    { id: 1, title: "Tópicos" },
    { id: 2, title: "Revisão" },
  ];

  const handleToggleStep = useCallback((stepIndex: number) => {
    setTabActive(stepIndex);
  }, []);

  function handleOpenModalAdvantages() {
    setModalViewVisible(true);
  }

  function handleCloseModalAdvantages() {
    setModalViewVisible(false);
  }

  return {
    modalViewVisible,
    stepsHeader,
    tabActive,
    handleToggleStep,
    handleOpenModalAdvantages,
    handleCloseModalAdvantages,
  };
}
