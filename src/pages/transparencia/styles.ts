import styled from 'styled-components';

export const SectionContent = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1rem 0;
  .box {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    /*   justify-content: space-evenly; */
    padding: 2rem;
    /* background: red; */
    min-height: 560px;
    height: 100%;

    div:nth-child(3n) {
      button {
        width: 100%;
      }
    }
    @media (max-width: 768px) {
      padding: 1rem;
      margin-bottom: 25px;
    }
  }

  .dark {
    background-color: #000000b8;
    h1,
    p {
      color: white;
    }
  }
  .light {
    background-color: transparent;
    h1,
    p {
      color: black;
      font-weight: 700;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
  .pages {
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
  }
`;
