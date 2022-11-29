import styled from 'styled-components';

export const Container = styled.div`
  background: ${({theme}) => theme.colors.primary.background};
  width: 100%;
  height: 126px;
  padding-left: 50px;
  padding-right: 50px;
`;

export const Content = styled.div`
  max-width: 1216px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  ul {
    display: flex;
    align-items: center;
    gap: 2rem;

    li {
      list-style-type: none;

      a {
        text-decoration: none;
        color: ${({theme}) => theme.colors.gray[300]};
        font-size: 16px;
        transition: all 0.2;

        &:hover {
          font-weight: 600;
        }
      }
    }
  }
`;
