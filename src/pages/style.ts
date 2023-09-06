import styled from 'styled-components';

const BaseSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  min-height: 100vh;
  overflow: hidden;
`;

export const SectionAbout = styled(BaseSection)`
  flex-direction: row;
  justify-content: space-evenly;

  .text-about {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h1 {
      margin: 0;
    }

    @media (max-width: 768px) {
      padding-bottom: 25px;
    }
  }

  .image-about {
    height: 500px;

    .img {
      position: relative;
      width: 100%;
      height: 100%;
      span {
        border-radius: 12px;
      }
    }

    @media (max-width: 768px) {
      height: 150px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SectionValues = styled(BaseSection)`
  flex-direction: column;
  justify-content: center;

  .main-text {
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      h1 {
        /* font-size: 59px; */
      }
    }

    .text-wrapper {
      max-width: 358px;
      width: 100%;
      text-align: center;
      p {
        font-weight: 500;
      }
    }
  }

  .cards {
    display: flex;
    justify-content: center;
    gap: 2rem;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const SectionBecause = styled(BaseSection)`
  flex-direction: row;
  justify-content: space-around;

  .img-because {
    height: 500px;

    .img {
      position: relative;
      width: 100%;
      height: 100%;
      span {
        border-radius: 12px;
      }
    }

    @media (max-width: 768px) {
      height: 150px;
      width: 100%;
      padding-bottom: 25px;
    }
  }

  .text-because {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;

    div:nth-child(3n) {
      @media (max-width: 768px) {
        button {
          width: 100%;
        }
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SectionFind = styled(BaseSection)`
  height: 100vh;
  flex-direction: column;
  justify-content: center;

  .infos {
    display: flex;
    flex-direction: row;
    gap: 2rem;

    .list {
      ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        list-style: none;
        padding: 0;

        li {
          display: flex;
          flex-direction: column;
          p,
          h4 {
            margin: 0;
          }
        }
      }
    }
  }

  .maps {
    height: 50%;
    width: 100%;
  }
`;
