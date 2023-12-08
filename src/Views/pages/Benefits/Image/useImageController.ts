import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

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

  const chosenImage = watch("image");

  const handleSubmit = hookFormHandleSubmit(async ({ image }) => {
    if (image) {
      const reader = new FileReader();

      reader.readAsDataURL(image);

      reader.onload = (event) => {
        const newImageUrl = event.target?.result as string;

        setImageUrl(newImageUrl);
      };
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

  return { imageUrl, errors, register, handleSubmit, handleDeleteImage };
}
