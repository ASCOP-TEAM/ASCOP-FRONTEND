import styled from 'styled-components';

export const StyledFooter = styled.footer`
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: black;
  color: ${(props) => props.theme.colors.text};

  .block-container {
    padding: 5rem 2rem;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    .block-links {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
    .block-contact {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      flex: 0 0 100px;
      justify-content: center;
    }
  }
`;

export const StyledFooterMobile = styled(StyledFooter)`
  height: 95vh;
  .block-container-mobile {
    padding: 1rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    .block-links-mobile {
      padding-top: 2rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }

  @media (max-height: 641px) {
    height: auto;
  }
`;

export const StyledFooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
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
