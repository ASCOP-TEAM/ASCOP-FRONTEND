import type { NextPage } from 'next';
import Head from 'next/head';
import { Main } from '@layout';
import { TopBlockSection } from '@components';

const Loja: NextPage = () => {
  return (
    <>
      <Head>
        <title>Loja</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <TopBlockSection.Root backgroud="./backgroud.jpg">
        <TopBlockSection.Title title="Bem-vindo à Loja Solidária da ASCOP" />
        <TopBlockSection.Paragrap
          paragrap="Explore nossa seleção única de produtos que não apenas trazem
            qualidade, mas também fazem a diferença. Ao comprar da nossa loja,
            você está apoiando diretamente nossos projetos e iniciativas de
            impacto social. Cada compra contribui para causar um impacto
            positivo nas vidas das pessoas e comunidades que atendemos. Obrigado
            por se juntar a nós nessa jornada de solidariedade e mudança!"
        />
      </TopBlockSection.Root>
      <Main>
        <section>
          <h1>hello word 2</h1>
        </section>
      </Main>
    </>
  );
};

export default Loja;
