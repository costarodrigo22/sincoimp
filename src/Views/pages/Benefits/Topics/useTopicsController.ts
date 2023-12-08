import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

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

  const handleSubmit = hookFormHandleSubmit(async ({ topics }) => {
    console.log(topics);
  });

  return { fields, errors, register, handleSubmit, reset, append, remove };
}
