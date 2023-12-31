import { Col } from 'react-bootstrap';
import styled from 'styled-components';

export const Container = styled(Col)`
  max-width: 230px;
  width: 100%;

  .row {
    padding: 1rem;
    background-color: white;

    border-radius: 20px;
    background: #ffffff;
    box-shadow: -1px 13px 16px #bebebe, 5px -2px 16px #ffffff;

    .cart {
      display: flex;
      justify-content: flex-end;

      button {
        border: none;
        padding: 0.5rem;
        border-radius: 20px;
      }

      .isAdd {
        color: red;
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
        margin: 0 !important;
        li {
          cursor: pointer;
          p {
            color: #818181;
            font-weight: 600;
            margin: 0;
            padding: 0;
          }
        }
      }
    }
    .thumbnail {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 1rem auto;
    }
  }
`;
