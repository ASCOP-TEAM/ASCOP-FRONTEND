import styled from 'styled-components';

const BaseSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  min-height: 100vh;
  overflow: hidden;

  @media (min-width: 1248px) {
    padding: 1rem 0;
  }
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
  justify-content: space-evenly;

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
    padding: 1rem;

    ul {
      list-style: none;
      padding: 0;
    }
    h4 {
      font-size: 20px;
    }
    p {
      font-size: 16px;
      margin: 5px 0;
    }
    a {
      color: #0000ff;
      text-decoration: none;
      font-size: 16px;
    }
  }

  .maps {
    height: 50%;
    width: 100%;
  }
`;

export const styleHome = {
  SectionFind,
};
