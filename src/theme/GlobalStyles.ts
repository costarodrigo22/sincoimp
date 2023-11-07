import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Poppins', sans-serif;
  }

     /* width */
   ::-webkit-scrollbar {
    width: 2px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: rgba(82, 82, 82, 0.4);
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgba(82, 82, 82, 0.85);
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }


  button{
    cursor: pointer;
  }
`;
