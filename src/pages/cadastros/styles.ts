import styled from 'styled-components';

export const SectionContent = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1rem 0;

  .box {
    z-index: 1;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    padding: 2rem;
    /* background: red; */
    min-height: 560px;
    height: 100%;

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
  }

  .gradient-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgb(0 0 0 / 0%), rgb(0 0 0 / 52%));
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
