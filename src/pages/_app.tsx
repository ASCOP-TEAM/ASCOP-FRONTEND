import React from 'react';
import App, { AppContext, AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, ResetStyles, theme } from '@styles';

import { CartProvider, ONGProvider } from '@contexts';

import { BASEURL, routeMappings } from '@utils';
import { ONG } from '@interfaces';
import Layout from '@layout';
import { useRouter } from 'next/router';

import Transition from 'src/components/Transition';

interface AppOwnProps extends AppProps {
  ongData: ONG | undefined;
}

const MyApp = ({ Component, pageProps, ongData }: AppContext & AppOwnProps) => {
  const router = useRouter();

  const [bgColor, setBgColor] = React.useState('white');
  const [txColor, setTxColor] = React.useState('black');
  const [titlePage, setTitlePage] = React.useState('');
  const [staticMenu, setStaticMenu] = React.useState(false);

  const defaultRoute = routeMappings['/'];

  React.useEffect(() => {
    const routeConfig = routeMappings[router.pathname] || defaultRoute;

    if (router.pathname.startsWith('/loja/product/')) {
      setTitlePage('LOJA');
      setBgColor('white');
      setTxColor('black');
      setStaticMenu(true);
    } else {
      setTitlePage(routeConfig.name);
      setBgColor(routeConfig.bgColor);
      setTxColor(routeConfig.txColor);
      setStaticMenu(routeConfig.static);
    }
  }, [router.pathname, defaultRoute]);

  return (
    <ThemeProvider theme={theme}>
      <ResetStyles />
      <GlobalStyle />
      <ONGProvider initialData={ongData}>
        <CartProvider>
          <Layout
            bgColor={bgColor}
            txColor={txColor}
            staticmenu={staticMenu}
            title={titlePage}
          >
            <Transition>
              <Component {...pageProps} />
            </Transition>
          </Layout>
        </CartProvider>
      </ONGProvider>
    </ThemeProvider>
  );
};

export default MyApp;

MyApp.getInitialProps = async (context: AppContext) => {
  const ctx = await App.getInitialProps(context);

  try {
    if (!BASEURL) {
      console.error(
        'A api não está definida corretamente nas variaveis de ambiente.',
      );
    }

    const response = await fetch(
      `${BASEURL}/api/ong/?populate[redesSociais][populate]=*&populate[dadosBancarios][populate]=*&populate[contato][populate]=*&populate[pixDados][populate]=*&populate[footer][on][ong.footer][populate]=*`,
    );

    if (response.status != 200) {
      console.error(
        'Erro ao buscar dados da API - page ong:',
        response.statusText,
      );
    }

    const ongData: ONG = await response.json();

    if (!ongData || !ongData.data || !ongData.data.attributes) {
      console.error('Dados da API estão ausentes ou vazios.');
      return { ...ctx, ongData: undefined };
    }

    return { ...ctx, ongData: ongData };
  } catch (error) {
    console.error('Erro ao obter dados da ONG:', error);
    return { props: { ongData: undefined } };
  }
};
