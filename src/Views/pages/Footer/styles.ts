import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);

  .head {
    width: 100%;
    padding: 20px 30px;
    font-weight: 600;

    display: flex;
  }

  .head .titles {
    margin-left: 10px;

    h1 {
      font-size: 20px;
    }

    p {
      font-size: 13px;
      font-weight: 400;
    }
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

  .main .swiper-slide-container {
    padding: 10px;
    gap: 30px;
    display: flex;
  }

  .contacts {
    width: 50%;
  }

  .logo {
    width: 49%;
  }
`;

export const ContainerSpinner = styled.div`
  padding: 20px 30px;
  overflow-x: auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;
