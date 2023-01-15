import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;

  ::-webkit-scrollbar {
      width: 8px;
      height: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.primary.main};
      border-radius: 10px;
    }
    ::-webkit-scrollbar-track{
      background: ${({ theme }) => theme.colors.primary.lighter};
    }
}

html {
  scroll-behavior: smooth;
}
body {
  font-size: 16px;
  background: ${({ theme }) => theme.colors.background};
  color: ${({theme}) => theme.colors.gray[900]};

  @media (max-width: 599px) {
        font-size: 14px;
      }
}
button {
  cursor: pointer;
}
`;
