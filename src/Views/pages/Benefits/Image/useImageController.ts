import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { benefitsService } from "../../../../app/services/Benefits";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

interface dataProps {
  id: string;
  image: File | null;
}

const schema = z.object({
  image: z.instanceof(FileList).transform((listFile) => listFile.item(0)),
});

type FormSchema = z.infer<typeof schema>;

export default function useImageController() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const {
    register,
    reset,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormSchema>({
    resolver: zodResolver(schema),
  });

  const { data: listTitleAndDescription } = useQuery({
    queryKey: ["list-title-description"],
    queryFn: () => benefitsService.listTitleAndDescription(),
  });

  const { isPending, mutateAsync } = useMutation({
    mutationKey: ["add-image"],
    mutationFn: async (data: dataProps) => benefitsService.image(data),
  });

  const chosenImage = watch("image");

  const handleSubmit = hookFormHandleSubmit(async ({ image }) => {
    if (image) {
      const reader = new FileReader();

      reader.readAsDataURL(image);

      reader.onload = (event) => {
        const newImageUrl = event.target?.result as string;

        setImageUrl(newImageUrl);
      };

      try {
        await mutateAsync({
          id: listTitleAndDescription.data[0].id,
          image: image,
        });

        toast.success("Imagem adicionada com sucesso!");
      } catch (error) {
        toast.error("Algo deu errado ao adicionar a imagem!");
      }
    }
  });

  function handleDeleteImage() {
    setImageUrl(null);

    reset();
  }

  useEffect(() => {
    handleSubmit();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chosenImage]);

  return {
    imageUrl,
    isPending,
    errors,
    register,
    handleSubmit,
    handleDeleteImage,
  };
}
