import styled from 'styled-components';

export const Section = styled.section`
  position: relative;

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
