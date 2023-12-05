import { Button } from "../../../global/layouts/Button";
import Modal from "../../../global/layouts/Modal";
import useBenefitsController from "./useBenefitsController";
import { Card } from "./styles";
import * as RadixIcons from "@radix-ui/react-icons";
import { useState } from "react";

type RadixIconNames = keyof typeof RadixIcons;

export default function Benefits() {
  const { modalVisible, setModalVisible } = useBenefitsController();

  const [iconSelected, setIconSelected] = useState<RadixIconNames | null>(null);

  const radixIcons = Object.entries(RadixIcons);

  const selectOptions = radixIcons.map(([iconName, icon]) => ({
    label: iconName,
    icon,
  }));

  return (
    <>
      <Modal
        title="Criar Publicação de Benefícios"
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
      >
        <select
          value={iconSelected || ""}
          onChange={(e) => setIconSelected(e.target.value as RadixIconNames)}
        >
          <option value="">Selecione um ícone</option>
          {selectOptions.map((option, index) => (
            <option key={index} value={option.label}>
              {option.label}
            </option>
          ))}
        </select>

        <IconDisplay selectedIcon={iconSelected} />
      </Modal>

      <Card>
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
            disabled={false}
            onClick={() => setModalVisible(true)}
          >
            <Button.Label style={{ fontSize: 12, color: "#fff" }}>
              + Adicionar
            </Button.Label>
          </Button.Wrapper>
        </div>
      </Card>
    </>
  );
}

const IconDisplay: React.FC<{ selectedIcon: RadixIconNames | null }> = ({
  selectedIcon,
}) => {
  const IconComponent = selectedIcon ? RadixIcons[selectedIcon] : null;

  return (
    <div>
      {IconComponent && (
        <IconComponent width={24} height={24} color="#B50000" />
      )}
    </div>
  );
};
