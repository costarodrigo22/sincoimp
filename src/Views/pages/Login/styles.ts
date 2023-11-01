import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;

  .infos {
    width: 30%;
    padding: 50px;

    span {
      color: #fff;
    }
  }

  .content {
    width: 70%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .infos .head {
    height: 50%;
    font-weight: 600;
    font-size: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .infos .foot {
    height: 50%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .content .container-inputs {
    width: 400px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
      color: #4e4e4e;
      font-size: 18px;
      margin-top: 20px;
    }

    .input-action {
      width: 100%;
      margin-top: 20px;
    }

    .container-forgot-password {
      width: 100%;

      display: flex;
      align-items: flex-end;
    }
  }
`;
