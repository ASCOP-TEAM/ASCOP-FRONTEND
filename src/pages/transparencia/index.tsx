import React from 'react';
import { Col, Container, Pagination, Row } from 'react-bootstrap';
import { GetServerSideProps, NextPage } from 'next';

import Layout from '@layout';
import { SectionContent } from '@styles/pages/transparencia';
import { CardReport, ErrorDataNotLoaded, TopBlockSection } from '@components';
import { BASEURL } from '@utils';
import { Relatorios, ITransparencia } from '@interfaces';
import { useRouter } from 'next/router';

interface TransparenciaProps {
  trasparenciaData: ITransparencia | null;
  reportData: Relatorios | null;
}

const Transparencia: NextPage<TransparenciaProps> = ({
  trasparenciaData,
  reportData,
}) => {
  const router = useRouter();

  React.useEffect(() => {
    if (!trasparenciaData) {
      router.push('/505');
    }
  }, [trasparenciaData, router]);

  const [currentPage, setCurrentPage] = React.useState(1);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    router.replace(
      {
        pathname: router.pathname,
        query: { ...router.query, page: newPage },
      },
      undefined,
    );
  };

  const { bloco1, topblocksection } = trasparenciaData?.data?.attributes || {};

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
                  <>
                    {reportData && reportData.data ? (
                      <>
                        {reportData.data.map((dataValues) => {
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
                              onClick={() => handlePageChange(currentPage - 1)}
                            />
                            {[
                              ...Array(reportData.meta.pagination.pageCount),
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
                              onClick={() => handlePageChange(currentPage + 1)}
                            />
                            <Pagination.Last
                              onClick={() =>
                                handlePageChange(
                                  reportData.meta.pagination.pageCount,
                                )
                              }
                            />
                          </Pagination>
                        </div>
                      </>
                    ) : (
                      <ErrorDataNotLoaded.Root>
                        <ErrorDataNotLoaded.Title>
                          Dados não Carregados
                        </ErrorDataNotLoaded.Title>
                        <ErrorDataNotLoaded.Content>
                          Parece que não conseguimos carregar os dados
                          necessários para exibir esta página. Isso pode ser
                          devido a um problema temporário. Por favor, tente
                          novamente mais tarde.
                        </ErrorDataNotLoaded.Content>
                      </ErrorDataNotLoaded.Root>
                    )}
                  </>

                  {!reportData && (
                    <ErrorDataNotLoaded.Root>
                      <ErrorDataNotLoaded.Title>
                        Dados não Carregados
                      </ErrorDataNotLoaded.Title>
                      <ErrorDataNotLoaded.Content>
                        Parece que não conseguimos carregar os dados necessários
                        para exibir esta página. Isso pode ser devido a um
                        problema temporário. Por favor, tente novamente mais
                        tarde.
                      </ErrorDataNotLoaded.Content>
                    </ErrorDataNotLoaded.Root>
                  )}
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
> = async (context) => {
  try {
    if (!BASEURL) {
      throw new Error(
        'A api não está definida corretamente nas variaveis de ambiente. - transparencia',
      );
    }

    const pageNumber = context.query.page || 1;

    const [resTransparencyData, resReportData] = await Promise.all([
      fetch(
        `${BASEURL}/api/transparencia/?populate[topblocksection][populate]=*&populate[bloco1][populate]=*`,
      ),
      fetch(`${BASEURL}/api/relatorios?pagination[page]=${pageNumber}`),
    ]);

    const trasparenciaData = await resTransparencyData.json();
    const reportData = await resReportData.json();

    return {
      props: {
        trasparenciaData,
        reportData,
      },
    };
  } catch (error) {
    console.error('Erro ao buscar dados da API - page Trasparencia:', error);
    return {
      props: {
        trasparenciaData: null,
        reportData: null,
      },
    };
  }
};
