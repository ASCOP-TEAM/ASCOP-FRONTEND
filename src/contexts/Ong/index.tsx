import React from 'react';
import { ONG } from '@interfaces';

export const ONGContext = React.createContext<ONG | undefined>(undefined);

interface ONGProps {
  initialData: ONG | undefined;
  children: React.ReactNode;
}

export const ONGProvider: React.FC<ONGProps> = ({ children, initialData }) => {
  const [data /* setData */] = React.useState<ONG | undefined>(initialData);

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
