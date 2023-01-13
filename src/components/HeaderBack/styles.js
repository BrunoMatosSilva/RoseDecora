import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 126px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: ${({theme}) => theme.colors.primary.background};

  @media (max-width: 599px) {
      height: 50px;
    }

  > span {
    margin-left: 5rem;

    @media (max-width: 599px) {
      margin-left: 1rem;
    }
     a {
      color: ${({theme}) => theme.colors.primary.lighter};
      transition: 0.2s all;
     }
     a:hover {
      color: ${({theme}) => theme.colors.gray[200]};
     }
  }
`;
