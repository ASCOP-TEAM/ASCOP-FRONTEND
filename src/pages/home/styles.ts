import styled from 'styled-components';

export const Container = styled.div`
  position: unset;
  display: flex;
  flex-direction: column;
  text-align: left;
  height: calc(100vh - var(--navbar-height));

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        to bottom,
        rgb(0 0 0 / 19%),
        rgba(0, 0, 0, 0.762)
      ),
      url(/homeback.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    z-index: -1;
  }

  .main {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    height: calc(100% - var(--navbar-height));
    justify-content: center;
    margin: 0 auto;
    padding-left: 2rem;
    padding-right: 2rem;
    width: 100%;
    .title {
      max-width: 550px;
      width: 100%;
      h1 {
        color: ${(props) => props.theme.colors.text.secondary};
        /*     font-size: 59px; */
        font-style: normal;
        line-height: normal;
      }
    }
    .text-wrapper {
      max-width: 491px;
      width: 100%;
      p {
        color: ${(props) => props.theme.colors.text.secondary};
      }
    }
  }
`;

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
      background-image: url(/homeback.png);
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      border-radius: 12px;
      width: 100%;
      height: 100%;
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
      background-image: url(/homeback.png);
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      border-radius: 12px;
      width: 100%;
      height: 100%;
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
    flex: 1;
    width: 100%;
    height: 50%;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
  }
`;
