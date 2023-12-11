import { httpClient } from "../httpClient";

interface TopicsProps {
  data: {
    titulo: string;
    icone: string;
  }[];
}

export async function topics(params: TopicsProps) {
  const { data } = await httpClient.post(
    "/api/v1/categoria_primeiro_informativo/store_lote",
    params
  );

  return data;
}
