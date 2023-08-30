import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, ResetStyles, theme } from '@styles';

import { CartProvider } from '@contexts';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <ResetStyles />
        <GlobalStyle />
        <Component {...pageProps} />
      </CartProvider>
    </ThemeProvider>
  );
};

export default MyApp;
