import Modal from "../../../../../global/layouts/Modal";
import { useAdvantages } from "../../../../../app/hooks/useAdvantages";
import { Steps } from "../Steps";
import { TitleAndDescription } from "../Steps/TitleAndDescription";
import { Topics } from "../Steps/Topics";
import { Review } from "../Steps/Review";

export default function AdvantagesModalEdit() {
  const { isAdvantagesModalOpen, closeAdvantagesModal, handleToggleStep } =
    useAdvantages();

  return (
    <Modal
      style={{ height: 480, width: 740 }}
      title="Criar Publicação de Vantagens"
      isOpen={isAdvantagesModalOpen}
      onClose={() => (closeAdvantagesModal(), handleToggleStep(0))}
    >
      <Steps
        initialStep={0}
        steps={[
          { label: "Título e descrição", content: <TitleAndDescription /> },
          { label: "Tópicos", content: <Topics /> },
          { label: "Revisão", content: <Review /> },
        ]}
      />
    </Modal>
  );
}
