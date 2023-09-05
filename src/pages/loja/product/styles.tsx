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

  .product {
    .product-imgens {
      padding: 2rem;
      background: white;
      border-radius: 7px;
      box-shadow: 0px 2px 3px #cccccc, -5px -1px 10px 0px #f4f4f4;

      .galery {
        ul {
          list-style: none;
          gap: 0.5rem;
          padding: 0;

          li {
            padding: 0.2rem;
            border-radius: 10px;
            &:hover {
              border: 2px solid black;
            }
          }
        }
      }

      .thumbnail {
      }
    }

    .prodoct-infos {
      padding: 1rem;

      .category {
        ul {
          list-style: none;
          padding: 0;
          gap: 0.3rem;
          li {
            p {
              margin: 0;
              font-weight: 500;
              color: #8b8b8b;
            }
          }
        }
      }

      .title {
        h1 {
          margin: 0;
        }
        .icon {
          background: #8b8b8b;
          padding: 0.5rem;
          border-radius: 30px;
        }
      }

      .description {
        .title {
          p {
            color: #8b8b8b !important;
            font-weight: 100;
          }
        }
        .description-content {
          p {
            font-weight: bold !important;
          }
        }
      }

      .quatity {
        .action-product {
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
      }

      .buttons {
      }
    }
  }
`;
