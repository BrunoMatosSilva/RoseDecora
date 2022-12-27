import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/global';
import themes from '../styles/themes/default';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={themes}>
      <Component {...pageProps} />,
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
