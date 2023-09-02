import styled from 'styled-components';

export const Section = styled.section`
  padding: 2rem 0;
  .list-products {
    display: flex;
    list-style: none;
    padding: 0;
    gap: 1rem;
    flex-direction: column;

    .product {
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

      .sizes {
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
    }
  }

  .info-conatiner {
    position: sticky;
    bottom: 0;

    .info-products {
      position: sticky;
      top: calc(var(--navbar-height) + 20px);
      padding: 1rem;
      z-index: 1;
      max-height: calc(100vh - 100px);
      overflow-y: auto;
      overflow: hidden;
      bottom: 20px;

      .items-info {
        background-color: #ffffff;
        padding: 1rem;
        box-shadow: -2px 3px 9px 3px #bebebe, -6px -10px 60px #ffffff;

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
        .total {
          color: black;
        }
      }

      @media (max-width: 974px) {
        padding: 0;
        box-shadow: -2px -20px 20px 1px #49494954;
      }
    }
  }
`;
