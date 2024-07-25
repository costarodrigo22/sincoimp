import { useCallback, useEffect, useState } from "react";
import { httpClient } from "../../../app/services/httpClient";
import toast from "react-hot-toast";

interface InfosAdvantageProps {
  id: string;
  title: string;
  description: string;
  categories: {
    id: string;
    id_second_info: string;
    icone: string;
    titulo: string;
    texto: string;
  }[];
}

export function useAdvantagesController() {
  const [modalViewVisible, setModalViewVisible] = useState(false);
  const [tabActive, setTabActive] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  const [isModalDeleteVisible, setIsModalDeleteVisible] = useState(false);
  const [listData, setListData] = useState<InfosAdvantageProps | null>(null);

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

  async function handleGetData() {
    setIsLoading(true);

    try {
      const response = await httpClient.get(
        "/api/v1/segundo_informativo/index"
      );

      setListData({
        id: response.data.data[0]?.id,
        title: response.data.data[0]?.titulo,
        description: response.data.data[0]?.descricao,
        categories: response.data.data[0]?.categoria_segundo_informativo,
      });
    } catch (error) {
      toast.error("Algo deu errado ao listar os dadossssss");
    } finally {
      setIsLoading(false);
    }
  }

  async function handleDeletePublication() {
    setIsLoadingDelete(true);

    setIsModalDeleteVisible(false);

    try {
      await httpClient.delete(
        `/api/v1/segundo_informativo/destroy/${listData?.id}`
      );

      toast.success("Publicação deletada");
    } catch (error) {
      toast.error("Erro ao deletar publicação");
    } finally {
      setIsLoadingDelete(false);

      handleGetData();
    }
  }

  async function handleUpdateData() {
    await handleGetData();

    handleCloseModalAdvantages();
  }

  useEffect(() => {
    handleGetData();
  }, []);

  return {
    modalViewVisible,
    stepsHeader,
    tabActive,
    isLoading,
    listData,
    isModalDeleteVisible,
    isLoadingDelete,
    handleUpdateData,
    handleDeletePublication,
    setIsModalDeleteVisible,
    handleToggleStep,
    handleOpenModalAdvantages,
    handleCloseModalAdvantages,
    setModalViewVisible,
  };
}
