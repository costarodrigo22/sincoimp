import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { benefitsService } from "../../../../app/services/Benefits";
import toast from "react-hot-toast";

interface dataProps {
  data: {
    titulo: string;
    icone: string;
  }[];
}

const schema = z.object({
  topics: z.array(
    z.object({
      icon: z.string().min(1, "Selecione um ícone"),
      title: z.string().min(1, "Informe o título"),
    })
  ),
});

type FormSchema = z.infer<typeof schema>;

export default function useTopicsController() {
  const {
    control,
    register,
    reset,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(schema),
    defaultValues: { topics: [{ icon: "", title: "" }] },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "topics",
  });

  const { data: listTitleAndDescription } = useQuery({
    queryKey: ["list-title-description"],
    queryFn: () => benefitsService.listTitleAndDescription(),
  });

  const { isPending, mutateAsync } = useMutation({
    mutationKey: ["add-topics"],
    mutationFn: async (data: dataProps) => benefitsService.topics(data),
  });

  const handleSubmit = hookFormHandleSubmit(async ({ topics }) => {
    const arrayMapped = topics.map((item) => {
      return {
        titulo: item.title,
        icone: item.icon,
        primeiro_informativo_id: listTitleAndDescription.data[0].id,
      };
    });

    try {
      await mutateAsync({ data: arrayMapped });

      toast.success("Tópicos adicionados com sucesso");
    } catch (error) {
      toast.error("Algo deu errado ao adicionar tópicos");
    }
  });

  return {
    fields,
    errors,
    isPending,
    register,
    handleSubmit,
    reset,
    append,
    remove,
  };
}
