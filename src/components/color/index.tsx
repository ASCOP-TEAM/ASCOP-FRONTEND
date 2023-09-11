import React from 'react';

import { IconBaseProps } from 'react-icons';
import { BsFillCircleFill } from 'react-icons/bs';
import { StyledIcon } from './style';

interface ColorIconProps extends IconBaseProps {
  color?: string;
  view?: 'large' | 'small';
  isSelected: boolean;
}

export const ColorIcon: React.FC<ColorIconProps> = ({
  color,
  view = 'large',
  isSelected,
  ...restProps
}) => {
  return (
    <StyledIcon isSelected={isSelected} view={view} color={color}>
      <BsFillCircleFill {...restProps} />
    </StyledIcon>
  );
};
