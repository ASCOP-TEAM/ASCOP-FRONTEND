import styled from 'styled-components';

export const Container = styled.div`
  transition: transform 0.3s ease-in-out;
  transform: translateY(0);
  width: 100%;
  height: 100%;
  background-color: white;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;

  main {
    padding: 1.5em 0;
  }

  :root {
    --hue: 223;
    --bg: hsl(var(--hue), 10%, 90%);
    --fg: hsl(var(--hue), 10%, 10%);
    --themeTrans: 0.3s;
    font-size: calc(16px + (24 - 16) * (100vw - 320px) / (1280 - 320));
  }

  .pl {
    width: 9em;
    height: 9em;
  }

  @media (max-width: 768px) {
    .pl {
      width: 8em; /* Ajuste o tamanho para telas menores */
      height: 7em;
    }
  }

  /* Media query para telas ainda menores */
  @media (max-width: 480px) {
    .pl {
      width: 7em; /* Ajuste o tamanho para telas ainda menores */
      height: 7em;
    }
  }

  .pl__ring,
  .pl__worm1,
  .pl__worm2,
  .pl__worm3 {
    animation-duration: 4s;
    animation-iteration-count: infinite;
  }
  .pl__ring {
    stroke: hsla(var(--hue), 10%, 10%, 0.1);
    transition: stroke var(--themeTrans);
  }
  .pl__worm1 {
    animation-name: worm1;
  }
  .pl__worm2 {
    animation-name: worm2;
    transform-origin: 32px 88px;
  }
  .pl__worm3 {
    animation-name: worm3;
    transform-origin: 144px 88px;
  }

  /* Dark theme */
  @media (prefers-color-scheme: dark) {
    :root {
      --bg: hsl(var(--hue), 10%, 10%);
      --fg: hsl(var(--hue), 10%, 90%);
    }
    .pl__ring {
      stroke: #00000017;
    }
  }

  /* Animations */
  @keyframes worm1 {
    from {
      animation-timing-function: ease-out;
      stroke-dashoffset: 43.98;
    }
    12.5% {
      animation-timing-function: ease-in-out;
      stroke-dashoffset: -131.95;
    }
    25% {
      animation-timing-function: ease-in;
      stroke-dashoffset: 0;
    }
    37.5%,
    50% {
      animation-timing-function: ease-out;
      stroke-dashoffset: -175.93;
    }
    62.5% {
      animation-timing-function: ease-in-out;
      stroke-dashoffset: 0;
    }
    75% {
      animation-timing-function: ease-in;
      stroke-dashoffset: -131.95;
    }
    87.5%,
    to {
      stroke-dashoffset: 43.98;
    }
  }
  @keyframes worm2 {
    from,
    35.5% {
      animation-timing-function: linear;
      stroke-dasharray: 0 40 0 44;
      visibility: hidden;
      transform: translate(0, 0) rotate(0);
    }
    37.5% {
      animation-timing-function: ease-out;
      stroke-dasharray: 0 40 44 0;
      visibility: visible;
      transform: translate(0, 0) rotate(0);
    }
    47.5% {
      animation-timing-function: ease-in;
      stroke-dasharray: 0 4 40 40;
      visibility: visible;
      transform: translate(0, -80px) rotate(360deg);
    }
    50% {
      animation-timing-function: linear;
      stroke-dasharray: 0 4 40 40;
      visibility: visible;
      transform: translate(0, -36px) rotate(360deg);
    }
    52.5%,
    to {
      stroke-dasharray: 0 42 0 42;
      visibility: hidden;
      transform: translate(0, 12px) rotate(360deg);
    }
  }
  @keyframes worm3 {
    from {
      animation-timing-function: linear;
      stroke-dasharray: 0 4 40 40;
      visibility: visible;
      transform: translate(0, -36px) rotate(0);
    }
    2.5% {
      animation-timing-function: linear;
      stroke-dasharray: 0 42 0 42;
      visibility: hidden;
      transform: translate(0, 12px) rotate(0);
    }
    85.5% {
      animation-timing-function: linear;
      stroke-dasharray: 0 40 0 44;
      visibility: hidden;
      transform: translate(0, 0) rotate(0);
    }
    87.5% {
      animation-timing-function: ease-out;
      stroke-dasharray: 0 40 44 0;
      visibility: visible;
      transform: translate(0, 0) rotate(0);
    }
    97.5% {
      animation-timing-function: ease-in;
      stroke-dasharray: 0 4 40 40;
      visibility: visible;
      transform: translate(0, -80px) rotate(-360deg);
    }
    to {
      stroke-dasharray: 0 4 40 40;
      visibility: visible;
      transform: translate(0, -36px) rotate(-360deg);
    }
  }
`;
