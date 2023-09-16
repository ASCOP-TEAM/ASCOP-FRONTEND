import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: ${(props) => props.theme.colors.text};

  @media (min-height: 641px) {
    padding: 0 1rem;
  }

  .links {
    display: inline;
    color: #ffffff80 !important;
    font-size: 17px;
    font-weight: 500;
    -webkit-text-decoration: none;
    text-decoration: none;
    max-width: 200px;

    p {
      font-weight: 500;
      font-size: 17px;
      margin: 0;
    }
  }
`;

export const Rodape = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;

  p {
    color: ${(props) => props.theme.colors.text.secondary};
  }
  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(to right, transparent, #ffffff69, transparent);
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }
  @media (max-width: 575.98px) {
    p {
      font-size: 13px;
    }
  }
`;
