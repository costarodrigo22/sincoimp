import styled from "styled-components";

export const Container = styled.div<{ error?: string }>`
  border: ${({ error }) => (error ? "1px solid red" : "1px solid #000")};
  padding: 15px;
  border-radius: 5px;
  font-size: 13px;
  display: flex;
  justify-content: space-between;

  .edit-container {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #06f;
    font-weight: 600;
    cursor: pointer;
  }

  .edit-container span:hover {
    text-decoration: underline;
  }
`;
