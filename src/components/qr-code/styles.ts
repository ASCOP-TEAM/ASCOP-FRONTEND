import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;

  .img-qr {
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      padding: 1rem;
      border-radius: 25px;
      border: 1px solid black;
    }
  }

  .clip-border {
    padding: 1rem 0;

    .bg {
      display: flex;
      align-items: center;
      justify-content: center;

      background: #eeeff1;
      padding: 10px;
      border-radius: 10px;
      gap: 1rem;

      p {
        max-width: 480px;
        margin: 0 auto;
        white-space: nowrap;
        overflow: hidden;
        cursor: pointer;
      }

      .icon {
        svg {
          cursor: pointer;
        }
      }
    }
  }

  .error-qr {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .loader {
      width: 180px;
      height: 180px;
      background-color: #fdfefe;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 12px;
      box-shadow: 4px 4px 20px #bebebe, -6px -6px 12px #ffffff;
    }
  }
`;
