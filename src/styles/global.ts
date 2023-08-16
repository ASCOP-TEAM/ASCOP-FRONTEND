import { createGlobalStyle } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import theme from './theme';

export const GlobalStyle = createGlobalStyle`

:root {
  /* header */
  --navbar-height: ${theme.variables.navbarHeight};
  --real-navbar-height: calc(var(--navbar-height) + 1px); 
  
  /*  main */
  --layout-content-p:  ${theme.variables.layoutContentP};
  --layout-content-p-sm:  ${theme.variables.layoutContentPSm};
  --layout-content-min-h: calc(100vh - var(--real-navbar-height) - var(--footer-height));

  /* footer */
  --footer-height:${theme.variables.footerrHeight}

}

body {

 
&::-webkit-scrollbar {
  width: 10px;
  border-radius: 10px;
  background: #ffffff00; 
}


&::-webkit-scrollbar-track {
  background: #ffffff00; 
}

&::-webkit-scrollbar-thumb {
  background: #5555; 
  border-radius: 40px;
}


&::-webkit-scrollbar-thumb:hover {
  background: #888; 
}
  font:
    16px/16px 'Segoe UI',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    Helvetica,
    Arial,
    sans-serif;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
}

a {
  color: ${(props) => props.theme.colors};
  text-decoration: underline;
  transition: all 80ms ease-in;

  &:hover,
  &:focus {
    text-decoration: none;
    color: ${(props) => props.theme.colors};
  }
}

h1 {
  margin: 0;
  padding: 0;
}

header nav ul {
  padding: 0;

  li {
    padding: 0;
    list-style: none;
  }
}

footer {
  nav ul {
    margin: 0;
    padding: 0;

    li {
      padding: 0;
      list-style: none;
    }
  }

  h3 {
    margin: 3rem 0 0;
    padding: 0;
  }
}

.hidden {
  display: none;
}
`;
