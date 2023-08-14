import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  height: var(--navbar-height);
  justify-content: space-between;
  padding-left: 2rem;
  padding-right: 2rem;
  width: 100%;

  .navbar__left {
    display: flex;
    gap: 1rem;
    align-items: center;
    border: 0px none;

    .text-wrapper {
      color: #ffffff;
      font-family: 'Inter-Bold', Helvetica;
      font-size: 30px;
      font-weight: 700;
      letter-spacing: 0;
      line-height: normal;
      white-space: nowrap;
    }
  }

  .navbar__right {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 0;
    ul {
      display: flex;
      margin: 0;

      li {
        display: block;
        margin: 0 0.3rem 0 0.3rem;

        a {
          color: ${(props) => props.theme.colors.link};
          font-family: 'Inter-Bold', Helvetica;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0;
          line-height: normal;
          font-style: none;
          white-space: nowrap;
          text-decoration: none;
          &:hover {
            color: #cfcfcf;
          }
        }
      }
    }
  }
`;
