import React from 'react';
import { Col, Container, Pagination, Row } from 'react-bootstrap';
import { NextPage } from 'next';

import Layout from '@layout';
import { SectionContent } from './styles';
import { CardReport, TopBlockSection } from '@components';
import { BASEURL, HttpCall } from '@utils';
import { Relatorios } from '@interfaces';

const Transparencia: NextPage = () => {
  const [currentPage, setCurrentPage] = React.useState(1); // Estado para controlar a página atual
  const itemsPerPage = 25; // Número de itens por página

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  console.log('valores', startIndex, endIndex, currentPage);

  return (
    <>
      <Layout bgColor={'white'} txColor="black">
        <TopBlockSection.Root backgroud="./backgroud.jpg">
          <TopBlockSection.Title title="Transparência Financeira" />
          <TopBlockSection.Paragrap paragrap="Bem-vindo à nossa seção de Transparência Financeira. Aqui, compartilhamos de forma aberta e clara todas as informações financeiras relacionadas às nossas atividades. Acreditamos que a transparência é a base de uma relação confiável com nossos apoiadores, e estamos empenhados em manter essa confiança por meio da divulgação completa de nossos dados financeiros." />
        </TopBlockSection.Root>

        <Container>
          <SectionContent>
            <Row>
              <Col xs={12} className="box light">
                <div className="my-4">
                  <div className="my-2">
                    <h2>Documentos Financeiros Disponíveis:</h2>
                  </div>
                  <div>
                    <p>
                      Agradecemos antecipadamente por sua generosidade e apoio.
                      Juntos, podemos construir um futuro mais brilhante para as
                      crianças que atendemos. Skate é mais do que um esporte é
                      uma ferramenta para a transformação social.
                    </p>
                  </div>
                </div>

                <Row>
                  <HttpCall<Relatorios>
                    url={`${BASEURL}/relatorios?pagination[page]=${currentPage}`}
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
