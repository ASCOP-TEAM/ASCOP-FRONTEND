import styled from 'styled-components';

export const Container = styled.div`
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

    .cart {
      cursor: pointer;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      .accout {
        position: absolute;
        left: 0;
        top: 0;
        background: red;
        color: white;
        padding: 1px 5px 1px 5px;
        margin: 0;
        border-radius: 50%;
      }
      .icon-cart {
        background: black;
        padding: 10px;
        border-radius: 100px;
      }
    }
  }

  .prodoct-infos {
    .sizes {
      ul {
        display: flex;
        list-style: none;
        flex-direction: row;
        justify-content: center;
        gap: 2rem;
        height: 100%;
        li {
          cursor: pointer;
          color: black;
          background-color: #cfd1d1;
          border: 1px solid black;
          border-radius: 10px;
          padding: 10px 15px 10px 15px;
        }
      }
    }

    .quatity {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      color: black;
      .addandremove {
        display: flex;
        gap: 1rem;
        button {
          cursor: pointer;
          font-size: 20px;
          color: black;
        }
      }
    }

    .buttons {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 3rem;

      button {
        padding: 10px 20px 10px 20px;
        color: white;
        background-color: #6adc39;
        font-weight: 500;
        border-radius: 15px;
      }
    }
  }
`;
