import { TextInput } from "../../../../global/components/TextInput";
import { Button } from "../../../../global/layouts/Button";

export default function TitleAndDescription() {
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

      <TextInput label="título" placeholder="+ Adicionar um título" />
      <TextInput label="descrição" placeholder="+ Adicionar uma descrição" />

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
        >
          <Button.Label style={{ fontSize: 12, color: "#fff" }}>
            Salvar
          </Button.Label>
        </Button.Wrapper>
      </div>
    </div>
  );
}
