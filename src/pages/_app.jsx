import { Toaster } from 'react-hot-toast';
import NextNProgress from 'nextjs-progressbar';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/global';
import themes from '../styles/themes/default';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={themes}>
      <NextNProgress
        color={themes.colors.primary.lighter}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow
      />
      <Toaster position="bottom-right" />
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
