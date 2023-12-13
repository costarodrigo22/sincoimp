import { useCallback, useEffect, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  title: z.string().min(1, "Título é obrigatório"),
  description: z.string().min(1, "Descrição é obrigatória"),
  topics: z.array(
    z.object({
      icon: z.string().min(1, "Selecione um ícone"),
      title: z.string().min(1, "Informe o título"),
    })
  ),
  image: z.custom((value) => {
    if (!(value instanceof FileList) || value.length === 0) {
      return "Selecione uma imagem";
    }
    return value;
  }),
});

type FormSchema = z.infer<typeof schema>;

export default function useBenefitsController() {
  const [modalVisible, setModalVisible] = useState(false);
  const [tabActive, setTabActive] = useState(0);
  const [swiperIsBeginning, setSwiperIsBeginning] = useState(true);
  const [swiperIsEnd, setSwiperIsEnd] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const {
    control,
    register,
    reset,
    watch,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
      description: "",
      topics: [{ icon: "", title: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "topics",
  });

  const stepsHeader = [
    { id: 0, title: "Título e Descrição" },
    { id: 1, title: "Tópicos" },
    { id: 2, title: "Imagem" },
    { id: 3, title: "Revisão" },
  ];

  const chosenImage = watch("image");

  const handleToggleStep = useCallback((stepIndex: number) => {
    setTabActive(stepIndex);
  }, []);

  const handleSubmit = hookFormHandleSubmit(
    async ({ image, description, title, topics }) => {
      console.log({ image, description, title, topics });
    }
  );

  function handleImageChange(images: FileList) {
    if (images && images.length > 0) {
      const image = images[0];
      const reader = new FileReader();

      reader.readAsDataURL(image);

      reader.onload = (event) => {
        const newImageUrl = event.target?.result as string;

        setImageUrl(newImageUrl);
      };
    }
  }

  function handleDeleteImage() {
    setImageUrl(null);

    reset();
  }

  useEffect(() => {
    handleImageChange(chosenImage);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chosenImage]);

  return {
    modalVisible,
    stepsHeader,
    tabActive,
    swiperIsBeginning,
    swiperIsEnd,
    fields,
    errors,
    imageUrl,
    register,
    handleDeleteImage,
    reset,
    append,
    remove,
    setTabActive,
    setSwiperIsBeginning,
    setSwiperIsEnd,
    handleToggleStep,
    setModalVisible,
    handleSubmit,
  };
}
