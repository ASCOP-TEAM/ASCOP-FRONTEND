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
  txColor?: string;
}

export function MenuWrapper({ isOpen, onClick, txColor }: HamburgerMenuProps) {
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
        <BarTop isOpen={isOpen} txColor={txColor} />
        <BarMiddle isOpen={isOpen} txColor={txColor} />
        <BarBottom isOpen={isOpen} txColor={txColor} />
      </LabelToggle>
    </HamburgerMenuWrapper>
  );
};

