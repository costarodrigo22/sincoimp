import styled from "styled-components";

export const Card = styled.div`
  background: #fff;
  padding: 20px 30px;
  border-radius: 10px;

  display: flex;
`;

export const HasContentContainer = styled.div`
  width: 100%;
  margin-top: 40px;
  max-height: 300px;
`;

export const ContainerHover = styled.div`
  transition: 0.3s ease-in-out;
  margin-top: 15px;
  padding: 0px 40px;

  display: flex;

  &:hover {
    background: #f8fbff;
  }
`;
