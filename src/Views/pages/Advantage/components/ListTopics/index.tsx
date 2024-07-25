import { useState } from "react";
import { Container } from "./styles";
import { ModalAddAdvantage } from "../ModalAddAdvantage";
import { TopicCard } from "../TopicCard";
import { httpClient } from "../../../../../app/services/httpClient";
import toast from "react-hot-toast";
// import { httpClient } from "../../../../../app/services/httpClient";

interface ListProps {
  id: string;
  icon: string;
  title: string;
  text: string;
}

interface topicsProps {
  listTopics?: {
    id: string;
    icon: string;
    title: string;
    description: string;
  }[];
}

export function ListTopics({ listTopics }: topicsProps) {
  const [list, setList] = useState<ListProps[]>(
    listTopics
      ? listTopics.map((topic) => ({
          id: topic.id,
          icon: topic.icon,
          title: topic.title,
          text: topic.description,
        }))
      : []
  );
  const [modalAddAdvantage, setModalAddAdvantage] = useState(false);

  async function handleAdditemList(item: ListProps) {
    // const response = await httpClient.get("/api/v1/segundo_informativo/index");

    // const itemCard = {
    //   id: response.data.data[0].categoria_segundo_informativo,
    // };

    setList((prevState) => [...prevState, item]);
  }

  async function handleDeleteItemList(index: string) {
    setList((prevState) => prevState.filter((item) => item.id !== index));

    try {
      await httpClient.delete(
        `/api/v1/categoria_segundo_informativo/destroy/${index}`
      );
    } catch (error) {
      toast.error("Erro ao adicionar vantagem");
    } finally {
      //
    }
  }

  return (
    <Container>
      <ModalAddAdvantage
        isOpen={modalAddAdvantage}
        closeModal={() => setModalAddAdvantage(false)}
        onAddAdvantage={handleAdditemList}
      />

      <TopicCard
        position={list[0]?.id}
        topic={list[0]}
        onDeleteTopic={handleDeleteItemList}
        openModalAddTopic={() => setModalAddAdvantage(true)}
      />
      <TopicCard
        position={list[1]?.id}
        topic={list[1]}
        onDeleteTopic={handleDeleteItemList}
        openModalAddTopic={() => setModalAddAdvantage(true)}
      />
      <TopicCard
        position={list[2]?.id}
        topic={list[2]}
        onDeleteTopic={handleDeleteItemList}
        openModalAddTopic={() => setModalAddAdvantage(true)}
      />
    </Container>
  );
}
