import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${theme.typography.fontFamily};
    line-height: ${theme.typography.body.lineHeight};
    color: ${theme.colors.dark};
    background: ${theme.colors.white};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  #root {
    display: flex;
    flex-direction: column;
  }

  main {
    flex: 1;
    width: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    line-height: 1.2;
  }

  h1 {
    font-size: ${theme.typography.h1.fontSize};
    font-weight: ${theme.typography.h1.fontWeight};
  }

  h2 {
    font-size: ${theme.typography.h2.fontSize};
    font-weight: ${theme.typography.h2.fontWeight};
  }

  h3 {
    font-size: ${theme.typography.h3.fontSize};
    font-weight: ${theme.typography.h3.fontWeight};
  }

  h4 {
    font-size: ${theme.typography.h4.fontSize};
    font-weight: ${theme.typography.h4.fontWeight};
  }

  p {
    margin: 0;
  }

  a {
    color: ${theme.colors.secondary};
    text-decoration: none;
    transition: color ${theme.transitions.fast};

    &:hover {
      color: ${theme.colors.secondaryDark};
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    font-family: inherit;
  }

  ul, ol {
    list-style: none;
  }

  input, textarea, button {
    font-family: inherit;
    font-size: inherit;
  }

  ::selection {
    background: ${theme.colors.secondary};
    color: ${theme.colors.white};
  }

  :focus {
    outline: none;
  }

  :focus-visible {
    outline: 3px solid ${theme.colors.secondary};
    outline-offset: 2px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    html {
      font-size: 14px;
    }
  }

  @media (min-width: ${theme.breakpoints.wide}) {
    html {
      font-size: 18px;
    }
  }
`; 