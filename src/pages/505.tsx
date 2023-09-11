import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: black;

  h1,
  h3 {
    color: white;
  }
`;

const ErrorImage = styled.div`
  width: 241px;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ErrorText = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 0 1rem;
`;

const Error505: React.FC = () => {
  const router = useRouter();

  React.useEffect(() => {
    const redirectTime = 5000;

    const timer = setTimeout(() => {
      router.push('/');
    }, redirectTime);

    return () => clearTimeout(timer);
  }, [router]);
  return (
    <>
      <Head>
        <title>Error 505 - ASCOP</title>
        <meta
          name={'errorPage505'}
          content={'criado por Maicon Gabriel Alves'}
        />
      </Head>

      <ErrorContainer>
        <ErrorImage>
          <Image
            src="/brokenSkateboardFlat.svg"
            alt="Descrição da imagem"
            width={200}
            height={200}
          />
        </ErrorImage>
        <ErrorText>
          <div>
            <h1 className="m-0">505</h1>
            <h3>Problemas no Servidor</h3>
          </div>
          <p className="col-lg-5 col-12">
            Desculpe, estamos enfrentando problemas técnicos no momento. O erro
            505 indica um problema no servidor. Nossa equipe já foi notificada e
            está trabalhando para resolver isso o mais rápido possível.
          </p>
        </ErrorText>
      </ErrorContainer>
    </>
  );
};

export default Error505;
