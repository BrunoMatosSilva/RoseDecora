import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: ${({theme}) => theme.colors.primary.background};
  padding: 0 10px;

  p {
    margin-top: 24px;
    color: ${({theme}) => theme.colors.background};
  }

  h2 {
    margin-top: 48px;
    text-transform: uppercase;
    color: ${({theme}) => theme.colors.background};

    @media (max-width: 599px) {
    font-size: 16px;
  }

    strong {
      color: ${({theme}) => theme.colors.gray[200]};
    }
  }

  header {
    margin-top: 48px;
    > h1 {
      color: ${({theme}) => theme.colors.background};
      font-weight: 800;
      font-size: 46px;
      text-transform: uppercase;

      @media (max-width: 599px) {
        font-size: 24px;
      }

      strong {
        font-weight: 800;
        color: ${({ theme }) => theme.colors.gray[200]};
      }
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 500px;
  margin-top: 48px;

  @media (max-width: 599px) {
    width: 300px;
  }
`;

export const Textarea = styled.textarea`
  resize: none;
  width: 100%;
  border: none;
  height: 150px;
  color: ${({theme}) => theme.colors.gray[900]};
  background: #fff;
  border: 2px solid #fff;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.10);
  outline: none;
  padding: 10px 16px;
  font-size: 16px;
  transition: border 0.2s ease-in;
  appearance: none;

  @media (max-width: 599px) {
    font-size: 14px;
  }

  &::placeholder {
    color: ${({theme}) => theme.colors.primary.main};
  }

  &:hover {
    border: 2px solid ${({theme}) => theme.colors.primary.main};
  }
  &:focus {
    border: 2px solid ${({theme}) => theme.colors.primary.main};
  }
  ${({theme, error}) => error && css`
    color: ${theme.colors.danger.main};
    border-color: ${theme.colors.danger.main} !important;
  `}
  &[disabled] {
    background: ${({theme}) => theme.colors.gray[100]};
    border-color: ${({theme}) => theme.colors.gray[200]};
    opacity: 1;
  }
`;

export const ContactDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 48px;

   div {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 28px;

    @media (max-width: 599px) {
    font-size: 18px;
  }

    span {
      margin-left: 8px;
      margin-bottom: 18px;
      font-weight: 600;
    }
    svg {
      color: ${({theme}) => theme.colors.gray[200]};
      margin-top: 8px;
    }

  }
`;
