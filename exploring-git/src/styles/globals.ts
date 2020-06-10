import { createGlobalStyle } from 'styled-components';
import { shade } from 'polished';

import background from '../_assets/sky2.jpg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: ${shade(0.2, '#232129')} url(${background}) no-repeat center;
    background-size: cover;
    -webkit-font-smoothing: antialiased;

    img {
    }
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }
`;

/**
 *  Export globals to your App.tsx
 */
