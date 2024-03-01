import { httpClient } from "../httpClient";

interface TitleAndDescriptionProps {
  body: {
    descricao: string;
    titulo: string;
  };
  id: string;
}

interface StoreInfosBenefitsProps {
  params: {
    primeiro_informativo: {
      id: string;
      titulo: string;
      descricao: string;
    };
    tipo: string;
    data: {
      id?: string;
      titulo: string;
      icone: string;
      primeiro_informativo_id: string;
    }[];
  };
}

export async function titleAndDescription(params: TitleAndDescriptionProps) {
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

export async function storeInfosBenefits({ params }: StoreInfosBenefitsProps) {
  const { data } = await httpClient.post(
    "/api/v1/primeiro_informativo/store_all",
    params
  );

  return data;
}

export async function deletePublication(id: string) {
  const { data } = await httpClient.delete(
    `/api/v1/primeiro_informativo/destroy/${id}`
  );

  return data;
}
