import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, ResetStyles, theme } from '@styles';

import { Container, Footer, Header } from '@layout';
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
        <Component {...pageProps} />
        <Footer.Root>
          <Footer.Content />
        </Footer.Root>
      </Container.Root>
    </ThemeProvider>
  );
};

export default MyApp;
