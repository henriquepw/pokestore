import React from 'react';
import { withTheme } from 'emotion-theming';
import { Global, css } from '@emotion/core';

import theme from './theme';

interface WithThemeProps {
  theme: typeof theme;
}

export default withTheme(({ theme }: WithThemeProps) => (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body,
      input,
      button {
        font-family: 'VT323', monospace;
      }

      body {
        background: ${theme.colors.background};
      }
    `}
  />
));
