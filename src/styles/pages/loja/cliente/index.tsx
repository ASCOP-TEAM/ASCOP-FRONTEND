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
  padding: 3rem 0;
  .container-form {
    .title {
      padding: 0 1rem;
    }
    @media (max-width: 960px) {
      padding: 2rem 0;
    }
  }
  .container-checkout {
    position: sticky;
    top: calc(var(--navbar-height) + 20px);
    background: white;

    @media (max-width: 960px) {
      position: sticky;
      bottom: 0px;
      z-index: 10;
      background-color: #ffffff;
      border-radius: 25px 25px 0 0;
      box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.2);
    }
  }

  @media (max-width: 960px) {
    padding: 0;
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
