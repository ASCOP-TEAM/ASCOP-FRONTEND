import Layout from '@layout';
import { GetServerSideProps, NextPage } from 'next';
import { Col, Container } from 'react-bootstrap';
import { ImageContainer, SectionContent } from './styles';
import { ActiveLink, Button } from '@components';
import { BASEURL } from '@utils';
import { ICadastros } from '@interfaces';
import Image from 'next/image';
interface CadastrosProps {
  cadastrosData: ICadastros | null;
}

const Cadastros: NextPage<CadastrosProps> = ({ cadastrosData }) => {
  console.log('data >>', cadastrosData);

  const { background, bloco1, bloco2 } = cadastrosData?.data.attributes || {};

  return (
    <>
      <Layout bgColor={'white'} txColor="black">
        <Container>
          <SectionContent>
            {bloco1 && (
              <Col xs={12} lg={5} className="box dark">
                <div className="my-4">
                  <h1>{bloco1.blockSumary.titulo}</h1>
                </div>
                <div className="mb-4">
                  <p>{bloco1.blockSumary.descricao}</p>
                </div>
                <div>
                  {bloco1.button && (
                    <ActiveLink href={bloco1.button.url}>
                      <Button text={bloco1.button.titulo} theme={'secundary'} />
                    </ActiveLink>
                  )}
                </div>
              </Col>
            )}

            {bloco2 && (
              <Col xs={12} lg={5} className="box light">
                <div className="my-4">
                  <h1>{bloco2.blockSumary.titulo}</h1>
                </div>
                <div className="mb-4">
                  <p>{bloco2.blockSumary.descricao}</p>
                </div>
                <div>
                  {bloco2.button && (
                    <ActiveLink href={bloco2.button.url}>
                      <Button text={bloco2.button.titulo} />
                    </ActiveLink>
                  )}
                </div>
              </Col>
            )}

            {background && (
              <ImageContainer>
                <div className="gradient-overlay"></div>
                <Image
                  src={background.data.attributes.url}
                  alt="Imagem de fundo"
                  layout="fill"
                  objectFit="cover"
                />
              </ImageContainer>
            )}
          </SectionContent>
        </Container>
      </Layout>
    </>
  );
};

export default Cadastros;

export const getServerSideProps: GetServerSideProps<
  CadastrosProps
> = async () => {
  try {
    if (!BASEURL) {
      throw new Error(
        'A api não está definida corretamente nas variaveis de ambiente.',
      );
    }

    const response = await fetch(
      `${BASEURL}/api/cadastro/?populate[background][populate]=*&populate[bloco1][populate]=*&populate[bloco2][populate]=*`,
    );

    const cadastrosData = await response.json();

    return {
      props: {
        cadastrosData,
      },
    };
  } catch (error) {
    console.error('Erro ao buscar dados da API:', error);
    return {
      props: {
        cadastrosData: null,
      },
    };
  }
};
