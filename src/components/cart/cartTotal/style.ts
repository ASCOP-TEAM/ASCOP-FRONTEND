import styled from 'styled-components';

export const Container = styled.div`
  position: sticky;
  top: calc(var(--navbar-height) + 20px);
  padding: 1rem;
  z-index: 1;
  max-height: calc(100vh - 100px);
  overflow-y: auto;
  overflow: hidden;
  bottom: 20px;

  .items-info {
    background-color: #ffffff;
    padding: 10px;
    ul {
      list-style: none;
      padding: 0;
      li {
        display: flex;
        gap: 2rem;
      }
    }
  }

  .rodape {
    .total {
      color: black;
    }
  }

  @media (max-width: 974px) {
    position: sticky;
    bottom: 0px;
    padding: 0;
    z-index: 10;
    background-color: #ffffff;
    border-radius: 25px 25px 0 0;
    box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.2);
  }
`;
