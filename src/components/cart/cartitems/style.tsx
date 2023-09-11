import styled from 'styled-components';

export const Li = styled.li`
  padding: 1rem 0;
  margin-bottom: 1rem;
  background-color: #ffffff;
  padding: 1rem;
  box-shadow: -2px 3px 9px 3px #bebebe, -6px -10px 60px #ffffff;
  border-radius: 8px;
  .img-product {
    display: flex;
    align-items: center;
    margin-right: 2rem;
    @media (max-width: 475px) {
      width: 75px;
    }
  }
  .action-product {
    margin-right: 2rem;
    h5 {
      margin: 0;
    }
    background: white;
    width: 130px;
    padding: 6px;
    border-radius: 30px;
    button {
      background: none;
      border: none;
      padding: 0;
    }
  }

  .sizes,
  .colors {
    ul {
      list-style: none;
      display: flex;
      gap: 1.3rem;
      padding: 0;
      align-items: center;
    }
  }
  @media (max-width: 974px) {
    flex-direction: column;
  }
`;
