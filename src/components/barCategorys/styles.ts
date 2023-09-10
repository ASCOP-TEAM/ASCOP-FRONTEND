import { Col } from 'react-bootstrap';
import styled from 'styled-components';

export const Container = styled(Col)<{ numberofcategories: number }>`
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0;

  margin-top: 1rem;
  margin-bottom: 1rem;

  .active {
    background: black;
    border: 2px solid #00ff94;

    span {
      color: white !important;
    }
  }

  @media (max-width: 426px) {
    overflow-y: auto;
    max-width: 243px;
    padding: 0 1rem;
  }

  @media (max-width: 374px) {
    overflow-y: auto;
    max-width: 243px;
    padding: 0 1rem;
  }

  @media (min-width: 641px) {
    overflow-y: ${(props) =>
      props.numberofcategories > 3 ? 'auto' : 'visible'};
    max-width: ${(props) => (props.numberofcategories > 3 ? '200px' : 'auto')};
  }

  ul {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    padding: 0;
    margin: 0;
    list-style: none;
    li {
      background: white;
      padding: 10px 20px 10px 20px;
      border-radius: 50px;
      border: 2px solid black;

      span {
        cursor: pointer;
        font-size: 15px;
        color: black !important;
        font-weight: 500;
      }
    }
  }
`;
