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
  }
`;


