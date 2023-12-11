import { httpClient } from "../httpClient";

interface TitleAndDescriptionProps {
  body: {
    descricao: string;
    titulo: string;
  };
  id: string;
}

export async function titleAndDescription(params: TitleAndDescriptionProps) {
  console.log(params);

  const { data } = await httpClient.put(
    `/api/v1/primeiro_informativo/update/${params.id}`,
    params.body
  );

  return data;
}

export async function listTitleAndDescription() {
  const { data } = await httpClient.get("/api/v1/primeiro_informativo/index");

  return data;
}
