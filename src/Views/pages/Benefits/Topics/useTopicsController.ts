import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  topics: z.array(
    z.object({
      icon: z.string(),
      title: z.string(),
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
  });

  const {} = useFieldArray({
    control,
    name: "topics",
  });

  const handleSubmit = hookFormHandleSubmit(async ({ image }) => {
    console.log(image);
  });

  return { errors, register, handleSubmit, reset };
}
