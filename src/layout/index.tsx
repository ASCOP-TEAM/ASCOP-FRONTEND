import React from 'react';
import { Menu, Footer, Header } from '@components';
import Head from 'next/head';

interface layoutProps {
  title?: string;
  metaName?: string;
  metaContent?: string;
  bgColor?: string;
  txColor?: string;
  staticmenu?: boolean;
  children: React.ReactNode;
}

const Layout: React.FC<layoutProps> = (props) => {
  return (
    <>
      <Header>
        <Head>
          <title>
            {!props.title ? 'ASCOP' : props.title + ' - ASCOP'} {}
          </title>
          <meta
            name={!props.metaName ? 'ASCOP' : props.metaName}
            content={
              !props.metaContent
                ? 'SKATISTAS DA COSTEIRA DO PIRAJUBAÉ'
                : props.metaContent
            }
          />

          <meta property="og:title" content="ASCOP" />
          <meta
            property="og:description"
            content="ASSOCIAÇÃO DE SKATISTAS DA COSTEIRA DO PIRAJUBAÉ"
          />
          <meta property="og:image" content="/logowhite.png" />
        </Head>
        <Menu
          bgColor={props.bgColor}
          txColor={props.txColor}
          staticmenu={props.staticmenu}
        />
      </Header>
      <>{props.children}</>
      <Footer.Root>
        <Footer.Content isMobileView />
        <Footer.Content />
      </Footer.Root>
    </>
  );
};

export default Layout;
