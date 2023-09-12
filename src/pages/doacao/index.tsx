import React from 'react';
import Layout from '@layout';
import { GetServerSideProps, NextPage } from 'next';
import { Col, Container } from 'react-bootstrap';
import { Section } from '@styles/pages/doacao';
import { QrCode, TextBlockSection, TopBlockSection } from '@components';
import { BASEURL } from '@utils';
import { IDoacao } from '@interfaces';
import { useRouter } from 'next/router';
import { ONGContext } from '@contexts';

interface DoacaoProps {
  donateData: IDoacao;
}

const Doacao: NextPage<DoacaoProps> = ({ donateData }) => {
  const router = useRouter();

  const ongData = React.useContext(ONGContext);

  const { agencia, banco, conta } =
    ongData?.data?.attributes.dadosBancarios || {};

  React.useEffect(() => {
    if (!donateData) {
      router.push('/505');
    }
  }, [donateData, router]);

  const { bloco1, topblocksection } = donateData?.data.attributes || {};

  const backgroudBlockSection =
    topblocksection?.background?.data.attributes.url;

  return (
    <>
      <Layout bgColor={'white'} txColor="black" title="Doação">
        {topblocksection && backgroudBlockSection && (
          <TopBlockSection.Root
            imageUrl={backgroudBlockSection || './backgroud.jpg'}
          >
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
      </Layout>
    </>
  );
};

export default Doacao;

export const getServerSideProps: GetServerSideProps<DoacaoProps> = async () => {
  try {
    if (!BASEURL) {
      throw new Error(
        'A api não está definida corretamente nas variaveis de ambiente. - page doacao',
      );
    }

    const [resDonateData] = await Promise.all([
      fetch(
        `${BASEURL}/api/doacao?populate[topblocksection][populate]=*&populate[bloco1][populate]=*`,
      ),
    ]);

    const donateData = await resDonateData.json();

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
