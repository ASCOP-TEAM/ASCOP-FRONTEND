import React from 'react';
import Layout from '@layout';
import { GetServerSideProps, NextPage } from 'next';
import { Col, Container } from 'react-bootstrap';
import { SectionContent } from './styles';
import { QrCode, TextBlockSection, TopBlockSection } from '@components';
import { BASEURL } from '@utils';
import { IDoacao } from '@interfaces';
import { useRouter } from 'next/router';

interface DoacaoProps {
  doacaoData: IDoacao;
}

const Doacao: NextPage<DoacaoProps> = ({ doacaoData }) => {
  const router = useRouter();

  React.useEffect(() => {
    if (!doacaoData) {
      router.push('/505');
    }
  }, [doacaoData, router]);

  const { bloco1, topblocksection } = doacaoData?.data.attributes || {};

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
          <SectionContent>
            {bloco1 && (
              <Col xs={12} lg={6} className="box light">
                <div className="">
                  <h1>{bloco1.titulo}</h1>
                </div>
                <Col lg={8} className="mb-4">
                  <p>{bloco1.descricao}</p>
                  <br />
                  <h4>Nossos dados bancarios:</h4>
                  <p>
                    Banco: <strong>000 bank</strong>
                    <br />
                    Agência: <strong>000-0</strong>
                    <br />
                    Conta: <strong>00.000-0</strong>
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

            <Col xs={12} lg={6} className="box donate">
              <Col xs={12} lg={6}>
                <QrCode />
              </Col>
              <div className="separator my-3">
                <hr />
                <p>OU</p>
                <hr />
              </div>
              <div>
                <a href="#" className="vakinha-btn">
                  Contribuir Pelo Vakinha{' '}
                </a>
              </div>
            </Col>
          </SectionContent>
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

    const response = await fetch(
      `${BASEURL}/api/doacao?populate[topblocksection][populate]=*&populate[bloco1][populate]=*`,
    );

    const doacaoData = await response.json();

    return {
      props: {
        doacaoData,
      },
    };
  } catch (error) {
    console.error('Erro ao buscar dados da API - page doacao :', error);
    return {
      props: {
        doacaoData: null,
      },
    };
  }
};
