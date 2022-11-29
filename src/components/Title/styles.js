import styled from 'styled-components';

export const Container = styled.div`

  >h1 {
      font-size: 46px;
      text-transform: uppercase;
      font-weight: 800;

      strong {
        font-weight: 800;
        color: ${({ theme }) => theme.colors.primary.main};
      }
    }

    img {
    margin-bottom: 24px;
  }

`;
