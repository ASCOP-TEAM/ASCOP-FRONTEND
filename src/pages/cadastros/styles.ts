import styled from 'styled-components';

export const SectionContent = styled.section`
  display: flex;
  height: calc(100vh - var(--navbar-height));
  align-items: center;
  justify-content: center;
  width: 100%;

  .box {
    z-index: 1;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    div:nth-child(3n) {
      button {
        width: 100%;
      }
    }
    @media (max-width: 768px) {
      padding: 1rem;
      margin-bottom: 25px;
    }
  }

  .dark {
    background-color: #000000b8;
    h1,
    p {
      color: white;
    }
  }
  .light {
    background-color: #ffffffcc;
    h1,
    p {
      color: black;
      font-weight: 700;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
  }

  .gradient-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 145vh;
    background: linear-gradient(to bottom, rgb(0 0 0 / 0%), rgb(0 0 0));
    z-index: 2;
  }
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;
