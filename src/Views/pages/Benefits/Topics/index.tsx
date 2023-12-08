import { Button } from "../../../../global/layouts/Button";
import newTopicIcon from "../../../../assets/Icons/newTopic_icon.svg";
import trashIcon from "../../../../assets/Icons/trash_icon.svg";
import { TextInput } from "../../../../global/components/TextInput";
import useTopicsController from "./useTopicsController";
import { InconInput } from "../../../../global/components/IconInput";

export default function Topics() {
  const { fields, errors, append, remove, register, handleSubmit } =
    useTopicsController();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <span style={{ fontSize: 13, marginTop: 15, marginBottom: 15 }}>
        Adicione tópicos a sua publicação!
      </span>

      <Button.Wrapper
        style={{
          width: 125,
          height: 35,
          background: "#D9D9D9",
          borderRadius: 5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        disabled={false}
        onClick={() => append({ icon: "", title: "" })}
      >
        <Button.Icon icon={newTopicIcon} />
        <Button.Label
          style={{
            fontSize: 12,
            color: "#000",
            fontWeight: 500,
            marginLeft: 8,
          }}
        >
          Novo tópico
        </Button.Label>
      </Button.Wrapper>

      <div
        style={{
          overflow: "auto",
          height: 200,
          marginTop: 10,
        }}
      >
        {fields.map((field, index) => (
          <div
            key={field.id}
            style={{
              display: "flex",
              gap: 10,
              marginBottom: 10,
            }}
          >
            <InconInput
              style={{ width: "25%" }}
              error={errors.topics?.[index]?.icon?.message}
              {...register(`topics.${index}.icon`)}
            />

            {/* <TextInput
              label="título"
              placeholder="+ Adicionar um título"
              error={errors.topics?.[index]?.icon?.message}
              {...register(`topics.${index}.icon`)}
            /> */}

            <TextInput
              label="título"
              placeholder="+ Adicionar um título"
              error={errors.topics?.[index]?.title?.message}
              style={{ width: "75%" }}
              {...register(`topics.${index}.title`)}
            />
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={trashIcon} onClick={() => remove(index)} />
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
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
          <Button.Label style={{ fontSize: 12, color: "#fff" }}>
            Salvar
          </Button.Label>
        </Button.Wrapper>
      </div>
    </div>
  );
}
