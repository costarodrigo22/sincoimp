import { useEffect, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { benefitsService } from "../../../../../app/services/Benefits";
import toast from "react-hot-toast";
import { useBenefits } from "../../../../../app/hooks/useBenefits";

interface StoreInfosBenefitsProps {
  params: {
    primeiro_informativo: {
      id: string;
      titulo: string;
      descricao: string;
    };
    tipo: string;
    data: {
      id?: string;
      titulo: string;
      icone: string;
      primeiro_informativo_id: string;
    }[];
  };
}

interface imageProps {
  id: string;
  image: File | null;
}

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

export function useBenefitsModalController() {
  const [modalViewVisible, setModalViewVisible] = useState(false);
  const [swiperIsBeginning, setSwiperIsBeginning] = useState(true);
  const [swiperIsEnd, setSwiperIsEnd] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isAllMutationsLoading, setIsAllMutationsLoading] = useState(false);

  const { closeBenefitsModal } = useBenefits();

  const {
    control,
    register,
    reset,
    watch,
    getValues,
    setValue,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
      description: "",
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
  const title = getValues("title");
  const description = getValues("description");
  const topics = getValues("topics");
  const image = getValues("image");

  const queryClient = useQueryClient();

  const { data: listTitleAndDescription } = useQuery({
    queryKey: ["list-title-description"],
    queryFn: () => benefitsService.listTitleAndDescription(),
  });

  const { mutateAsync: mutateAsyncStoreInfosBenefits } = useMutation({
    mutationKey: ["add-infos-benefits"],
    mutationFn: async (data: StoreInfosBenefitsProps) =>
      benefitsService.storeInfosBenefits(data),
  });

  const { mutateAsync: mutateAsyncImage } = useMutation({
    mutationKey: ["add-image"],
    mutationFn: async (data: imageProps) => benefitsService.image(data),
  });

  const handleSubmit = hookFormHandleSubmit(
    async ({ image, description, title, topics }) => {
      const arrayMapped = topics.map((item) => {
        // const firstStore = listTitleAndDescription.data.length === 0;

        // if (firstStore) {
        //   return {
        //     titulo: item.title,
        //     icone: item.icon,
        //   };
        // }

        return {
          titulo: item.title,
          icone: item.icon,
          primeiro_informativo_id: listTitleAndDescription.data[0].id,
        };
      });

      const params = {
        primeiro_informativo: {
          id: listTitleAndDescription.data[0].id,
          titulo: title,
          descricao: description,
        },
        tipo: "store",
        data: arrayMapped,
      };

      const paramsImage = {
        id: listTitleAndDescription.data[0].id,
        image: image[0],
      };

      try {
        setIsAllMutationsLoading(true);

        await Promise.all([
          mutateAsyncStoreInfosBenefits({ params }),
          mutateAsyncImage(paramsImage),
        ]);

        toast.success("Parabéns, publicação realizada com sucesso 🚀");

        handleCloseModalView();

        closeBenefitsModal();
      } catch (error) {
        toast.error("Algo deu errado ao publicar! ❌");
      } finally {
        setIsAllMutationsLoading(false);

        queryClient.invalidateQueries({
          queryKey: ["list-title-description"],
        });
      }
    }
  );

  function handleImageChange(images: FileList | string) {
    if (images) {
      try {
        const reader = new FileReader();

        reader.readAsDataURL(image);

        reader.onload = (event) => {
          const newImageUrl = event.target?.result as string;

          setImageUrl(newImageUrl);
        };
      } catch (error) {
        console.log("erro: ", error);
      }
    }
  }

  function handleOpenModalView() {
    setModalViewVisible(true);
  }

  function handleCloseModalView() {
    setModalViewVisible(false);
  }

  function handleDeleteImage() {
    setImageUrl(null);
  }

  function handleResetModal() {
    reset({
      title: "",
      description: "",
      image: null,
      topics: [],
    });
  }

  useEffect(() => {
    handleImageChange(chosenImage);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chosenImage]);

  return {
    image,
    fields,
    errors,
    swiperIsBeginning,
    swiperIsEnd,
    imageUrl,
    stepsHeader,
    modalViewVisible,
    title,
    description,
    topics,
    isAllMutationsLoading,
    handleDeleteImage,
    handleResetModal,
    setValue,
    reset,
    register,
    handleSubmit,
    append,
    remove,
    handleOpenModalView,
    handleCloseModalView,
    setSwiperIsBeginning,
    setSwiperIsEnd,
  };
}
