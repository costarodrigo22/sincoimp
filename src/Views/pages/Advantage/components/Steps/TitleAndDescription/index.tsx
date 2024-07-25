import { StepperNextStepButton } from "..";
import { TextInput } from "../../../../../../global/components/TextInput";
import { Container } from "./styles";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useStepper } from "../Topics/useStepper";
import { httpClient } from "../../../../../../app/services/httpClient";
import toast from "react-hot-toast";

interface defaultValuesProps {
  titleValueDefault?: string;
  descriptionValueDefault?: string;
  idValueDefault?: string;
}

const schema = z.object({
  title: z.string().min(1, "Informe um título"),
  description: z.string().min(1, "Informe uma descrição"),
});

type FormSchema = z.infer<typeof schema>;

export function TitleAndDescription({
  titleValueDefault,
  descriptionValueDefault,
  idValueDefault,
}: defaultValuesProps) {
  const form = useForm<FormSchema>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: titleValueDefault,
      description: descriptionValueDefault,
    },
  });

  const { nextStep } = useStepper();

  const handleSubmitForm = form.handleSubmit(async (formData) => {
    const body = {
      titulo: formData.title,
      descricao: formData.description,
    };

    try {
      if (titleValueDefault || descriptionValueDefault) {
        await httpClient.put(
          `/api/v1/segundo_informativo/update/${idValueDefault}`,
          body
        );
      } else {
        await httpClient.post("/api/v1/segundo_informativo/store", body);
      }
      nextStep();
    } catch (error) {
      toast.error("Erro ao enviar os dados");
    } finally {
      toast.success("Dados adicionados com sucesso");
    }

    // await new Promise((resolve) => setTimeout(resolve, 3000));
  });

  return (
    <Container onSubmit={handleSubmitForm}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: 15,
          marginBottom: 30,
        }}
      >
        <span style={{ fontSize: 13 }}>
          Dê um título e uma descrição a sua publicação!
        </span>

        <TextInput
          {...form.register("title")}
          error={form.formState.errors.title?.message}
          label="título"
          placeholder="+ Adicionar um título"
        />
        <TextInput
          {...form.register("description")}
          error={form.formState.errors.description?.message}
          label="descrição"
          placeholder="+ Adicionar uma descrição"
        />
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <StepperNextStepButton
          disabled={form.formState.isSubmitting}
          type="submit"
          preventDefault={true}
        />
      </div>
    </Container>
  );
}
