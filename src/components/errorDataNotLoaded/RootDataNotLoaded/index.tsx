import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

interface RootDataNotLoadedProps {
  children: React.ReactNode;
}

const RootDataNotLoaded: React.FC<RootDataNotLoadedProps> = ({ children }) => {
  return (
    <ErrorContainer>
      <ErrorImage>
        <Image
          src="/brokenSkateboardFlat.svg"
          alt="Descrição da imagem"
          width={200}
          height={200}
        />
      </ErrorImage>
      <ErrorText>{children}</ErrorText>
    </ErrorContainer>
  );
};

export default RootDataNotLoaded;
