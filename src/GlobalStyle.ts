import { createGlobalStyle } from 'styled-components';

export const CreateGlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
  }
  body,
  html {
    width: 100%;
    height: 100vh;
  }
  a {text-decoration: none;}
  ul, li {list-style-type: none;}
`;