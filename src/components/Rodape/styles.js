import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  display: flex;
  margin: 10px 0 10px 0;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 599px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
  }

    button {
      background: none;
      border: none;
      color: ${({ theme }) => theme.colors.primary.dark};
      text-transform: uppercase;
      font-weight: 300;
      font-size: 1.2rem;
      margin-left: 5rem;

      svg {
        width: 2rem;
        height: 2rem;
        color: ${({ theme }) => theme.colors.primary.dark};
        transition: 0.2s all;

        &:hover{
            transform: scale(1.5);
            color: ${({ theme }) => theme.colors.primary.light};
          }
      }
    }
    @media (max-width: 599px) {
      button {
        svg {
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
    > section {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-right: 5rem;

      @media (max-width: 599px) {
        margin-right: 0;
      }

      svg {
        width: 2rem;
        height: 2rem;
        color: ${({ theme }) => theme.colors.primary.dark};
        transition: 0.5s;
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.colors.primary.light};
          transform: scale(1.5);
        }
      }
    }
    @media (max-width: 599px) {
      button {
        font-size: 0.9rem;
        margin-left: 0;
        padding-top: 0.5rem;
      }
      > section {
        gap: 0.2rem;
        svg {
          width: 1.5rem;
          height: 1.5rem;
          transition: 0.2s all;

        }
      }
    }
  }
`;
