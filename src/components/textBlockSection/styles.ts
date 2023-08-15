import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (max-width: 575.98px) {
    gap: 1rem;
  }
`;

export const Title = styled.div`
  .text-wrapper {
    color: #ffffff;
    font-family: 'Inter-Bold', Helvetica;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 1rem;
  }
`;

export const Paragrap = styled.div`
  .text-wrapper {
    p {
      color: #ffffff80;
      font-family: 'Inter-Medium', Helvetica;
      font-size: 15px;
      max-width: 400px;
    }
  }
`;

export const Social = styled.div`
  .label {
    .text-wrapper {
      color: #ffffff;
      font-family: 'Inter-Bold', Helvetica;
      font-size: 24px;
      white-space: nowrap;
    }
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    gap: 2rem;
    li {
      text-decoration: none;
      list-style: none;
      span {
        font-size: 1rem;
        color: #ffffff;
        &:nth-child(4n + 1) {
          font-size: 1.4rem !important;
        }
      }
    }
  }
`;

export const Button = styled.div``;
