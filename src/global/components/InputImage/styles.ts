import styled from "styled-components";

export const Container = styled.div<{ base64: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: ${({ base64 }) => (base64 ? "1px solid #000" : "1px dashed #000")};
  padding: ${({ base64 }) => (base64 ? "0px" : "20px")};
  width: 300px;
  height: 200px;
  justify-content: center;
  cursor: pointer;
  position: relative;
  border-radius: 5px;

  .no-image {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  p {
    color: #000;
    font-size: 12px;
    margin-top: 5px;
  }

  .container-image {
    width: 100%;
    height: 100%;
    display: flex;
    background: #ccc;
  }

  .container-image .container-actions {
    width: 45px;
    height: 100%;
    background: #e8e8e880;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const ImagePreview = styled.img`
  width: 100%;
  max-height: 100%;
`;
