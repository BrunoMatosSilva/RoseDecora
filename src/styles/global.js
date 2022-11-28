import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
body {
  font-size: 16px;
  background: ${({ theme }) => theme.colors.background};
  color: ${({theme}) => theme.colors.gray[900]};
}
button {
  cursor: pointer;
}
`;
