import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ThemeContext } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from '../styles/theme';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const originalRenderPage = ctx.renderPage;

    try {
      let styles = null;
      const { theme } = require('../styles/theme');

      const enhancedRenderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) => (
            <ThemeContext.Provider value={theme}>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                <App {...props} />
              </ThemeProvider>
            </ThemeContext.Provider>
          ),
        });

      const renderedPage = await enhancedRenderPage();
      styles = (
        <>
          {renderedPage.styles}
          <style
            data-emotion-css={renderedPage.ids.join(' ')}
            dangerouslySetInnerHTML={{ __html: renderedPage.css }}
          />
        </>
      );

      return {
        ...renderedPage,
        styles,
      };
    } finally {
    }
  }

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
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
