import { httpClient } from "../httpClient";

interface paramsProps {
  id: string;
  image: File | null;
}

export async function image({ id, image }: paramsProps) {
  const formData = new FormData();

  formData.append("id", id);

  if (image) {
    formData.append("files[]", image);
  }

  const { data } = await httpClient.post(
    "/api/v1/primeiro_informativo/submit_files",
    formData
  );

  return data;
}
