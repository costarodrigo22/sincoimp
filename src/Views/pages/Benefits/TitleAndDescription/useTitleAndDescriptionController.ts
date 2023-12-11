import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { benefitsService } from "../../../../app/services/Benefits";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

interface dataProps {
  description: string;
  title: string;
}

const schema = z.object({
  title: z.string().min(1, "Título é obrigatório"),
  description: z.string().min(1, "Descrição é obrigatória"),
});

type FormSchema = z.infer<typeof schema>;

export default function useTitleAndDescriptionController() {
  const {
    register,
    reset,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(schema),
    defaultValues: { description: "", title: "" },
  });

  const { isPending, mutateAsync } = useMutation({
    mutationKey: ["add-title-description"],
    mutationFn: async (data: dataProps) => {
      return benefitsService.titleAndDescription(data);
    },
  });

  const handleSubmit = hookFormHandleSubmit(async ({ title, description }) => {
    const body = {
      description,
      title,
    };

    try {
      await mutateAsync(body);

      toast.success("Título e descrição adicionados com sucesso");
    } catch (error) {
      toast.success("Erro ao adicionar título e descrição");
    }
  });

  return { errors, isPending, register, handleSubmit, reset };
}
