import { Col } from 'react-bootstrap';
import styled from 'styled-components';

export const Container = styled(Col)`
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: space-between;
  align-items: center;

  margin-top: 1rem;
  margin-bottom: 1rem;
  ul {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    padding: 0;
    margin: 0;
    list-style: none;
    li {
      background: black;
      padding: 10px 20px 10px 20px;
      border-radius: 50px;
      border: 1px solid white;

      span {
        cursor: pointer;
        font-size: 15px;
        color: white !important;
        font-weight: 500;
      }
    }
  }
`;
