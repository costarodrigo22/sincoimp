import { useRef, useState } from "react";
import { benefitsService } from "../../../app/services/Benefits";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useBenefits } from "../../../app/hooks/useBenefits";
import toast from "react-hot-toast";

interface ItemValueProps {
  id: string;
  titulo: string;
  descricao: string;
  logo: string;
  base64: string;
  link: string;
  associado_id: string;
  created_at: string;
  updated_at: string;
  categoria_primeiro_informativo: TopicsProps[];
}

interface TopicsProps {
  id: string;
  titulo: string;
  icone: string;
  primeiro_informativo_id: string;
  created_at: string;
  updated_at: string;
}

export default function useBenefitsController() {
  const [isModalDeleteVisible, setIsModalDeleteVisible] = useState(false);

  const dataFormRef = useRef<{
    setFieldsValues: (values: ItemValueProps) => void;
  } | null>(null);

  const queryClient = useQueryClient();

  const { openBenefitsModal } = useBenefits();

  const { data: listTitleAndDescription = [], isLoading: loadingData } =
    useQuery({
      queryKey: ["list-title-description"],
      queryFn: () => benefitsService.listTitleAndDescription(),
    });

  const { mutateAsync } = useMutation({
    mutationKey: ["deletePublication"],
    mutationFn: async (id: string) => benefitsService.deletePublication(id),
  });

  function handleForwardRefToModal(values: ItemValueProps) {
    if (dataFormRef.current) {
      dataFormRef.current.setFieldsValues(values);
    }

    openBenefitsModal();
  }

  async function handleDeletePublication() {
    try {
      await mutateAsync(listTitleAndDescription.data[0].id);

      setIsModalDeleteVisible(false);

      toast.success("Publicação excluída.");

      queryClient.invalidateQueries({
        queryKey: ["list-title-description"],
      });
    } catch (error) {
      toast.error("Algo deu errado ao excluir a publucação!");
    }
  }

  return {
    dataFormRef,
    listTitleAndDescription,
    loadingData,
    isModalDeleteVisible,
    setIsModalDeleteVisible,
    handleForwardRefToModal,
    handleDeletePublication,
  };
}
