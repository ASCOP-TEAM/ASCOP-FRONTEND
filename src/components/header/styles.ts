import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  white-space: nowrap;
  border-bottom-width: 1px;

`;

export const Placeholder = styled.div`
  height: calc(var(--navbar-height) + 1px);
`;
