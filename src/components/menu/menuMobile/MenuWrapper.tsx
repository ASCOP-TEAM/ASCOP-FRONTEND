import React from 'react';
import {
  BarBottom,
  BarMiddle,
  BarTop,
  HamburgerMenuWrapper,
  InputCheckbox,
  LabelToggle,
} from './styles';

interface HamburgerMenuProps {
  isOpen: boolean;
  onClick: () => void;
}

export function MenuWrapper({ isOpen, onClick }: HamburgerMenuProps) {
  return (
    <HamburgerMenuWrapper onClick={onClick}>
      <InputCheckbox
        type="checkbox"
        checked={isOpen}
        onChange={() => {
          console.log('');
        }}
      />
      <LabelToggle>
        <BarTop isOpen={isOpen} />
        <BarMiddle isOpen={isOpen} />
        <BarBottom isOpen={isOpen} />
      </LabelToggle>
    </HamburgerMenuWrapper>
  );
};

