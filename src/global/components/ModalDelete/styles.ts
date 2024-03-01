import styled from "styled-components";

export const ModalContainer = styled.div`
  .DialogOverlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.2);
    animation: overlayShow 650ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  .DialogContent {
    width: 100%;
    border-radius: 10px;
    outline: none;
    padding: 24px;
    max-width: 400px;
    background: #fff;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: contentShow 650ms cubic-bezier(0.16, 1, 0.3, 1);

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  @keyframes overlayShow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes contentShow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
