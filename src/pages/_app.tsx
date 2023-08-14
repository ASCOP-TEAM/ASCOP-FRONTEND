import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, ResetStyles, theme } from '@styles';

import { Container, Footer, Header, Main } from '@layout';
import { Menu } from '@components';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <ResetStyles />
      <GlobalStyle />
      <Container.Root>
        <Header>
          <Menu />
        </Header>
        <Main>
          <Component {...pageProps} />
        </Main>
        <Footer.Root>
          <Footer.Content />
        </Footer.Root>
      </Container.Root>
    </ThemeProvider>
  );
};

export default MyApp;
