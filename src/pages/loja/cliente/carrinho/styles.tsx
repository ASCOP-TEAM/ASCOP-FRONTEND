import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  .list-products {
    display: flex;
    list-style: none;
    padding: 0;
    gap: 1rem;
    flex-direction: column;
    .select-products {
      display: flex;
      flex-direction: row;
      color: black;
      background: aqua;
      padding: 10px;
      border-radius: 20px;
      flex-wrap: nowrap;
      align-items: center;
      gap: 2rem;
      .image {
        height: 120px;
        width: 120px;
        background: red;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 20px;
      }

      .variables {
        ul {
          display: flex;
          flex-direction: row;
          list-style: none;
          padding: 0;
          gap: 2rem;
          li {
            cursor: pointer;
            background-color: #bfbfbf;
            padding: 10px;
            border-radius: 10px;
            border: 1px solid black;
          }
        }
      }
      div:nth-child(2n) {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        div {
          display: flex;
          flex-direction: row;
        }
      }
    }
  }

  .prices {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .items {
      ul {
        list-style: none;
        padding: 0;
        li {
          display: flex;
          gap: 2rem;
        }
      }
    }
    .rodape {
      button {
        width: 100%;
        padding: 10px 20px 10px 20px;
        color: white;
        background-color: #6adc39;
        font-weight: 500;
        border-radius: 15px;
      }
      .total {
        color: black;
      }
    }
  }
`;
