import { InconInput } from "../../../../../global/components/IconInput";
import { TextInput } from "../../../../../global/components/TextInput";
import { Button } from "../../../../../global/layouts/Button";
import Modal from "../../../../../global/layouts/Modal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect, useState } from "react";
import { httpClient } from "../../../../../app/services/httpClient";
import toast from "react-hot-toast";

interface ItemAdvantageProps {
  id: string;
  icon: string;
  title: string;
  text: string;
}

interface ModalAddAdvantageProps {
  isOpen: boolean;
  closeModal: () => void;
  onAddAdvantage: (item: ItemAdvantageProps) => void;
}

const schema = z.object({
  icon: z.string().min(1, "Selecione um ícone"),
  title: z.string().min(1, "Título é obrigatório"),
  description: z.string().min(1, "Descrição é obrigatória"),
});

type FormSchema = z.infer<typeof schema>;

export function ModalAddAdvantage({
  isOpen,
  closeModal,
  onAddAdvantage,
}: ModalAddAdvantageProps) {
  const [idAdvantage, setIdAdvantage] = useState("");
  const [isLoadingDataAdvantage, setIsLoadingDataAdvantage] = useState(false);

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit: hookFormHandleSubmit,
  } = useForm<FormSchema>({
    resolver: zodResolver(schema),
  });

  const handleSubmit = hookFormHandleSubmit(
    async ({ icon, title, description }) => {
      setIsLoadingDataAdvantage(true);

      const body = {
        titulo: title,
        texto: description,
        icone: icon,
        segundo_informativo_id: idAdvantage,
      };

      try {
        const response = await httpClient.post(
          "/api/v1/categoria_segundo_informativo/store",
          body
        );

        onAddAdvantage({
          icon: response.data.data.icone,
          title: response.data.data.titulo,
          text: response.data.data.texto,
          id: response.data.data.id,
        });
      } catch (error) {
        toast.error("Erro ao adicionar vantagem");
      } finally {
        setIsLoadingDataAdvantage(false);

        closeModal();

        reset({ description: "", icon: "", title: "" });
      }
    }
  );

  async function handleGetInfosAdvantage() {
    setIsLoadingDataAdvantage(true);

    try {
      const response = await httpClient.get(
        "/api/v1/segundo_informativo/index"
      );

      setIdAdvantage(response.data.data[0].id);
    } catch (error) {
      toast.error("Erro ao buscar os dados");
    } finally {
      setIsLoadingDataAdvantage(false);
    }
  }

  useEffect(() => {
    handleGetInfosAdvantage();
  }, []);

  return (
    <Modal
      style={{ height: 300, width: 500 }}
      title="Adicionar vantagem"
      isOpen={isOpen}
      onClose={() => (
        closeModal(), reset({ description: "", icon: "", title: "" })
      )}
    >
      <div style={{ display: "flex", gap: 8 }}>
        <InconInput
          error={errors.icon?.message}
          style={{ width: "30%" }}
          {...register("icon")}
        />
        <TextInput
          label="título"
          error={errors.title?.message}
          placeholder="+ Adicionar um título"
          style={{ width: "70%" }}
          {...register("title")}
        />
      </div>

      <TextInput
        label="Descrição"
        error={errors.description?.message}
        placeholder="+ Adicionar uma descrição"
        style={{ width: "100%", marginTop: 10 }}
        {...register("description")}
      />

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          marginTop: 20,
        }}
      >
        <Button.Wrapper
          style={{
            width: 125,
            height: 35,
            background: "#D9D9D9",
            borderRadius: 5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 10,
          }}
          disabled={isLoadingDataAdvantage}
          onClick={handleSubmit}
          type="button"
        >
          <Button.Label style={{ fontSize: 12, color: "#343434" }}>
            + Adicionar
          </Button.Label>
        </Button.Wrapper>
      </div>
    </Modal>
  );
}
