import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const scaleIn = keyframes`
 from { transform: scale(0); }
  to { transform: scale(1); }
`;

const scaleOut = keyframes`
 from { transform: scale(1); }
 to { transform: scale(0); }
`;

export const Overlay = styled.div`
  background: rgba(0,0,0,0.6);
  backdrop-filter: blur(5px);
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.3s;
  z-index: 999;

  ${({ isLeaving }) => isLeaving && css`animation: ${fadeOut} 0.2s;`}
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  padding: 24px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.10);
  animation: ${scaleIn} 0.3s;

  @media (max-width: 599px) {
    width: 300px;
  }

  ${({ isLeaving }) => isLeaving && css`animation: ${scaleOut} 0.2s;`}

  header {
    display: flex;
    justify-content: flex-end;
    width: 100%;

    button {
          border: 0;
          background: transparent;
          line-height: 0;
        }
  }

  .modal-body {

    span {
    display: flex;
    align-items: center;
    justify-content: center;
      > img {
      max-width: 100%;
      margin-bottom: 24px;
    }
    }
  }
`;

export const Footer = styled.footer`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .cancel-button {
    background: transparent;
    border: none;
    font-size: 16px;
    margin-right: 24px;
    color: ${({theme}) => theme.colors.gray[200]};
    &[disabled]{
      cursor: not-allowed;
    }
  }
`;
