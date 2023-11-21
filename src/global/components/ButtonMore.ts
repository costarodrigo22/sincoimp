import styled from "styled-components";

export const ButtonMore = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background: #afd1ff;
  color: #fff;
  font-size: 25px;
  opacity: 0.5;
  transition: 0.3s ease-in-out;

  &:hover {
    opacity: 1;
  }

  &:active {
    background: #7db3ff;
  }
`;
