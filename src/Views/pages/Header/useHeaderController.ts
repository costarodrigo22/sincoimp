import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  image: z.instanceof(FileList).transform((listFile) => listFile.item(0)),
});

type FormSchema = z.infer<typeof schema>;

export function useHeaderController() {
  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormSchema>({
    resolver: zodResolver(schema),
  });

  const chosenImage = watch("image");

  const handleSubmit = hookFormHandleSubmit(async ({ image }) => {
    console.log("Dados: ", image);
  });

  useEffect(() => {
    handleSubmit();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chosenImage]);

  return { register, handleSubmit, errors };
}
