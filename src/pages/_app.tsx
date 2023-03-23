import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import globalStyles from '../styles/globalStyles';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <style jsx global>
        {globalStyles}
      </style>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
