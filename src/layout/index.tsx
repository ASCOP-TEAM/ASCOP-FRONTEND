import React from 'react';
import { Menu, Footer, Header } from '@components';
import Head from 'next/head';
import { routeMappings } from '@utils';
import { useRouter } from 'next/router';
import styled from 'styled-components';

interface layoutProps {
  children: React.ReactNode;
}

export const Placeholder = styled.div`
  height: calc(var(--navbar-height) + 1px);
`;

const Layout: React.FC<layoutProps> = ({ children }) => {
  const router = useRouter();

  const [bgColor, setBgColor] = React.useState('white');
  const [txColor, setTxColor] = React.useState('black');
  const [titlePage, setTitlePage] = React.useState('');
  const [staticMenu, setStaticMenu] = React.useState(true);

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

  const isErrorPage =
    router.asPath.startsWith('/404') || router.asPath.startsWith('/505');

  return (
    <>
      <Header>
        <Head>
          <title>
            {!titlePage ? 'ASCOP' : titlePage + ' - ASCOP'} {}
          </title>
          <meta name={'ASCOP'} content={'SKATISTAS DA COSTEIRA DO PIRAJUBAÉ'} />

          <meta property="og:title" content="ASCOP" />
          <meta
            property="og:description"
            content="ASSOCIAÇÃO DE SKATISTAS DA COSTEIRA DO PIRAJUBAÉ"
          />
          <meta property="og:image" content="/logowhite.png" />
        </Head>
        {!isErrorPage && (
          <Menu bgColor={bgColor} txColor={txColor} staticmenu={staticMenu} />
        )}
      </Header>
      {!isErrorPage && <Placeholder />}

      <>{children}</>

      <Footer.Root>
        {!isErrorPage && <Footer.Content />}
        {!isErrorPage && <Footer.Content isMobileView />}
      </Footer.Root>
    </>
  );
};

export default Layout;
