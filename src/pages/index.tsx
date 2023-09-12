import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import Layout from '@layout';
import {
  SectionAbout,
  SectionBecause,
  SectionFind,
  SectionValues,
} from './style';
import {
  Button,
  TextBlockSection,
  Card,
  BackgroundCarousel,
  ActiveLink,
} from '@components';
import { Col, Container, Row } from 'react-bootstrap';
import { BookOpen, Users2, Laugh } from 'lucide-react';
import {
  BASEURL,
  formatDescriptionToParagraphs,
  formatPhoneNumber,
} from '@utils';
import { IHome } from '@interfaces';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ONGContext } from '@contexts';

interface HomePros {
  homeData: IHome | null;
}

const Home: NextPage<HomePros> = ({ homeData }) => {
  const ongData = React.useContext(ONGContext);

  const { email, endereco, telefone } = ongData?.data.attributes.contato || {};

  const { bloco1, bloco2, bloco3, bloco4, bloco5 } =
    homeData?.data.attributes || {};

  const carouselImages = bloco1?.sliders?.data.map(
    (imagens) => imagens.attributes.url,
  );

  const imageAbout = bloco2?.photo?.data.attributes.url;

  const imageBecause = bloco4?.photo?.data.attributes.url;

  const router = useRouter();

  React.useEffect(() => {
    if (!homeData) {
      router.push('/505');
    }
  }, [homeData, router]);

  return (
    <Layout bgColor="black" txColor="white">
      {bloco1 && (
        <BackgroundCarousel images={carouselImages || ['/backgroud.jpg']}>
          <div className="main">
            <div className="title">
              <h1>{bloco1.titulo} </h1>
            </div>
            <div className="text-wrapper ">
              <p>{bloco1.descricao}</p>
            </div>

            <div>
              {bloco1.botao && (
                <ActiveLink href={bloco1.botao.url}>
                  <Button text={bloco1.botao.titulo} theme="secundary" />
                </ActiveLink>
              )}
            </div>
          </div>
        </BackgroundCarousel>
      )}

      <Container>
        {bloco2 && (
          <SectionAbout>
            <Col className="text-about" xs={12} lg={5}>
              <div className="title my-4">
                <h1>{bloco2.titulo}</h1>
              </div>
              <Col xs={12} lg={10} className="text-wrapper ">
                {formatDescriptionToParagraphs(bloco2.descricao)}
              </Col>
              <div>
                <TextBlockSection.Social disableTitle={true} theme />
              </div>
            </Col>

            <Col className="image-about" xs={12} lg={5}>
              {imageAbout && bloco2.photo && (
                <div className="img">
                  <Image
                    src={imageAbout}
                    layout="fill"
                    alt={
                      bloco2.photo?.data.attributes.alternativeText ||
                      'sem texto alternativo'
                    }
                    objectFit="cover"
                  />
                </div>
              )}
            </Col>
          </SectionAbout>
        )}

        {bloco3 && (
          <SectionValues>
            <Col xs={12} className="main-text">
              <div className="title ">
                <h1 className="m-0">{bloco3.titulo} </h1>
              </div>
              <div className="text-wrapper">
                <p>{bloco3.descricao}</p>
              </div>
            </Col>

            <Col className="cards my-5" xs={12}>
              {bloco3.cards?.length &&
                bloco3.cards.map((card) => (
                  <Card
                    key={card.id}
                    icon={
                      card.id == 4 ? BookOpen : card.id == 5 ? Users2 : Laugh
                    }
                    title={card.titulo}
                    content={card.descricao}
                  />
                ))}
            </Col>
          </SectionValues>
        )}

        {bloco4 && (
          <SectionBecause>
            <Col xs={12} lg={5} className="img-because">
              {imageBecause && bloco4.photo && (
                <div className="img">
                  <Image
                    src={imageBecause}
                    layout="fill"
                    objectFit="cover"
                    alt={
                      bloco4.photo?.data.attributes.alternativeText ||
                      'sem texto alternativo'
                    }
                  />
                </div>
              )}
            </Col>
            <Col xs={12} lg={5} className="text-because">
              <Col className="title mb-3">
                <h1 className="m-0">{bloco4.titulo}</h1>
              </Col>
              <Col className="text-wrapper ">
                {formatDescriptionToParagraphs(bloco4.descricao)}
              </Col>
              <Col>
                {bloco4.botao && (
                  <ActiveLink href={bloco4.botao.url}>
                    <Button text={bloco4.botao.titulo} />
                  </ActiveLink>
                )}
              </Col>
            </Col>
          </SectionBecause>
        )}

        {bloco5 && ongData && (
          <SectionFind>
            <Row xs={12} className="align-items-center">
              <Col lg={6} xs={12}>
                <div className="title">
                  <h2>{bloco5.titulo}</h2>
                </div>

                <Col className="text-wrapper d-none d-md-block" xs={9}>
                  <p>{bloco5.descricao}</p>
                </Col>
              </Col>

              <Col xs={12} lg={6} className="infos ">
                <ul className="list">
                  <li>
                    <h4>Contato:</h4>
                    <p>
                      Telefone:{' '}
                      <a href={`tel:${telefone}`}>
                        {formatPhoneNumber(telefone)}
                      </a>
                    </p>
                    <p>
                      Email:
                      <a href={'mailto' + email}> {email}</a>
                    </p>
                  </li>
                  <li>
                    <h4>Quando:</h4>
                    <p>{bloco5.quando}</p>
                  </li>
                  <li>
                    <h4>Endereço:</h4>
                    <a
                      href={`https://www.google.com.br/maps/place/${
                        endereco ? endereco.replace(/\s+/g, '+') : ''
                      }`}
                    >
                      {endereco}
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>

            <div className="maps">
              <iframe
                title="google maps ascop"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.8151991782693!2d-48.525583372192!3d-27.630239581039874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527399b4e636325%3A0x57046c191a8812e6!2sASCOP%20-%20Associa%C3%A7%C3%A3o%20dos%20Skatistas%20da%20Costeira%20do%20Pirajuba%C3%A9.!5e0!3m2!1spt-BR!2sbr!4v1694041863851!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                loading="lazy"
              ></iframe>
            </div>
          </SectionFind>
        )}
      </Container>
    </Layout>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<HomePros> = async () => {
  try {
    if (!BASEURL) {
      throw new Error(
        'A api não está definida corretamente nas variaveis de ambiente.',
      );
    }

    const response = await fetch(
      `${BASEURL}/api/home/?populate[background][populate]=*&populate[bloco1][populate]=*&populate[bloco2][populate]=*&populate[bloco3][populate]=*&populate[bloco4][populate]=*&populate[bloco5][populate]=*`,
    );

    const homeData: IHome = await response.json();

    return {
      props: {
        homeData,
      },
    };
  } catch (error) {
    console.error('Erro ao buscar dados da API - page home:', error);
    return {
      props: {
        homeData: null,
      },
    };
  }
};
