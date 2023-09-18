import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { Col, Container } from 'react-bootstrap';
import { Section } from '@styles/pages/doacao';
import { QrCode, TextBlockSection, TopBlockSection } from '@components';
import { BASEURL } from '@utils';
import { IDoacao } from '@interfaces';
import { ONGContext } from '@contexts';

interface DoacaoProps {
  donateData: IDoacao;
}

const Doacao: NextPage<DoacaoProps> = ({ donateData }) => {
  const ongData = React.useContext(ONGContext);

  const { agencia, banco, conta } =
    ongData?.data?.attributes.dadosBancarios || {};

  const { bloco1, topblocksection } = donateData?.data.attributes || {};

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
        <Section>
          {bloco1 && ongData && (
            <Col xs={12} lg={6} md={6} className="box light">
              <div className="">
                <h1>{bloco1.titulo}</h1>
              </div>
              <Col lg={8} className="mb-4">
                <p>{bloco1.descricao}</p>
                <br />
                <h4>Nossos dados bancarios:</h4>
                <p>
                  Banco: <strong>{banco || 'Dado não carregado'}</strong>
                  <br />
                  Agência: <strong>{agencia || 'Dado não carregado'}</strong>
                  <br />
                  Conta: <strong>{conta || 'Dado não carregado'}</strong>
                </p>
                <br />
                <p>
                  Para mais informações sobre a ASCOP nos acompanhe nas redes
                  sociais.
                </p>
              </Col>
              <div>
                <TextBlockSection.Social disableTitle={true} theme />
              </div>
            </Col>
          )}

          <Col
            xs={12}
            lg={6}
            md={5}
            className="box justify-content-center donate"
          >
            <Col xs={12} lg={6}>
              <QrCode />
            </Col>
            <div className="separator my-3">
              <hr />
              <p>OU</p>
              <hr />
            </div>
            <Col xs={'auto'}>
              <a
                href={ongData?.data.attributes.vakinha_url || ''}
                target="_blank"
                className="btn vakinha-btn"
                rel="noreferrer"
              >
                Contribuir Pelo Vakinha{' '}
              </a>
            </Col>
          </Col>
        </Section>
      </Container>
    </>
  );
};

export default Doacao;

export const getServerSideProps: GetServerSideProps<DoacaoProps> = async () => {
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

    const [resDonateData] = await Promise.all([
      fetch(
        `${BASEURL}/api/doacao?populate[topblocksection][populate]=*&populate[bloco1][populate]=*`,
      ),
    ]);

    if (resDonateData.status != 200) {
      console.error(
        'Erro ao buscar dados da API - page doacao:',
        resDonateData.statusText,
      );

      return {
        redirect: {
          destination: '/505',
          permanent: false,
        },
      };
    }

    const donateData = await resDonateData.json();

    if (!donateData || !donateData.data || !donateData.data.attributes) {
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
        donateData,
      },
    };
  } catch (error) {
    console.error('Erro ao buscar dados da API - page doacao :', error);
    return {
      props: {
        donateData: null,
      },
    };
  }
};
