import { Col } from 'react-bootstrap';
import styled from 'styled-components';

export const Container = styled(Col)`
  .values-payment {
    .payment {
      border: 2px solid red;
    }
  }
`;

export const ButtonMercadoLivreFake = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #009ee3 !important;
  color: white !important;
  font-weight: 600 !important;
  width: 100%;
  border-radius: 6px;
  padding: 8px 8px 8px 8px;
  border: none;
  font-weight: 400;
  &:disabled {
    background-color: #666666 !important;
    span {
      color: white !important;
    }
    img {
      filter: grayscale(1);
    }
  }
`;
