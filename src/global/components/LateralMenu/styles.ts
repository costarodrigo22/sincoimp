import styled from "styled-components";
import { useTheme } from "../../../theme/useTheme";

const theme = useTheme.getState();

export const Container = styled.div`
  position: relative;
  width: 260px;
  height: 100vh;
  background: ${theme.colors.primary.lighter};
  padding: 20px 15px;

  .section-logo {
    position: absolute;
    bottom: 30px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
      font-size: 11px;
      text-align: center;
      margin-top: 5px;
      color: ${theme.colors.menu_text};
    }
  }

  .container-cards {
    height: 85%;
    overflow-y: auto;
  }
`;
