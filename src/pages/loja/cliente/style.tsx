import styled from 'styled-components';

export const Button = styled.button`
  padding: 10px 70px 10px 70px;
  font-size: 16px;
  background: black;
  color: white !important;
  font-weight: 600 !important;
  width: 100%;
  &:hover {
    background: #2f2f2f;
  }
  &:disabled {
    background: #666666;
  }
`;

export const Section = styled.section`
  .container-form {
  }
  .container-checkout {
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
