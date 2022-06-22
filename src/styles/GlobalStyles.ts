import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --soft-red: hsl(7, 99%, 70%);
    --yellow: hsl(51, 100%, 49%);
    --dark-blue: hsl(198, 62%, 26%);
    --dark-moderate-cyan: hsl(168, 34%, 41%);
    --dark-desaturated-cyan : hsl(167, 40%, 24%);
    --very-dark-desaturated-blue: hsl(212, 27%, 19%);
    --very-dark-grayish-blue: hsl(213, 9%, 39%);
    --dark-grayish-blue: hsl(232, 10%, 55%);
    --grayish-blue: hsl(210, 4%, 67%);
    --white: hsl(0, 0%, 100%);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-size: 16px;
  }

  p, button, h2 {
    font-size: 1.125rem;
    
  }

  p, button {
    font-family: 'Barlow', sans-serif;
    font-weight: 600;
  }

  h1 {
    font-family: 'Fraunces', serif;
    font-weight: 900;
    font-size: 3rem;
  }

  h2 {
    font-family: 'Fraunces', serif;
    font-weight: 700;
  }

  button {
    cursor: pointer;
    &:hover, &:active {
      filter: opacity(0.5);
    }
  }

`;
