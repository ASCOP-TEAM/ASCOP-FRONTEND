import styled from 'styled-components';

export const Section = styled.section`
  padding: 2.5rem 0;
  .bar {
    display: flex;
    flex-direction: row;
    height: 100%;
    align-items: center;
    justify-content: space-between;

    .voltar {
      button {
        padding: 10px 20px 10px 20px;
        color: white;
        background-color: #000000;
        font-weight: 500;
        border-radius: 15px;
      }
    }
  }
`;
