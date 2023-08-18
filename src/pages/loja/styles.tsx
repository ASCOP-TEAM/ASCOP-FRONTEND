import styled from 'styled-components';

export const Section = styled.section`
  position: relative;

  /* categorias  👇*/
  .categorias {
    display: flex;
    flex-direction: row;
    height: 100%;
    justify-content: space-between;
    align-items: center;

    .catgorys {
      margin-top: 1rem;
      margin-bottom: 1rem;
      ul {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        padding: 0;
        margin: 0;
        list-style: none;
        li {
          background: black;
          padding: 10px 20px 10px 20px;
          border-radius: 50px;
          border: 1px solid white;

          span {
            cursor: pointer;
            font-size: 15px;
            color: white !important;
            font-weight: 500;
          }
        }
      }
    }

    .filter {
      display: flex;
      flex-direction: row;
      color: black;
      gap: 1rem;

      input {
        max-width: 200px;
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

  /* produtos 👇 */
  .main-card {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    .card {
      display: flex;
      position: relative;
      flex-direction: column;
      align-items: center;
      padding: 19px;
      background: #4500ff;
      border-radius: 13px;

      .cart {
        cursor: pointer;
        position: absolute;
        top: 0;
        left: 0;
        padding: 13px;

        svg {
          cursor: pointer;
        }
      }

      .title {
        font-size: 20px;
        font-weight: 500;
        color: red;
        margin: 0;
      }

      .descripition {
        p {
          font-size: 20px;
          font-weight: 500;
          max-width: 128px;
          text-align: center;
        }
      }
      .submit {
        width: 100%;
        button {
          width: 100%;
          height: 40px;
          border-radius: 10px;
          background-color: #36ff64;
          color: white;
          font-weight: 400;
        }
      }
    }
  }

  /* visão dos produtos no carrinho 👇 */
`;

export const CartShop = styled.div<{ isOpen: boolean }>`
  position: fixed;
  display: ${(props) => (props.isOpen ? 'flex' : 'none')}!important;
  background: #040404;
  width: 60%;
  height: calc(100% - var(--navbar-height));
  top: calc(var(--navbar-height) + 1px);
  right: 0;
  z-index: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;

  .close {
    width: 100%;
    display: flex;
    justify-content: space-between;
    button {
      width: 20%;
      height: 40px;
      border-radius: 10px;
      background-color: #36ff64;
      color: white;
      font-weight: 400;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    list-style: none;
    padding: 4rem;
    gap: 2rem;
    max-width: 100%;
    max-height: 398px;
    overflow-y: auto;
    margin-top: 1rem;
    margin-bottom: 1rem;

    li {
      display: flex;
      width: auto;
      justify-content: center;

      gap: 1rem;
      background: #4d4d4d;
      padding: 19px;
      border-radius: 20px;
      align-items: center;
      div:nth-child(1n) {
        display: flex;
        gap: 1rem;
      }
    }
  }

  .valototal {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    div:nth-child(1n) {
      button {
        width: 100%;
        height: 40px;
        border-radius: 10px;
        background-color: #36ff64;
        color: white;
        font-weight: 400;
      }
    }
  }
`;
