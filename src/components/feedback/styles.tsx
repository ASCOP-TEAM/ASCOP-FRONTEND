import styled from 'styled-components';

export const Button = styled.button`
  padding: 10px 70px 10px 70px;
  font-size: 16px;
  background: black;
  color: white !important;
  font-weight: 600 !important;
  width: 100%;
  &:hover {
    background: #2f2f2f;
  }
  &:disabled {
    background: #666666;
  }
`;
