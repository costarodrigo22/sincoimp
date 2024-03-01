import * as Dialog from "@radix-ui/react-dialog";
import { ModalContainer } from "./styles";
import warningIcon from "../../../assets/Icons/warning_icon.svg";
import { Button } from "../../layouts/Button";

interface ModalDeleteProps {
  isOpen: boolean;
  onClose?: () => void;
  onDelete?: () => void;
}

export default function ModalDelete({
  isOpen,
  onClose,
  onDelete,
}: ModalDeleteProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <ModalContainer>
          <Dialog.Overlay className="DialogOverlay" />

          <Dialog.Content className="DialogContent">
            <img src={warningIcon} />

            <span style={{ fontSize: 14, marginTop: 8 }}>
              Tem certeza que deseja excluir a publicação?
            </span>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "90%",
                marginTop: 8,
              }}
            >
              <Button.Wrapper
                style={{
                  width: 65,
                  height: 35,
                  background: "#D9D9D9",
                  borderRadius: 5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={onClose}
              >
                <Button.Label
                  style={{ fontSize: 12, color: "#343434", fontWeight: 500 }}
                >
                  Não
                </Button.Label>
              </Button.Wrapper>

              <Button.Wrapper
                style={{
                  width: 65,
                  height: 35,
                  background: "#06f",
                  borderRadius: 5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={onDelete}
              >
                <Button.Label
                  style={{ fontSize: 12, color: "#fff", fontWeight: 500 }}
                >
                  Sim
                </Button.Label>
              </Button.Wrapper>
            </div>
          </Dialog.Content>
        </ModalContainer>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
