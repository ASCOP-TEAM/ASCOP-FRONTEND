import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, ResetStyles, theme } from '@styles';

import { CartProvider, ONGProvider } from '@contexts';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <ResetStyles />
      <GlobalStyle />
      <ONGProvider>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </ONGProvider>
    </ThemeProvider>
  );
};

export default MyApp;
