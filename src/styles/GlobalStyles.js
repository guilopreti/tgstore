import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.display};
    line-height: 1.3;
    font-weight: 600;
  }

  img {
    display: block;
    max-width: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: ${({ theme }) => theme.fonts.body};
    cursor: pointer;
    border: none;
    background: none;
  }

  input, select, textarea {
    font-family: ${({ theme }) => theme.fonts.body};
  }

  ul, ol {
    list-style: none;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;
