import styled from 'styled-components';

export const Container = styled.div`
  h4 {
    margin: 0;
  }

  display: flex;
  flex-direction: row;
  color: black;
  gap: 1rem;
  align-items: center;
  width: 100%;
  input {
    width: 100%;
    padding: 1rem;
    border-radius: 20px;
    background-color: white;
  }

  .form-range::-webkit-slider-thumb {
    background: #00ff94;
  }
`;
