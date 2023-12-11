import { httpClient } from "../httpClient";

interface TitleAndDescriptionProps {
  description: string;
  title: string;
}

export async function titleAndDescription(params: TitleAndDescriptionProps) {
  const { data } = await httpClient.post(
    "/api/v1/primeiro_informativo/store",
    params
  );

  return data;
}
