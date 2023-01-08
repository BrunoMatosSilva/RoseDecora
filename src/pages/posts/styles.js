import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 2rem;

  a {
    text-decoration: none;
    opacity: 0.8;
    transition: 0.2s all;

    &:hover {
      opacity: 1;
    }
  }
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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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

  .titlePost {
    height: 100px;

    p {
    color: ${({theme}) => theme.colors.primary.dark};
    font-weight: 600;
    font-size: 16px;
    margin-left: 14px;
    margin-right: 14px;
  }
  }

  footer {
    display: flex;
    justify-content: flex-end;
    margin-right: 14px;
    margin-bottom: 14px;

    span {
      color: ${({theme}) => theme.colors.gray[900]};
      font-weight: 600;
    }
  }
`;

export const Footer = styled.div`
  margin: 48px 0;

  a {
  height: 52px;
  padding: 0 16px;
  border: none;
  background: ${({theme}) => theme.colors.primary.main};
  color: #fff;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.10);
  padding: 0 26px;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  transition: background 0.2s ease-in;
  display:  flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: ${({theme}) => theme.colors.primary.light};
  }
  &:active {
    background: ${({theme}) => theme.colors.primary.dark};
  }
  }
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
