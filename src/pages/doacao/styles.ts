import styled from 'styled-components';

export const SectionMain = styled.section`
  display: flex;
  flex-direction: column;
  text-align: left;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgb(0 0 0 / 15%), black),
      url(/cadastrosbg.jpeg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    z-index: -1;

    @media (max-width: 768px) {
      height: 200vh;
    }
  }
`;

export const SectionContent = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1rem 0;
  .box {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    padding: 0 3rem;
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

  .donate {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    .separator {
      display: flex;
      align-items: center;
      justify-content: center;
      hr {
        border: 1px solid black;
        width: 100px;
        margin: 0;
      }
      p {
        margin: 0;
        padding: 0 1rem;
      }
    }

    .vakinha-btn {
      font-family: 'Inter-Bold', Helvetica;
      font-weight: 700;

      background-color: #24ca68;
      color: white;
      padding: 22px 53px;
      border: none;
      cursor: pointer;
      border-radius: 10px;
      text-decoration: none;
    }
  }
`;
