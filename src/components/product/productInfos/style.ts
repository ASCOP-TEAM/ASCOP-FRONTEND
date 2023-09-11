import styled from 'styled-components';

export const Container = styled.div`
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
`;
