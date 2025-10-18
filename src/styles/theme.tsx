import { createTheme } from '@mui/material/styles';

// Console/Terminal theme
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#58a6ff',
    },
    secondary: {
      main: '#7c3aed',
    },
    background: {
      default: '#0d1117',
      paper: '#161b22',
    },
    text: {
      primary: '#c9d1d9',
      secondary: '#8b949e',
    },
    error: {
      main: '#f85149',
    },
    warning: {
      main: '#d29922',
    },
    success: {
      main: '#3fb950',
    },
    info: {
      main: '#58a6ff',
    },
  },
  typography: {
    fontFamily: [
      'JetBrains Mono',
      'Monaco',
      'Consolas',
      'Courier New',
      'monospace',
    ].join(','),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#0d1117',
          color: '#c9d1d9',
        },
      },
    },
  },
});

export default theme;