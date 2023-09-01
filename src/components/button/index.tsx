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
  theme: boolean;
  text: string;
  isLoading?: boolean;
  icon?: React.ElementType;
}

export const Button: React.FC<ButtonProps> = ({
  theme,
  text,
  isLoading,
  icon: Icon,
  ...buttonProps // Corrigido para incluir buttonProps
}) => {
  return (
    <Container btnTheme={theme ? lightTheme : darkTheme}>
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
            {Icon && <Icon />}
            {text}
          </>
        )}
      </button>
    </Container>
  );
};
