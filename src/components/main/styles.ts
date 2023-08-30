import styled from 'styled-components';

export const StyledMain = styled.main`
  margin-left: auto;
  margin-right: auto;
  min-width: min-content;
  max-width: 56rem;
  min-height: var(--layout-content-min-h);
  padding: var(--layout-content-p);

  @media (min-width: 640px) {
    padding: var(--layout-content-p-sm);
  }

  @media (min-width: 1024px) {
    padding-left: 0;
    padding-right: 0;
  }
`;
