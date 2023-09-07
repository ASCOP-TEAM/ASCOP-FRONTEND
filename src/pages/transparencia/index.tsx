import React from 'react';
import { Col, Container, Pagination, Row } from 'react-bootstrap';
import { GetServerSideProps, NextPage } from 'next';

import Layout from '@layout';
import { SectionContent } from './styles';
import { CardReport, TopBlockSection } from '@components';
import { BASEURL, HttpCall } from '@utils';
import { Relatorios, ITransparencia } from '@interfaces';
import { useRouter } from 'next/router';

interface TransparenciaProps {
  trasparenciaData: ITransparencia | null;
}

const Transparencia: NextPage<TransparenciaProps> = ({ trasparenciaData }) => {
  const router = useRouter();

  React.useEffect(() => {
    if (!trasparenciaData) {
      router.push('/505');
    }
  }, [trasparenciaData, router]);

  const [currentPage, setCurrentPage] = React.useState(1);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const { bloco1, topblocksection } = trasparenciaData?.data.attributes || {};

  const backgroudBlockSection =
    topblocksection?.background?.data.attributes.url;

  return (
    <>
      <Layout bgColor={'white'} txColor="black">
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
            <Row>
              <Col xs={12} className="box light">
                {bloco1 && (
                  <div className="my-2">
                    <div className="my-2">
                      <h2>{bloco1.titulo}</h2>
                    </div>
                    <Col lg={6} xs={12}>
                      <p>{bloco1.descricao}</p>
                    </Col>
                  </div>
                )}

                <Row>
                  <HttpCall<Relatorios>
                    url={`${BASEURL}/api/relatorios?pagination[page]=${currentPage}`}
                  >
                    {(response, error: Error | null) => (
                      <>
                        {response && response.data && (
                          <>
                            {response.data.map((dataValues) => {
                              return (
                                <Col key={dataValues.id} xs={12} md={6} lg={4}>
                                  <CardReport
                                    key={dataValues.id}
                                    {...dataValues.attributes}
                                  />
                                </Col>
                              );
                            })}

                            <div className="pages my-5">
                              <Pagination>
                                <Pagination.First
                                  onClick={() => handlePageChange(1)}
                                />
                                <Pagination.Prev
                                  onClick={() =>
                                    handlePageChange(currentPage - 1)
                                  }
                                />
                                {[
                                  ...Array(response.meta.pagination.pageCount),
                                ].map((_, index) => (
                                  <Pagination.Item
                                    key={index + 1}
                                    active={index + 1 === currentPage}
                                    onClick={() => handlePageChange(index + 1)}
                                  >
                                    {index + 1}
                                  </Pagination.Item>
                                ))}
                                <Pagination.Next
                                  onClick={() =>
                                    handlePageChange(currentPage + 1)
                                  }
                                />
                                <Pagination.Last
                                  onClick={() =>
                                    handlePageChange(
                                      response.meta.pagination.pageCount,
                                    )
                                  }
                                />
                              </Pagination>
                            </div>
                          </>
                        )}
                        {error && (
                          <p>Error fetching relatorios: {error.message}</p>
                        )}
                      </>
                    )}
                  </HttpCall>
                </Row>
              </Col>
            </Row>
          </SectionContent>
        </Container>
      </Layout>
    </>
  );
};

export default Transparencia;

export const getServerSideProps: GetServerSideProps<
  TransparenciaProps
> = async () => {
  try {
    if (!BASEURL) {
      throw new Error(
        'A api não está definida corretamente nas variaveis de ambiente. - transparencia',
      );
    }

    const response = await fetch(
      `${BASEURL}/api/transparencia/?populate[topblocksection][populate]=*&populate[bloco1][populate]=*`,
    );

    const trasparenciaData = await response.json();

    return {
      props: {
        trasparenciaData,
      },
    };
  } catch (error) {
    console.error('Erro ao buscar dados da API - page Trasparencia:', error);
    return {
      props: {
        trasparenciaData: null,
      },
    };
  }
};
