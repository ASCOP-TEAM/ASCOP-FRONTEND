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
    padding: 1rem;
    box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.2);
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
    padding: 0;
    box-shadow: -2px -20px 20px 1px #49494954;
  }
`;
