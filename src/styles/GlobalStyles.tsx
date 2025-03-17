import { Global, css } from '@emotion/react';
import { theme } from './theme';

export const GlobalStyles = () => (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${theme.typography.fontFamily};
      }

      body {
        background-color: ${theme.colors.white};
        color: ${theme.colors.dark};
        line-height: ${theme.typography.body.lineHeight};
      }

      html {
        scroll-behavior: smooth;
      }

      a {
        text-decoration: none;
        color: inherit;
      }

      button {
        cursor: pointer;
        border: none;
        background: none;
        font-family: inherit;
      }
    `}
  />
); 