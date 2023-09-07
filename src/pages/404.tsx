import { ActiveLink, Button } from '@components';
import Head from 'next/head';
import Image from 'next/image';
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

  h1 {
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
  text-align: center;
`;

const ErrorLink = styled.div`
  p {
    font-size: 15px;
    color: #ffffffc9;
  }
`;

const Error404: React.FC = () => {
  return (
    <>
      <Head>
        <title>Error 404 - ASCOP</title>
        <meta
          name={'errorPage404'}
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
          <h1 className="mb-3">404s</h1>
          <p>Parece que a página que você está procurando não existe!</p>
        </ErrorText>
        <ErrorLink>
          <p>Clique aqui para voltar para a página inicial 👇</p>
          <ActiveLink href="/">
            <Button text="Voltar para a Home" theme="secundary"></Button>
          </ActiveLink>
        </ErrorLink>
      </ErrorContainer>
    </>
  );
};

export default Error404;
