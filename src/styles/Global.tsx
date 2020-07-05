import React from 'react';

import { Global, css } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import { darken } from 'polished';

import { Theme } from './theme';

export default withTheme(({ theme }: { theme: Theme }) => (
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
        overflow-x: hidden;
      }

      a {
        text-decoration: none;
      }

      ul {
        list-style: none;
      }

      button[type='button'] {
        cursor: pointer;
        font-size: 1rem;

        flex: 1;
        height: 36px;

        border: 0;
        border-radius: 4px;
        background: ${theme.colors.active};
        transition: background 0.2s, transform 0.2s;

        &:hover {
          background: ${darken(0.05, theme.colors.active)};
          transform: scale(1.02) translateZ(0);
        }

        &:active {
          background: ${theme.colors.active};
          transform: scale(1) translateZ(0);
        }
      }

      #root {
        width: 100%;
        max-width: 1280px;
        min-height: 100vh;
        position: relative;

        margin: 0 auto;
      }
    `}
  />
));
