import type { NextPage } from 'next';
import Layout from '@layout';
import { Container as ContainerMain, SectionAbout, SectionBecause, SectionFind, SectionValues } from './styles';
import { Button, TextBlockSection, Card } from '@components';
import { Col, Container } from 'react-bootstrap';
import { BookOpen, Users2, Laugh } from 'lucide-react'
import GoogleMaps from 'src/components/googleMaps';


const Home: NextPage = () => {

  return (
    <Layout bgColor="black" txColor='white' >
      <ContainerMain>
        <div className="main">
          <div className="title">
            <h1>Skate, Mais do que um esporte.</h1>
          </div>

          <div className="text-wrapper">
            <p>
              Faça parte do nosso movimento de impacto! Junte-se a nós através
              de doações ou envolvimento voluntário e ajude a ASCOP a continuar
              promovendo mudanças positivas por meio do skate em comunidades.
            </p>
          </div>

          <div>
            <Button text="DOAÇÃO" theme />
          </div>
        </div>
      </ContainerMain>
      <Container>
        {/* about */}
        <SectionAbout>
          <Col className="text-about" xs={12} lg={5}>
            <div className="title my-4">
              <h1>Quem é a ASCOP?</h1>
            </div>
            <div className="text-wrapper ">
              <p>
                Bem-vindo à ASCOP - Associação para o Skate Comunitário! Somos
                uma organização apaixonada e comprometida com a promoção de
                transformações positivas nas comunidades por meio do skate. Ao
                longo de 15 anos de existência, temos trabalhado incansavelmente
                para mostrar que o skate é muito mais do que um esporte; é uma
                ferramenta poderosa para o crescimento pessoal, a construção de
                confiança e o estabelecimento de laços duradouros.
              </p>
              <br />
              <p>
                Desde o nosso início, temos inspirado pessoas de todas as idades
                a abraçar o skate não apenas como uma atividade física, mas como
                uma jornada de autodescoberta e superação de limites. Através
                das nossas aulas e programas comunitários, temos testemunhado
                jovens e adultos encontrarem um espaço para expressão,
                criatividade e desenvolvimento de habilidades.
              </p>

              <br />
              <p>
                Acreditamos que cada manobra, cada queda e cada desafio superado
                no skate reflete o espírito de resiliência que buscamos
                cultivar. Nosso compromisso com a inclusão nos levou a atuar em
                comunidades diversas, criando oportunidades para aqueles que
                talvez nunca tivessem considerado o skate como uma
                possibilidade.
              </p>
            </div>
            <div>
              <TextBlockSection.Social disableTitle={true} theme />
            </div>
          </Col>

          <Col className="image-about" xs={12} lg={5}>
            <div className="img"></div>
          </Col>
        </SectionAbout>
        {/* values */}
        <SectionValues>
          <Col xs={12} className="main-text">
            <div className="title">
              <h1>Nossos valores! </h1>
            </div>
            <div className="text-wrapper">
              <p>
                Na família ASCOP, abraçamos e vivemos esses valores com
                convicção!
              </p>
            </div>
          </Col>

          <Col className="cards my-5" xs={12}>
            <Card
              icon={BookOpen}
              title="TRANSPARÊNCIA"
              content="Acreditamos na honestidade e na clareza como a base de todas as nossas ações. Mantemos nossas intenções e processos transparentes para construir confiança e conexões genuínas."
            />
            <Card
              icon={Users2}
              title="INCLUSÃO"
              content="Valorizamos a diversidade e acreditamos que todos têm um lugar em nossa comunidade. Promovemos um ambiente onde cada voz é ouvida e cada indivíduo é respeitado e acolhido."
            />
            <Card
              icon={Laugh}
              title="DIVERSÃO"
              content="Buscamos a alegria e a diversão no que fazemos, mas também reconhecemos a responsabilidade que temos para com nossos membros e comunidades."
            />
          </Col>
        </SectionValues>

        {/* because */}
        <SectionBecause>
          <Col xs={12} lg={5} className='img-because'>
            <div className='img'>
              <p>1</p>
            </div>
          </Col>
          <Col xs={12} lg={5} className='text-because'>
            <Col className='title mb-3'>
              <h1>Como estamos mudando a vida das crianças</h1>
            </Col>
            <Col className='text-wrapper '>
              <p> Contribuir com a inclusão social utilizando o skate como ferramenta de aprendizagem, oferecendo muito além de aulas práticas de skate para crianças e jovens da comunidade</p>
              <br />
              <p>Trabalhar o desenvolvimento físico e emocional através de eventos sociais e incentivo a prática de atividades físicas e o convívio social saudável. Utilizando o brincar e o skate para que as crianças e jovens desenvolvam suas potencialidades e atuem como protagonistas para a transformação social de nossa comunidade.</p>
            </Col>
            <Col>
              <Button text='FAÇA UMA DOAÇÃO' theme={false} />
            </Col>
          </Col>
        </SectionBecause>

        {/* find */}
        <SectionFind>
          <Col xs={12}>
            <div className='title' >
              <h2>Onde Nos Encontrar?</h2>
            </div>

            <div className='infos my-3'>
              <Col xs={12} lg={6} className='list'>
                <ul>
                  <li>
                    <h4>Contato:</h4>
                    <a href='#'>telefone: (00) 000000000</a>
                    <a href='#'>Email: maicongabrielalves@gmail.com</a>
                  </li>
                  <li>
                    <h4>Quando:</h4>
                    <p>Todos os sábados, na pista da Costeira, das 16h às 18h.(Aula das 16h às 17h e lanche das 17h às 18h)</p>
                  </li>
                  <li>
                    <h4>Endereço:</h4>
                    <a href='#'>Av. Jorge Lacerda, 1244 - Carianos, Florianópolis - SC, 88047-010</a>
                  </li>
                </ul>
              </Col>
              <Col className='text-wrapper d-none d-md-block' xs={5}>
                <p>Estamos ansiosos para recebê-lo em nossas atividades, onde crianças a partir de 5 anos podem participar de aulas emocionantes de skate. Junte-se a nós todos os sábados na pista da Costeira, das 16h às 18h. Nossa equipe de instrutores dedicados está pronta para proporcionar uma experiência divertida e educacional para os pequenos skatistas. Venha fazer parte da nossa comunidade e se divertir com segurança enquanto aprendemos e crescemos juntos!
                </p>
              </Col>
            </div>
          </Col>


          <div className='maps '>
            <GoogleMaps />
          </div>
        </SectionFind>


      </Container>
    </Layout >
  );
};

export default Home;