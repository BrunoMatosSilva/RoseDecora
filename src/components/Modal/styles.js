import styled from 'styled-components';

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
