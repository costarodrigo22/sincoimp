import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { authService, singInProps } from "../../../app/services/authService";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useAuth } from "../../../app/hooks/useAuth";

const schema = z.object({
  user: z.string().min(1, "Usuário é obrigatório"),
  password: z.string().min(4, "Sua senha deve ter no mínimo 4 caracteres"),
});

type FormSchema = z.infer<typeof schema>;

export default function useLoginController() {
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(schema),
  });

  const { isPending, mutateAsync } = useMutation({
    mutationKey: ["singIn"],
    mutationFn: async (data: singInProps) => {
      return authService.singIn(data);
    },
  });

  const { signin } = useAuth();

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    const body = {
      cpf: data.user,
      senha: data.password,
    };

    try {
      const { data: responseData } = await mutateAsync(body);

      signin(responseData.access_token);
    } catch {
      toast.error("Credenciais inválidas");
    }
  });

  return { handleSubmit, register, errors, isPending };
}
