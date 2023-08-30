import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  padding: 1rem;
  background: white;

  max-width: 341px;
  min-height: 309px;
  margin: 1rem;

  border-radius: 7px;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;

  .dowload {
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'Inter-Bold', Helvetica;
    font-weight: 700;
    background-color: #00ff94;

    color: white;
    padding: 13px 40px;
    border: none;
    cursor: pointer;
    gap: 1rem;

    a {
      text-decoration: none;
      font-weight: 700;
      color: white;
    }
  }
`;
