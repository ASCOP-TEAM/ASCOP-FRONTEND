import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .pagination {
    .active > .page-link,
    .page-link.active {
      color: white;
      z-index: 3;
      background-color: #00ff94 !important;
      border-color: #00ff94 !important;
    }

    .page-link,
    .page-links {
      color: #00ff94;

      &:focus {
        box-shadow: 0 0 0 0.25rem rgb(3 255 149 / 30%);
      }
    }
  }
`;
