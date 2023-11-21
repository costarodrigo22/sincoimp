import { useEffect, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  list: z.array(
    z.object({
      image: z.instanceof(FileList).transform((listFile) => listFile.item(0)),
    })
  ),
});

type FormSchema = z.infer<typeof schema>;

export default function useWelcomeController() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const {
    control,
    formState: { errors },
    handleSubmit: hookFormHandleSubmit,
    register,
    reset,
    watch,
  } = useForm<FormSchema>({
    resolver: zodResolver(schema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "list",
  });

  const chosenImage = watch("list");

  function handleAddNewImage() {
    append({ image: null });
  }

  const handleSubmit = hookFormHandleSubmit(async ({ list }) => {
    console.log("Submetendo: ", list);

    list.map((item) => {
      if (item.image) {
        const reader = new FileReader();

        reader.readAsDataURL(item.image);

        reader.onload = (event) => {
          const newImageUrl = event.target?.result as string;

          setImageUrl(newImageUrl);
        };
      } else {
        console.log("Caiu no else");
      }
    });
  });

  function handleDeleteImage() {
    setImageUrl(null);

    reset();
  }

  useEffect(() => {
    handleSubmit();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chosenImage]);

  console.log("Fora do useEffect: ", chosenImage);

  return {
    fields,
    imageUrl,
    errors,
    remove,
    register,
    handleAddNewImage,
    handleSubmit,
    handleDeleteImage,
  };
}
