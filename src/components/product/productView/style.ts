import { Col } from 'react-bootstrap';
import styled from 'styled-components';

export const Container = styled(Col)`
  border-radius: 7px;
  width: 100%;
  justify-content: space-around;

  .galery-list-container {
    max-height: 437px;
    overflow-y: auto;
    position: relative;
    width: 50px;
    height: 100%;

    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }

    ul {
      list-style: none;
      gap: 0.5rem;
      padding: 0;
      margin: 0;

      li {
        padding: 0.2rem;
        border-radius: 10px;
        border: 1px solid black;
        background-color: white;
        &:hover {
          border: 2px solid black;
        }
      }
    }
  }

  .thumbnail-container {
    width: 100%;
    background-color: white;
    box-shadow: 1px 1px 8px #d0d0d0, -5px -5px 8px #f0f0f0;

    max-width: 400px;
    height: 500px;
    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
  }
`;
