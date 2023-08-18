import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, ResetStyles, theme } from '@styles';

import { Container, Footer, Header } from '@layout';
import { Menu } from '@components';

import { CartProvider } from '@contexts';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
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
      </CartProvider>
    </ThemeProvider>
  );
};

export default MyApp;
