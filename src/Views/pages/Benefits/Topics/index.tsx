import { Button } from "../../../../global/layouts/Button";
import newTopicIcon from "../../../../assets/Icons/newTopic_icon.svg";
import trashIcon from "../../../../assets/Icons/trash_icon.svg";
import { TextInput } from "../../../../global/components/TextInput";

export default function Topics() {
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

      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <TextInput label="título" placeholder="+ Adicionar um título" />
        <TextInput label="título" placeholder="+ Adicionar um título" />

        <img src={trashIcon} />
      </div>
    </div>
  );
}
