import { useState, ChangeEvent, useEffect } from "react";
import { Container, ImagePreview } from "./styles";
import { httpClient } from "../../../app/services/httpClient";
import libIcon from "../../../assets/Icons/lib_icon.svg";
import trashIcon from "../../../assets/Icons/trash_icon.svg";
// import newImageIcon from "../../../assets/Icons/new_image_icon.svg";

import toast from "react-hot-toast";
import Loader from "../Loader";

interface InputImageProps {
  initialImage: string | null;
  loadingBase64: boolean;
  companyId: string;
  onImageUpdate: () => void;
}

export default function InputImage({
  initialImage,
  loadingBase64,
  companyId,
  onImageUpdate,
}: InputImageProps) {
  const [image, setImage] = useState<string | null>(initialImage);
  const [loadingImage, setLoadingImage] = useState(false);

  async function handleImageChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setLoadingImage(true);

      const formData = new FormData();
      formData.append("files[]", file);
      formData.append("id", companyId);

      try {
        await httpClient.post("/api/v1/empresa/submit_files", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        toast.success("Imagem enviada com sucesso!");
        onImageUpdate();
      } catch (error) {
        toast.error(`Algo deu errado ao adicionar uma imagem: ${error}`);
      } finally {
        setLoadingImage(false);
      }
    }
  }

  async function handleDeleteImage() {
    setLoadingImage(true);

    try {
      const formData = new FormData();
      formData.append("files[]", "");
      formData.append("id", companyId);

      await httpClient.post("/api/v1/empresa/submit_files", formData);
    } catch (error) {
      toast.error(`Algo deu errado ao apagar a imagem: ${error}`);
    } finally {
      setLoadingImage(false);

      onImageUpdate();
    }
  }

  useEffect(() => {
    setImage(initialImage);
  }, [initialImage]);

  return (
    <Container
      base64={image || ""}
      // onClick={() => document.getElementById("imageInput")?.click()}
    >
      <input
        id="imageInput"
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleImageChange}
      />
      {image ? (
        <>
          {(!loadingBase64 || !loadingImage) && (
            <div className="container-image">
              {(loadingBase64 || loadingImage) && (
                <Loader
                  isLoading={loadingBase64 || loadingImage}
                  color="#0066ff"
                />
              )}
              <ImagePreview
                src={`data:image/png;base64,${image}`}
                alt="Imagem selecionada"
              />

              <div className="container-actions">
                {/* <img src={newImageIcon} style={{ marginBottom: 10 }} /> */}
                <img src={trashIcon} onClick={handleDeleteImage} />
              </div>
            </div>
          )}
        </>
      ) : (
        <div
          className="no-image"
          onClick={() => document.getElementById("imageInput")?.click()}
        >
          {(loadingBase64 || loadingImage) && (
            <Loader isLoading={loadingBase64 || loadingImage} color="#0066ff" />
          )}
          <img src={libIcon} />
          <p>+ Adicionar imagem</p>
        </div>
      )}
    </Container>
  );
}
