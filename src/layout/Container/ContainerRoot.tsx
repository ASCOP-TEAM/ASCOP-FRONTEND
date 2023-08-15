import React from 'react';
import { Container } from './styles';

type ContainerProps = {
  children: React.ReactNode;
};

export function ContainerRoot({ children }: ContainerProps) {
  return <Container>{children}</Container>;
}
