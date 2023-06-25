import { createGlobalStyle } from 'styled-components';

import Coolvetica from './fonts/Coolvetica/Coolvetica-Regular.ttf';
import Inter from './fonts/Inter/Inter-VariableFont_slnt,wght.ttf';

export const GlobalStyle = createGlobalStyle`
  ${modernNormalize}
  @font-face {
    font-family: 'Inter';
    src: url(${Inter});
  }
  @font-face {
    font-family: 'Coolvetica';
    src: url(${Coolvetica});
  }

  body {
    margin: 0;
    font-family:'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    scroll-behavior: smooth;
    box-sizing: border-box;
  }

  /* zero styling */
  ul {
    margin: 0;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }

  .active {
    color: rgb(0, 136, 52);
  }
`;