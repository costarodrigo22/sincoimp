import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
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
    padding: 20px 30px;
    overflow-x: auto;

    display: flex;
    align-items: center;
  }

  .footer {
    padding: 0px 0px 20px 30px;
    font-size: 11px;

    display: flex;
    flex-direction: column;
  }
`;
