import { Offcanvas } from 'react-bootstrap';
import styled from 'styled-components';

export const HamburgerMenuWrapper = styled.div`
  cursor: pointer;
`;

export const InputCheckbox = styled.input`
  display: none;
`;

export const LabelToggle = styled.label`
  position: relative;
  width: 30px;
  cursor: pointer;
  margin: auto;
  display: block;
  height: calc(4px * 3 + 4px * 2);
`;

export const Bar = styled.div<{ txColor?: string }>`
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  border-radius: calc(4px / 2);
  background: ${(props) => (props.txColor ? props.txColor : 'white')}!important;
  color: inherit;
  opacity: 1;
  transition: none 0.35s cubic-bezier(0.5, -0.35, 0.35, 1.5) 0s;
`;

export const BarTop = styled(Bar)<{ isOpen: boolean; txColor?: string }>`
  bottom: ${({ isOpen }) =>
    isOpen ? 'calc(50% - -2px - 1px)' : 'calc(50% + 6px + 4px / 2)'};
  transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'none')};
  transition-property: bottom, margin, transform;
  transition-delay: ${({ isOpen }) =>
    isOpen
      ? 'calc(0s + 0.35s * .3),calc(0s + 0.35s * 1.3),calc(0s + 0.35s * 1.3)'
      : 'calc(0s + 0.35s),0s,0s'};
`;

export const BarMiddle = styled(Bar)<{ isOpen: boolean; txColor?: string }>`
  top: calc(50% - 4px / 2);
  opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
  transition-property: top, opacity;
  transition-duration: ${({ isOpen }) => (isOpen ? '0.35s,0s' : 'none')};
  transition-delay: calc(0s + 0.35s * 1.3), calc(0s + 0.35s * 1.3);
`;

export const BarBottom = styled(Bar)<{ isOpen: boolean; txColor?: string }>`
  top: ${({ isOpen }) =>
    isOpen ? 'calc(50% - 4px / 2)' : 'calc(50% + 5px + 4px / 2)'};
  transition-property: top, transform;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'none')};
  transition-delay: ${({ isOpen }) =>
    isOpen ? 'calc(0s + 0.35s * 1.3),calc(0s + 0.35s * 1.3)' : '0s'};
`;

/* menu links */

interface Props {
  txColor?: string;
  bgColor?: string;
}

export const ContainerMenuLinks = styled(Offcanvas)`
  top: calc(0px + var(--navbar-height)) !important;
  height: 100vh !important;
  background: ${(props: Props) =>
    props.bgColor ? props.bgColor : 'black'}!important;

  .is-Active {
    display: flex !important;
    transform: translateX(0);
    left: 0;
    padding: 0;
  }

  ul {
    list-style: none;
    display: none !important;
    flex-direction: column;
    align-items: center;
    align-content: center;
    width: 100%;
    height: calc(100% - var(--navbar-height));
    position: fixed;
    top: var(--navbar-height);
    left: 100%;
    gap: 2rem;
    justify-content: center;
    background: ${(props: Props) =>
      props.bgColor ? props.bgColor : 'black'}!important;
    transition: transform 0.3s ease-in-out;
    li {
      a {
        color: ${(props) => (props.txColor ? props.txColor : 'white')};
        font-size: 20px !important;
        text-decoration: none;
        font-weight: 700;
      }
    }
  }
`;
