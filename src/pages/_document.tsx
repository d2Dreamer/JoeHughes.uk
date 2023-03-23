import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@mui/styles';
import { createTheme, StyledEngineProvider } from '@mui/material/styles';
import theme from '../styles/theme';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Set the page's viewport to properly scale on mobile devices */}
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />

          {/* Set the page's theme colors */}
          <meta name="theme-color" content={theme.palette.primary.main} />

          {/* Add any additional head elements you need */}
        </Head>
        <body>
          <StyledEngineProvider injectFirst>
            <Main />
            <NextScript />
          </StyledEngineProvider>
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [
        ...React.Children.toArray(initialProps.styles),
        sheets.getStyleElement({ nonce: ctx.res.locals.nonce }),
      ],
    };
  } finally {
    sheets.seal();
  }
};
