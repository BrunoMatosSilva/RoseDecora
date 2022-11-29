import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 126px);
  background-image: url('/bghome.png');
  background-position: right;
  background-repeat: no-repeat;
`;

export const ContentBanner = styled.div`
max-width: 1216px;
display: flex;
align-items: center;
justify-content: space-between;
margin: 0 auto;
flex: 1;
`;

export const CardBanner = styled.div`
  width: 520px;
  border-radius: 40px;
  box-shadow: 0px 20px 50px -15px rgba(29, 117, 101, 0.3);
  padding: 36px;

  p {
    font-size: 14px;
    line-height: 170%;

    strong {
      color: ${({theme}) => theme.colors.primary.dark};
    }
  }
`;

export const ContentSocial = styled.div`
  margin-top: 34px;
  margin-bottom: 34px;
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

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 16px;

      strong {
        font-size: 16px;

        a {
          text-decoration: none;
          color: ${({theme}) => theme.colors.gray[900]};
          transition: all 0.2s;

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

    > img {
      height: 580px;
      width: 700px;
    }
`;


