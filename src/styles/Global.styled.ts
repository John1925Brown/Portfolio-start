import { createGlobalStyle } from 'styled-components';
import { Theme } from './Theme';

export const GlobalStyle = createGlobalStyle`
body {
  position: relative;
  overflow-x: hidden;
  font-size: 16px;
  background-color: #fff;
  font-weight: 500;
}

:root {
  position: relative;
  overflow-x: hidden;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

img,
svg {
  display: block;
  max-width: 100%;
  height: auto;
}

svg {
  max-height: 100%;
}

button {
  text-align: center;
  padding: 0;
  cursor: pointer;
  border: none;
  background-color: transparent;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

h1,
h2,
h3,
p,
figure,
fieldset {
  margin: 0;
}

iframe {
  border: none;
}

body {
  margin: 0;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${Theme.colors.primaryBg};
  color: ${Theme.colors.font}
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

`;
