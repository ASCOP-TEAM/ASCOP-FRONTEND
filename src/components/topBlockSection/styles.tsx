import styled from 'styled-components';

export const ContainerRoot = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  height: 320px;
  padding-left: 3rem;
  padding-right: 3rem;

  @media (max-width: 575.98px) {
    padding-left: 1rem;
    padding-right: 1rem;
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

export const LabelRoot = styled.div`
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ContainerTitle = styled.div`
  color: #fcfcfc;
  font-family: 'Inter-Bold', Helvetica;
  font-size: 27px;
  font-weight: 700;

  @media (max-width: 575.98px) {
    font-size: 20px;
    line-height: 20px;
  }
`;
export const ContainerParagrap = styled.div`
  p {
    color: #ffffff;
    font-family: 'Inter-Regular', Helvetica;
    font-size: 19px;
    font-weight: 400;

    max-width: 700px;

    @media (max-width: 575.98px) {
      font-size: 13px;
      max-width: 100%;
    }
  }
`;
