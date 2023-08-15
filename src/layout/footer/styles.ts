import styled from 'styled-components';

export const StyledFooter = styled.footer`
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
  background-color: black /* ${(props) => props.theme.colors.background} */;
  color: ${(props) => props.theme.colors.text};

  .block-container {
    display: flex;
    align-items: center;
    gap: 3rem;
    padding-left: 2rem;
    padding-right: 2rem;
    justify-content: center;

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

export const StyledFooterMobile = styled.footer`
  .block-container-mobile {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    .block-links-mobile {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
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
