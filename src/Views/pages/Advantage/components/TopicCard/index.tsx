import { IconDisplay } from "../../../../../global/components/IconDisplay";
import { TopicWithoutContent, TopicWithContent } from "./styles";
import * as RadixIcons from "@radix-ui/react-icons";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { DotsVerticalIcon } from "@radix-ui/react-icons";

import trash from "../../../../../assets/Icons/trash_icon.svg";

type RadixIconNames = keyof typeof RadixIcons;

interface TopicCardProps {
  topic: {
    icon: string;
    title: string;
    text: string;
  };
  position: string;
  openModalAddTopic: () => void;
  onDeleteTopic: (index: string) => void;
}

export function TopicCard({
  topic,
  position,
  openModalAddTopic,
  onDeleteTopic,
}: TopicCardProps) {
  return (
    <>
      {topic?.icon && (
        <TopicWithContent>
          <div className="head">
            <IconDisplay selectedIcon={topic?.icon as RadixIconNames} />

            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <button>
                  <DotsVerticalIcon />
                </button>
              </DropdownMenu.Trigger>

              <DropdownMenu.Portal>
                <DropdownMenu.Content
                  side="left"
                  sideOffset={0}
                  style={{
                    width: 80,
                    background: "#fff",
                    padding: 8,
                    borderRadius: "10px",
                  }}
                >
                  <DropdownMenu.Item
                    className="DropdownMenuItem"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                    onClick={() => onDeleteTopic(position)}
                  >
                    <img src={trash} />

                    <span style={{ fontSize: 12 }}>Excluir</span>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          </div>
          <div className="content">
            <strong style={{ fontSize: 11 }}>{topic?.title}</strong>
          </div>

          <div className="content">
            <span style={{ fontSize: 11 }}>{topic?.text}</span>
          </div>
        </TopicWithContent>
      )}

      {!topic?.icon && (
        <TopicWithoutContent>
          <span onClick={openModalAddTopic}>+ Adicionar Tópico</span>
        </TopicWithoutContent>
      )}
    </>
  );
}
