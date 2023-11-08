import styled from "styled-components";

export const Container = styled.div``;

export const Card = styled.div`
  width: 100%;
  max-width: 600px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);

  .head {
    width: 100%;
    padding: 20px 30px;
    border-bottom: 1px solid #f2f2f2;
    font-weight: 600;
  }

  .main {
    width: 100%;
    padding: 20px 30px;
    gap: 20px;

    display: flex;
  }

  .footer {
    padding: 0px 0px 20px 30px;
    font-size: 11px;

    display: flex;
    flex-direction: column;
  }
`;

export const CardImageSelected = styled.div`
  position: relative;
  border-radius: 5px;
  border: 2px solid #06f;
  margin-top: 8px;
  height: 150px;

  display: flex;
  align-items: center;
  justify-content: center;

  input {
    position: absolute;
    top: 8px;
    left: 8px;
  }

  .actions {
    position: absolute;
    right: 0;
    height: 100%;
    background: rgba(232, 232, 232, 0.5);
    padding: 10px;

    display: flex;
    align-items: center;
  }
`;

export const CardImageChoose = styled.div`
  border-radius: 5px;
  border: 1px dashed #000;
  margin-top: 22px;
  height: 150px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input {
    display: none;
  }

  label {
    cursor: pointer;
  }

  label:hover {
    text-decoration: underline;
  }
`;
