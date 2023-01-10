import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  > section {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    .header {
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-bottom: 2rem;

      h1 {
      color: ${({ theme }) => theme.colors.primary.dark};
      font-size: 46px;
      text-align: center;
      text-transform: uppercase;
    }

    span {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      font-size: 18px;

      date {
        margin-left: 10px;
      }
    }
    }
    margin-bottom: 2rem;
    width: 100%;
    padding: 0 5rem;
    p {
      color: ${({ theme }) => theme.textLight};
      font-size: 18px;
      font-weight: 300;
      text-align: justify;
      text-indent: 2rem;
    }
    h2 {
      color: ${({ theme }) => theme.secondary};
      margin-top: 1rem;
      font-size: 2.5rem;
      font-weight: bold;
    }
    ul {
      margin-top: 1rem;
      li {
        color: ${({ theme }) => theme.textLight};
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
        margin-left: 1rem;
        list-style-type: circle;
      }
    }

    img {
      display: block;
      width: 50%;
      margin: 1rem auto;
      border-radius: 20px;
      border: 1px solid ${({theme}) => theme.colors.primary.dark};
    }
    @media (max-width: 700px) {
      padding: 0 2.5rem;
      p {
        font-size: 1rem;
      }
      h2 {
        font-size: 1.5rem;
      }
    }
  }
`;
