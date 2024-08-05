import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { httpClient } from "../../../app/services/httpClient";
import toast from "react-hot-toast";

const schema = z.object({
  image: z.instanceof(FileList).transform((listFile) => listFile.item(0)),
});

type FormSchema = z.infer<typeof schema>;

export default function useHeaderController() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const [image, setImage] = useState<string | null>(null);
  const [companyId, setCompanyId] = useState<string>("");
  const [loadingImage, setLoadingImage] = useState(false);

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

  async function handlegetImage() {
    setLoadingImage(true);

    try {
      const response = await httpClient.get("/api/v1/empresa/index");

      setImage(response.data.data[0].base64);
      setCompanyId(response.data.data[0].id);
    } catch (error) {
      toast.error(`Algo deu errado ao carregar a imagem, ${error}`);
    } finally {
      setLoadingImage(false);
    }
  }

  useEffect(() => {
    handleSubmit();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chosenImage]);

  useEffect(() => {
    handlegetImage();
  }, []);

  return {
    chosenImage,
    errors,
    imageUrl,
    image,
    loadingImage,
    companyId,
    register,
    handleSubmit,
    handleDeleteImage,
    handlegetImage,
  };
}
