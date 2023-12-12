import styled from "styled-components";

export const Container = styled.div<{ error?: string }>`
  width: 100%;
  height: 100%;
  border: ${({ error }) => (error ? "2px solid red" : "1px solid #000")};
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 13px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
