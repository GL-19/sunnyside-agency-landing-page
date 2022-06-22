import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --soft-red: hsl(7, 99%, 70%);
    --yellow: hsl(51, 100%, 49%);
    --dark-blue: hsl(198, 62%, 26%);
    --dark-moderate-cyan: hsl(168, 34%, 41%);
    --darkDesaturatedCyan : hsl(167, 40%, 24%)
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

`;
