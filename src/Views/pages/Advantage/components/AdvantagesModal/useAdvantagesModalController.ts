import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({});

type FormSchema = z.infer<typeof schema>;

export function useAdvantagesModalController() {
  const [modalViewVisible, setModalViewVisible] = useState(false);
  const [swiperIsBeginning, setSwiperIsBeginning] = useState(true);
  const [swiperIsEnd, setSwiperIsEnd] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isAllMutationsLoading, setIsAllMutationsLoading] = useState(false);

  const {
    register,
    reset,
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

  const stepsHeader = [
    { id: 0, title: "Título e Descrição" },
    { id: 1, title: "Tópicos" },
    { id: 2, title: "Imagem" },
    { id: 3, title: "Revisão" },
  ];

  // const queryClient = useQueryClient();

  // const { data: listTitleAndDescription } = useQuery({
  //   queryKey: ["list-title-description"],
  //   queryFn: () => benefitsService.listTitleAndDescription(),
  // });

  // const { mutateAsync: mutateAsyncStoreInfosBenefits } = useMutation({
  //   mutationKey: ["add-infos-benefits"],
  //   mutationFn: async (data: StoreInfosBenefitsProps) =>
  //     benefitsService.storeInfosBenefits(data),
  // });

  // const { mutateAsync: mutateAsyncImage } = useMutation({
  //   mutationKey: ["add-image"],
  //   mutationFn: async (data: imageProps) => benefitsService.image(data),
  // });

  const handleSubmit = hookFormHandleSubmit(async (data) => console.log(data));

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

  return {
    errors,
    swiperIsBeginning,
    swiperIsEnd,
    imageUrl,
    stepsHeader,
    modalViewVisible,
    isAllMutationsLoading,
    handleDeleteImage,
    handleResetModal,
    setValue,
    reset,
    register,
    handleSubmit,
    handleOpenModalView,
    handleCloseModalView,
    setSwiperIsBeginning,
    setSwiperIsEnd,
  };
}
