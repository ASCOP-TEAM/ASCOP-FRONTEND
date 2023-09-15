import { Col } from 'react-bootstrap';
import styled from 'styled-components';

export const Container = styled(Col)`
  height: 100%;

  .offcanvas > .offcanvas-header > .btn-close {
    width: 2em;
    height: 2em;
    font-size: 15px !important;
  }

  .product-list {
    overflow-y: auto;
    margin: auto 0.5rem;
    padding: 0;

    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }

    .product {
      padding: 1rem 0;
      margin-bottom: 1rem;
      .img-product {
        display: flex;
        align-items: center;
        margin-right: 1rem;
      }
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
  }

  .valototal {
    position: sticky;
    bottom: 20px;
    background-color: #fff;
    box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
    padding: 0.5rem;
  }
`;

export const Cart = styled(Col)`
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  .icon-cart {
    background: black;
    padding: 10px;
    border-radius: 100px;
    color: white;
  }

  .accout {
    position: absolute;
    left: 10px;
    top: 0;
    background: red;
    color: white;
    padding: 1px 5px 1px 5px;
    margin: 0;
    border-radius: 50%;
  }
`;
