import { PulseLoader } from "react-spinners";
import { TextInput } from "../../../../global/components/TextInput";
import { Button } from "../../../../global/layouts/Button";
import useTitleAndDescriptionController from "./useTitleAndDescriptionController";

export default function TitleAndDescription() {
  const { register, handleSubmit, errors, isPending } =
    useTitleAndDescriptionController();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: 15,
      }}
    >
      <span style={{ fontSize: 13, marginTop: 15 }}>
        Dê um título e uma descrição a sua publicação!
      </span>

      <TextInput
        label="título"
        placeholder="+ Adicionar um título"
        error={errors.title?.message}
        {...register("title")}
      />
      <TextInput
        label="descrição"
        placeholder="+ Adicionar uma descrição"
        {...register("description")}
        error={errors.description?.message}
      />

      {/* <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button.Wrapper
          style={{
            width: 125,
            height: 35,
            background: "#06f",
            borderRadius: 5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 40,
          }}
          disabled={false}
          onClick={handleSubmit}
        >
          {isPending && (
            <PulseLoader
              color="#fff"
              margin={5}
              size={5}
              style={{ marginTop: 0 }}
            />
          )}

          {!isPending && (
            <Button.Label style={{ fontSize: 12, color: "#fff" }}>
              Salvar
            </Button.Label>
          )}
        </Button.Wrapper>
      </div> */}
    </div>
  );
}
