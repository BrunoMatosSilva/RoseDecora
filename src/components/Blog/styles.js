import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  max-width: 1216px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding-top: 32px;
`;

export const ContainerPosts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 28px;
  margin-top: 48px;
`;

export const CardPost = styled.div`
  flex: 1 0 20%;
  min-height: 250px;
  border-radius: 8px;
  border: 1px solid ${({theme}) => theme.colors.primary.main};

  img {
    width: 100%;
    height: 180px;
    border-radius: 8px 8px 0px 0px;
  }

  p {
    color: ${({theme}) => theme.colors.primary.dark};
    font-weight: 600;
    font-size: 16px;
    margin-left: 14px;
    margin-right: 14px;
  }

  footer {
    display: flex;
    justify-content: flex-end;
    margin-right: 14px;
    margin-bottom: 14px;
  }
`;

export const Footer = styled.div`
  margin: 48px 0;
`;

export const ContentPostNotFound = styled.div`
display: flex;
align-items: center;
flex-direction: column;
  img {
    height: 80%;
  }

  span {
    color: ${({theme}) => theme.colors.primary.dark};
    font-weight: 700;
    font-size: 24px;
    margin-top: 16px;
  }
`;
