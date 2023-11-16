import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  image: z.instanceof(FileList).transform((listFile) => listFile.item(0)),
});

type FormSchema = z.infer<typeof schema>;

export default function useHeaderController() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const newImageRef = useRef<HTMLInputElement>(null);

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
    console.log("Imagem: ", image);

    if (image) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const newImageUrl = event.target?.result as string;

        setImageUrl(newImageUrl);
      };

      reader.readAsDataURL(image);
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
    chosenImage,
    errors,
    imageUrl,
    newImageRef,
    register,
    handleSubmit,
    handleDeleteImage,
  };
}
