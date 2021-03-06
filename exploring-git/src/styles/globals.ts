import { createGlobalStyle } from 'styled-components';

import GitBackground from '../_assets/sky.jpg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #F0F0F5 url(${GitBackground}) 70% top;
    -webkit-font-smoothing: antialiased;
    h2 {
      font-size: 26px;
      color: #fff;
      margin-top: 40px;
      margin-left: 30px;
    }

  }

  body, input, button {
    font: 16px sans-serif;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }
`;

/**
 *  Export globals to your App.tsx
 */
