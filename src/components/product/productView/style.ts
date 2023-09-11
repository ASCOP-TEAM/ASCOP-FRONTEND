import { Col } from 'react-bootstrap';
import styled from 'styled-components';

export const Container = styled(Col)`
  padding: 1rem;
  background: white;
  border-radius: 7px;
  box-shadow: 0px 2px 3px #cccccc, -5px -1px 10px 0px #f4f4f4;
  width: 100%;

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
        &:hover {
          border: 2px solid black;
        }
      }
    }
  }

  .thumbnail-container {
    width: 100%;
    max-width: 366px;
    height: auto;
    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }

    @media (min-width: 1499px) {
      max-width: 432px;
    }
  }
`;
