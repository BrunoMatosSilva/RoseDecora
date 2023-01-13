import styled, { css } from 'styled-components';

export default styled.input`
  width: 100%;
  border: none;
  height: 54px;
  color: ${({theme}) => theme.colors.primary.main};
  background: #fff;
  border: 2px solid #fff;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.10);
  outline: none;
  padding: 0 16px;
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
