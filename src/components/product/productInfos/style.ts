import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  .categorys {
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
    h2 {
      margin: 0;
    }
    .icon {
      background: #8b8b8b;
      padding: 0.5rem;
      border-radius: 30px;
    }
  }

  .price {
    h3 {
      font-weight: 200 !important;
      color: #000000cc;
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

  .colors,
  .sizes {
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
    p {
      margin: 0;
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
    @media (max-width: 1141px) {
      button {
        margin-bottom: 0.5rem;
      }
    }
  }
`;
