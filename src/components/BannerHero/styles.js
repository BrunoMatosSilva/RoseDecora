import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 126px);
  background-image: url('/bghome.png');
  background-position: right;
  background-repeat: no-repeat;

  @media (max-width: 599px) {
   background-image: none;
   height: 100%;
  }
`;

export const ContentBanner = styled.div`
max-width: 1216px;
display: flex;
align-items: center;
justify-content: space-between;
margin: 0 auto;
flex: 1;

@media (max-width: 599px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 320px;
  }

`;

export const CardBanner = styled.div`
  width: 520px;
  border-radius: 40px;
  box-shadow: 20px 20px 50px -15px rgba(29, 117, 101, 0.3);
  padding: 36px;

  @media (max-width: 599px) {
    width: 300px;
    box-shadow: none;
    padding: 10px;
  }

  p {
    font-size: 14px;
    line-height: 170%;

    strong {
      color: ${({theme}) => theme.colors.primary.dark};
    }

    @media (max-width: 599px) {
      line-height: 150%;
    }
  }
`;

export const ContentSocial = styled.div`
  margin-top: 34px;
  margin-bottom: 34px;

  @media (max-width: 599px) {
    margin-top: 10px;
    margin-bottom: 10px;
  }
    a {
      color: ${({theme}) => theme.colors.primary.dark};
      padding-right: 8px;

      svg {
        height: 48px;
        width: 48px;
        transition: all 0.2s;

        &:hover {
          scale: 1.25;
        }
      }
    }
`;

export const Rodape = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 599px) {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
  }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 16px;

      @media (max-width: 599px) {
        margin-left: 0;
        margin-top: 35px;
      }

      strong {
        font-size: 16px;

        button {
          text-decoration: none;
          color: ${({theme}) => theme.colors.gray[900]};
          transition: all 0.2s;
          background: transparent;
          border: none;
          font-size: 16px;
          font-weight: bold;

            &:hover {
              color: ${({theme}) => theme.colors.primary.dark};
            }
        }
      }

      span {
        margin-left: 8px;
      }
    }
`;

export const ImageBanner = styled.div`
  margin-left: 34px;

  @media (max-width: 599px) {
       margin-left: 0px;
      }

    > img {
      height: 580px;
      width: 700px;

      @media (max-width: 599px) {
        height: 270px;
        width: 300px;
      }
    }
`;


