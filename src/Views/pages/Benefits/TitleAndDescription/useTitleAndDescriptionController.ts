import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

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
  });

  const handleSubmit = hookFormHandleSubmit(async ({ title, description }) => {
    console.log({ title, description });
  });

  return { errors, register, handleSubmit, reset };
}
