import React from 'react';
import { Global, css } from '@emotion/core'


const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, button {
    font-family: 'VT323', monospace;
  }
`;

export default () => <Global styles={globalStyles} />;

