import { ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ModalContainer } from "./styles";
import closeIcon from "../../../assets/Icons/closeIcon.svg";

interface ModalProps {
  isOpen: boolean;
  title: string;
  onClose?: () => void;
  children: ReactNode;
}

export default function Modal({
  isOpen,
  title,
  children,
  onClose,
}: ModalProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <ModalContainer>
          <Dialog.Overlay className="DialogOverlay" />
          <Dialog.Content className="DialogContent">
            <header
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <span style={{ fontSize: 14, color: "#343434", fontWeight: 500 }}>
                {title}
              </span>

              <img
                src={closeIcon}
                style={{ fontSize: 18, cursor: "pointer" }}
                onClick={onClose}
              />
            </header>

            <div>{children}</div>
          </Dialog.Content>
        </ModalContainer>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
