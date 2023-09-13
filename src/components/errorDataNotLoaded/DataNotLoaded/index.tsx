import React from 'react';
import { ErrorDataNotLoaded } from '..';

export const DataNotLoaded = () => {
  return (
    <ErrorDataNotLoaded.Root>
      <ErrorDataNotLoaded.Title>Dados não Carregados</ErrorDataNotLoaded.Title>
      <ErrorDataNotLoaded.Content>
        Parece que não conseguimos carregar os dados necessários para exibir
        esta página. Isso pode ser devido a um problema temporário. Por favor,
        tente novamente mais tarde.
      </ErrorDataNotLoaded.Content>
    </ErrorDataNotLoaded.Root>
  );
};
