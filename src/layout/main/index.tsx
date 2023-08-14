import React from 'react';
import { StyledMain } from './styles';

type MainProps = {
  children: React.ReactNode;
};

export function Main({ children }: MainProps) {
  return <StyledMain>{children}</StyledMain>;
}
