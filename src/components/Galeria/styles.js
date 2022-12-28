import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const ContentGalery = styled.div`
  max-width: 1216px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding-top: 70px;

  p {
    margin-bottom: 28px;
  }

  .containerSlaide {
    width: 100%;
    height: 100%;
  }
`;

export const CardGalery = styled.div`
 button{
    position: absolute;
    opacity: 0.6;
    transition: all 0.2s;
    background: transparent;
    border: none;

    &:hover {
      opacity: 1;
    }

      img {
        height: 560px;
        width: 550px;
        border: 1px solid ${({theme}) => theme.colors.primary.main};
        border-radius: 8px;
      }
  }

 > div {
    margin-top: 480px;
    width: 550px;
    position: relative;
    background: rgb(0,194,203);
    background: linear-gradient(180deg, rgba(0,194,203,1) 0%, rgba(44,180,155,1) 95%);
    opacity: 0.6;

    strong {
      font-size: 18px;
      margin-left: 14px;
    }

    p {
      font-size: 14px;
      margin-left: 14px;
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
