import React from 'react';
import { MYContainer } from './styles';

type ContainerProps = {
  children: React.ReactNode;
};

export function ContainerRoot({ children }: ContainerProps) {
  return <MYContainer>{children}</MYContainer>;
}
