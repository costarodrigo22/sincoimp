import { useCallback, useState } from "react";
import { CarouselAllInterface } from "../../../app/services/carousel/carouselInterfaces";
import CarouselService from "../../../app/services/carousel";

export default function useWelcome() {
  const [images, setImages] = useState<CarouselAllInterface[]>();
  const [isLoadingGetImages, setIsLoadingGetImages] = useState(false);
  const [isLoadingUpdateOrDeleteImage, setIsLoadingUpdateOrDeleteImage] =
    useState("");

  const getImages = useCallback(async () => {
    try {
      setIsLoadingGetImages(true);

      const response = await CarouselService.index();
      setImages(response);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadingGetImages(false);
    }
  }, []);

  const updateImage = async (id: string, image: FileList) => {
    setIsLoadingUpdateOrDeleteImage(id);

    try {
      await CarouselService.submitFile(id, image);
      getImages();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadingUpdateOrDeleteImage("");
    }
  };

  const deleteImage = async (id: string) => {
    setIsLoadingUpdateOrDeleteImage(id);

    try {
      await CarouselService.submitFile(id);
      getImages();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadingUpdateOrDeleteImage("");
    }
  };

  return {
    images,
    isLoadingGetImages,
    isLoadingUpdateOrDeleteImage,
    getImages,
    setImages,
    updateImage,
    deleteImage,
  };
}
