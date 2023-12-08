import { httpClient } from "../httpClient";
import { CarouselAllInterface } from "./carouselInterfaces";

class CarouselService {
  async index() {
    const response = await httpClient.get<{ data: [CarouselAllInterface] }>(
      "api/v1/carrossel/index"
    );

    return response.data?.data;
  }

  async submitFile(id: string, files?: FileList) {
    const formData = new FormData();

    formData.append("id", id);

    if (files) {
      formData.append("files[]", files[0]);
    }

    const response = await httpClient.post<{ data: [CarouselAllInterface] }>(
      "api/v1/carrossel/submit_files",
      formData
    );

    return response.data?.data;
  }
}

export default new CarouselService();
