import React from 'react';
import { Col, Container } from 'react-bootstrap';
import { GetServerSideProps, NextPage } from 'next';

import { SectionContent } from '@styles/pages/contato';
import { TopBlockSection, ContactForm } from '@components';
import { IContato } from '@interfaces';
import { BASEURL } from '@utils';

interface ContatoProps {
  contatoData: IContato | null;
}

const Contato: NextPage<ContatoProps> = ({ contatoData }) => {
  const { bloco1, bloco2, topblocksection } =
    contatoData?.data.attributes || {};

  const backgroudBlockSection =
    topblocksection?.background?.data?.attributes?.url || '/backgroud.jpg';

  return (
    <>
      {topblocksection && backgroudBlockSection && (
        <TopBlockSection.Root imageUrl={backgroudBlockSection}>
          <TopBlockSection.Title title={topblocksection.titulo} />
          <TopBlockSection.Paragrap paragrap={topblocksection.descricao} />
        </TopBlockSection.Root>
      )}

      <Container>
        <SectionContent>
          <Col xs={12} lg={6} className="box light contact">
            {bloco1 && (
              <div>
                <h3>{bloco1.titulo} </h3>
                <p>{bloco1.descricao}</p>
              </div>
            )}
            <div>
              <ContactForm />
            </div>
          </Col>
          <Col xs={12} lg={6} className="box light location">
            {bloco2 && (
              <div>
                <h3>{bloco2.titulo} </h3>
                <p>{bloco2.descricao}</p>
              </div>
            )}
            <div className="maps d-none d-lg-block">
              <iframe
                title="google maps ascop"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.8151991782693!2d-48.525583372192!3d-27.630239581039874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527399b4e636325%3A0x57046c191a8812e6!2sASCOP%20-%20Associa%C3%A7%C3%A3o%20dos%20Skatistas%20da%20Costeira%20do%20Pirajuba%C3%A9.!5e0!3m2!1spt-BR!2sbr!4v1694041863851!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                loading="lazy"
              ></iframe>
            </div>
          </Col>
        </SectionContent>
      </Container>
    </>
  );
};

export default Contato;

export const getServerSideProps: GetServerSideProps<
  ContatoProps
> = async () => {
  try {
    if (!BASEURL) {
      console.error(
        'A api não está definida corretamente nas variaveis de ambiente. - contato',
      );
      return {
        redirect: {
          destination: '/505',
          permanent: false,
        },
      };
    }

    const response = await fetch(
      `${BASEURL}/api/contato/?populate[topblocksection][populate]=*&populate[bloco1][populate]=*&populate[bloco2][populate]=*`,
    );

    if (response.status != 200) {
      console.error(
        'Erro ao buscar dados da API - page loja:',
        response.statusText,
      );

      return {
        redirect: {
          destination: '/505',
          permanent: false,
        },
      };
    }

    const contatoData = await response.json();

    if (!contatoData || !contatoData.data || !contatoData.data.attributes) {
      console.error('Dados da API estão ausentes ou vazios.');

      return {
        redirect: {
          destination: '/505',
          permanent: false,
        },
      };
    }

    return {
      props: {
        contatoData,
      },
    };
  } catch (error) {
    console.error('Erro ao buscar dados da API - page contato:', error);
    return {
      props: {
        contatoData: null,
      },
    };
  }
};
