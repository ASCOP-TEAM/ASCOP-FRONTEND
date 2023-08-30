import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 2rem;
  background-color: white;
  box-shadow: 0px 4px 4px #00000040;
  border-radius: 13px;
  max-width: 300px;
  width: 100%;
  height: 320px;

  .icon {
    svg {
      width: 60px;
      height: 60px;
    }
  }
`;
