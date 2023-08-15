import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const ContainerTitle = styled.div`
  .text-wrapper {
    color: #ffffff;
    font-family: 'Inter-Bold', Helvetica;
    font-size: 24px;
    font-weight: 700;
    @media (max-width: 575.98px) {
      font-size: 19px;
    }
  }
`;

export const ContainerLinks = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
  a {
    display: inline;
    width: 100px;
    height: 100px;
    color: #ffffff80 !important ;
    font-family: 'Inter-Medium', Helvetica !important;
    font-size: 17px;
    font-weight: 500;
    text-decoration: none;
    max-width: 200px;
  }
`;

export const ContainerIcon = styled.div`
  border: 3px solid white;
  padding: 15px;
  border-radius: 50%;
`;
export const ContainerContact = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  a {
    font-size: 14px;
  }
`;
