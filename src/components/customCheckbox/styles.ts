import styled, { keyframes } from 'styled-components';

const likeEffect = keyframes`
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
`;

const dislikeEffect = keyframes`
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
`;

export const Container = styled.div`
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 20px;
  user-select: none;
  transition: 100ms;
  &:hover {
    transform: scale(1.1);
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    top: 0;
    left: 0;
    height: 1.5em;
    transition: 100ms;
    animation: ${dislikeEffect} 400ms ease;

    svg {
      width: 100%;
      height: 100%;

      path {
        fill: none;
        stroke-width: 20px;
        stroke: #fff;
      }
    }
  }

  input:checked ~ .checkmark path {
    fill: #ff5353;
    stroke-width: 0;
  }

  input:checked ~ .checkmark {
    animation: ${likeEffect} 400ms ease;
  }
`;
