import styled from 'styled-components';

export const SectionContent = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  .box {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    padding: 2rem;
    height: 100%;

    div:nth-child(3n) {
      button {
        width: 100%;
      }
    }
    @media (max-width: 768px) {
      padding: 0;
      margin-bottom: 25px;
    }
  }

  .light {
    background-color: #ffffffcc;
    h1,
    p {
      color: black;
      font-weight: 700;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .contact {
    .text-content {
    }

    .form {
      padding: 2rem 2rem;
      background: black;
      border-radius: 10px;
      label {
        color: white;
      }
      input[type='text'],
      input[type='email'],
      input[type='tel'],
      textarea {
        background-color: black;
        color: white;
        font-weight: 500;
        border: none;
        border-radius: 5px;
        padding: 0.5rem;
        width: 100%;
        border-bottom: 2px solid white;
      }

      .send {
        button {
          width: 100%;
        }
      }
    }

    .fixed-toast {
      position: fixed !important;
      top: 10px !important;
      right: 10px !important;
      z-index: 9999;
    }

    .toasts {
      .bg-success {
        background: #52f97a;
        color: white;
        font-weight: 500;
      }

      .bg-danger {
        color: white;
        font-weight: 500;
      }
    }
  }

  .location {
    .maps {
      display: flex;
      height: 500px;
      position: relative;
      overflow: hidden;
      min-width: 581px;
      width: 100%;

      @media (min-width: 1024px) {
        min-width: 410px;
      }
    }
  }
`;
