import styled from "styled-components";

export const TopicWithoutContent = styled.div`
  border: 1px solid #000;
  border-style: dashed;
  height: 210px;
  border-radius: 5px;
  width: 33%;
  margin-bottom: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 13px;
    color: #909090;
  }

  span:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const TopicWithContent = styled.div`
  border: 1px solid #000;
  padding: 15px;
  height: 210px;
  border-radius: 5px;
  width: 33%;
  margin-bottom: 20px;
  background: #f3f3f3;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  overflow-y: auto;

  .head {
    width: 100%;

    display: flex;
    justify-content: space-between;
  }

  .content {
    max-width: 100%;
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;
  }
`;
