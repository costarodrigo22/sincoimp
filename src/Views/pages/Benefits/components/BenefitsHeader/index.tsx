import { useBenefits } from "../../../../../app/hooks/useBenefits";
import { Button } from "../../../../../global/layouts/Button";

interface BenefitsHeaderProps {
  isDisabled: boolean;
}

export default function BenefitsHeader({ isDisabled }: BenefitsHeaderProps) {
  const { openBenefitsModal } = useBenefits();

  return (
    <div style={{ display: "flex" }}>
      <div style={{ marginRight: 15 }}>👋</div>
      <div>
        <h1 style={{ fontSize: 20, fontWeight: 500, marginBottom: 7 }}>
          Seja bem-vindo a seção de benefícios!
        </h1>
        <p style={{ fontSize: 12, marginBottom: 7 }}>
          Adicione nessa seção os benefícios do sindicalizado. Vamos nessa!
        </p>
        <Button.Wrapper
          style={{
            width: 125,
            height: 35,
            background: "#06f",
            borderRadius: 5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          disabled={isDisabled}
          onClick={openBenefitsModal}
        >
          <Button.Label style={{ fontSize: 12, color: "#fff" }}>
            + Adicionar
          </Button.Label>
        </Button.Wrapper>
      </div>
    </div>
  );
}
