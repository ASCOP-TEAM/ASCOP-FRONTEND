import styled from 'styled-components';

// Defina os estilos do componente usando "styled-components"
export const StyledIcon = styled.div<{
  color?: string;
  view: string;
  isSelected: boolean;
}>`
  color: ${(props) => (props.color ? props.color : 'gray')};
  font-size: ${(props) => (props.view === 'large' ? '32px' : '16px')};
  cursor: pointer;
`;
