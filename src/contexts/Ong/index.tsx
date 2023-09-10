import React from 'react';
import { BASEURL } from '@utils';
import { ONG } from '@interfaces';

export const ONGContext = React.createContext<ONG | undefined>(undefined);

interface ONGProps {
  children: React.ReactNode;
}

export const ONGProvider: React.FC<ONGProps> = ({ children }) => {
  const [data, setData] = React.useState<ONG | undefined>(undefined);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `${BASEURL}/api/ong/?populate[redesSociais][populate]=*&populate[dadosBancarios][populate]=*&populate[contato][populate]=*&populate[pixDados][populate]=*`,
        );
        const ongData: ONG = await response.json();
        setData(ongData);
      } catch (error) {
        console.error('Erro ao obter dados da ONG:', error);
        setData(undefined);
      }
    };

    getData();
  }, []);

  return <ONGContext.Provider value={data}>{children}</ONGContext.Provider>;
};

export const useONGContext = () => {
  const context = React.useContext(ONGContext);
  if (!context) {
    throw new Error(
      'useONGContext deve ser usado dentro de um componente ONGProvider',
    );
  }
  return context;
};
