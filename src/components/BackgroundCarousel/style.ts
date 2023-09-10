import styled from 'styled-components';

export const Container = styled.div`
  position: unset;
  display: flex;
  flex-direction: column;
  text-align: left;
  height: calc(100vh - var(--navbar-height));

  .swiper {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
  }

  .gradient-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(1deg, rgb(0 0 0 / 35%), rgb(0 0 0 / 30%));
    z-index: 2;
  }
`;

export const TextWrapper = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;

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
