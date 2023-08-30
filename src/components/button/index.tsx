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
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { theme, text, isLoading, ...buttonProps } = props;
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
          text
        )}
      </button>
    </Container>
  );
};
