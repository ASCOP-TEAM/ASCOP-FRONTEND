import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { Col, Container } from 'react-bootstrap';
import { ImageContainer, SectionContent } from '@styles/pages/cadastros';
import { ActiveLink, Button } from '@components';
import { BASEURL } from '@utils';
import { ICadastros } from '@interfaces';
import Image from 'next/image';

interface CadastrosProps {
  cadastrosData: ICadastros | null;
}

const Cadastros: NextPage<CadastrosProps> = ({ cadastrosData }) => {
  const { background, bloco1, bloco2 } = cadastrosData?.data.attributes || {};

  const backgroudImage =
    background?.data?.attributes?.url || '/cadastrosbg.jpeg';

  return (
    <>
      <Container>
        <SectionContent>
          {bloco1 && (
            <Col xs={12} lg={5} md={7} className="box dark">
              <div>
                <h1>{bloco1.blockSumary?.titulo}</h1>
              </div>
              <div>
                <p>{bloco1.blockSumary?.descricao}</p>
              </div>
              <div>
                {bloco1.botao && (
                  <ActiveLink href={bloco1.botao.url}>
                    <Button text={bloco1.botao.titulo} theme={'secundary'} />
                  </ActiveLink>
                )}
              </div>
            </Col>
          )}

          {bloco2 && (
            <>
              <Col xs={12} lg={5} md={7} className="box light">
                <div>
                  <h1>{bloco2.blockSumary?.titulo}</h1>
                </div>
                <div>
                  <p>{bloco2.blockSumary?.descricao}</p>
                </div>
                <div>
                  {bloco2.botao && (
                    <ActiveLink href={bloco2.botao.url}>
                      <Button text={bloco2.botao.titulo} />
                    </ActiveLink>
                  )}
                </div>
              </Col>

              {backgroudImage && (
                <ImageContainer>
                  <div className="gradient-overlay"></div>
                  <Image
                    src={backgroudImage}
                    alt="Imagem de fundo"
                    layout="fill"
                    objectFit="cover"
                  />
                </ImageContainer>
              )}
            </>
          )}
        </SectionContent>
      </Container>
    </>
  );
};

export default Cadastros;

export const getServerSideProps: GetServerSideProps<
  CadastrosProps
> = async () => {
  try {
    if (!BASEURL) {
      console.error(
        'A api não está definida corretamente nas variaveis de ambiente - cadastros',
      );
      return {
        redirect: {
          destination: '/505',
          permanent: false,
        },
      };
    }

    const response = await fetch(
      `${BASEURL}/api/cadastro/?populate[background][populate]=*&populate[bloco1][populate]=*&populate[bloco2][populate]=*`,
    );

    if (response.status != 200) {
      console.error(
        'Erro ao buscar dados da API - page cadastros:',
        response.statusText,
      );

      return {
        redirect: {
          destination: '/505',
          permanent: false,
        },
      };
    }

    const cadastrosData = await response.json();

    if (
      !cadastrosData ||
      !cadastrosData.data ||
      !cadastrosData.data.attributes
    ) {
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
        cadastrosData,
      },
    };
  } catch (error) {
    console.error('Erro ao buscar dados da API - page cadastros:', error);
    return {
      props: {
        cadastrosData: null,
      },
    };
  }
};
