import React from 'react';
import { ContainerIcon } from './styles';

type LinkBlockSectionIconProps = {
  icon: React.ElementType;
};

export function linkBlockSectionIcon({
  icon: Icon,
}: LinkBlockSectionIconProps) {
  return (
    <ContainerIcon className="text-wrapper">
      <Icon absoluteStrokeWidth />
    </ContainerIcon>
  );
}
