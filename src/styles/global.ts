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

  h1, h2, h3, h4, h5, h6 {
  font-family: "Inter-Bold", Helvetica;
  color: ${({ theme }) => theme.colors.primary};
}

h1 {
  font-size: 3rem;
  font-weight: 700;
}

h2 {
  font-size: 2rem;
  font-weight: 700;
}

h3 {
  font-size: 1.5rem;
  font-weight: 700;
}

h4 {
  font-size: 1.2rem;
  font-weight: 700;
}

h5 {
  font-size: 1rem;
  font-weight: 700;
}

h6 {
  font-size: 0.8rem;
  font-weight: 700;
}

/* Tamanhos de fonte responsivos */
@media screen and (max-width: 768px) {
  h1 {
    font-size: 2.5rem; /* Reduz o tamanho em telas menores */
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.4rem; /* Ajuste os tamanhos conforme necessário */
  }
  h4 {
    font-size: 1.2rem;
  }
  h5 {
    font-size: 1rem;
  }
  h6 {
    font-size: 0.8rem;
  }
}

@media screen and (max-width: 480px) {
  h1 {
    font-size: 2rem; /* Reduz ainda mais o tamanho em telas pequenas */
  }
  h2 {
    font-size: 1.8rem;
  }
  h3 {
    font-size: 1.2rem;
  }
  h4 {
    font-size: 1rem;
  }
  h5 {
    font-size: 0.9rem;
  }
  h6 {
    font-size: 0.7rem;
  }
}


p,
a,
button,
input,
textarea,
select,
label,
span {
  font-family: "Inter-Medium", Helvetica;
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primary};
}

/* Tamanhos de fonte responsivos */
@media screen and (max-width: 768px) {
  p,
  a,
  button,
  input,
  textarea,
  select,
  label,
  span {
    font-size: 0.9rem; /* Reduza o tamanho em telas menores conforme necessário */
  }
}

@media screen and (max-width: 480px) {
  p,
  a,
  button,
  input,
  textarea,
  select,
  label,
  span {
    font-size: 0.8rem; /* Reduza ainda mais o tamanho em telas pequenas conforme necessário */
  }
}

 
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
