import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 2rem;

  header {
    width: 100%;
    height: 126px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: ${({theme}) => theme.colors.primary.background};
    margin-bottom: 2rem;

    > span {
      width: 1216px;
      display: flex;
      align-items: center;
      margin: 0 auto;
       a {
        color: ${({theme}) => theme.colors.primary.lighter};
        transition: 0.2s all;
       }
       a:hover {
        color: ${({theme}) => theme.colors.gray[200]};
       }
    }

    .buttonLoadMore {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
    }
  }

  section {
    max-width: 1216px;
    margin-top: 2rem;
    margin-bottom: 1rem;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1.5rem;

    @media(max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
      }
      @media(max-width: 550px) {
        grid-template-columns: 1fr;
      }
  }
`;

export const ContentGalery = styled.div`
  margin: 0 auto;

   > button {
    background: transparent;
    border: none;
    opacity: 0.6;
    transition: 0.2s all;

    &:hover {
      opacity: 1;
    }

    img {
      width: 200px;
      height: 200px;
      border: 1px solid ${({theme}) => theme.colors.primary.main};
      border-radius: 8px;
    }
   }
  `;
