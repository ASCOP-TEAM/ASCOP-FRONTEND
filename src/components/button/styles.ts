import styled from 'styled-components';

type Theme = {
  background: string;
  color: string;
};

export const Container = styled.div<{ btnTheme: Theme }>`
  button {
    font-family: 'Inter-Bold', Helvetica;
    font-weight: 700;

    background-color: ${(props) => props.btnTheme.background};
    color: ${(props) => props.btnTheme.color};
    padding: 13px 40px;
    border: none;
    cursor: pointer;

    &:disabled {
      background-color: #9e9e9e;
    }

    .spinner-border {
      border: 0.2em solid ${(props) => props.btnTheme.color} !important;
      border-right-color: transparent !important;
    }
  }
`;
