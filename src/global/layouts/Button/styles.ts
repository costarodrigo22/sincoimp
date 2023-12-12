import styled from "styled-components";

export const Container = styled.button`
  transition: 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 1;
  }
`;
