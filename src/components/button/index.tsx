import React from 'react';
import { Container } from './styles';
import { Spinner } from 'react-bootstrap';

const darkTheme = {
  background: '#000000',
  color: '#fff',
};

const lightTheme = {
  background: '#fff',
  color: '#333',
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: 'primary' | 'secundary';
  text: string;
  isLoading?: boolean;
  icon?: React.ElementType;
}

export const Button: React.FC<ButtonProps> = ({
  theme = 'primary',
  text,
  isLoading,
  icon: Icon,
  ...buttonProps
}) => {
  const selectedTheme = theme === 'primary' ? darkTheme : lightTheme;

  return (
    <Container btnTheme={selectedTheme}>
      <button {...buttonProps}>
        {isLoading ? (
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        ) : (
          <>
            {text}
            {Icon && <Icon />}
          </>
        )}
      </button>
    </Container>
  );
};
