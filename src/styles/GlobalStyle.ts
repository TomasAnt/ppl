import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
}

h1, h2, h3, h4, p {
  margin: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

li {
  list-style: none;
}
`;

export default GlobalStyle;
