import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from '../styles/theme';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <style jsx global>{`
            html,
            body {
              height: 100%;
              margin: 0;
            }
            #__next {
              height: 100%;
            }
          `}</style>
        </Head>
        <body>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Main />
            <NextScript />
          </ThemeProvider>
        </body>
      </Html>
    );
  }
}

export default MyDocument;