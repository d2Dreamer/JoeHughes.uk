import * as React from "react";
import * as ReactDOM from "react-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#808080",
    },
  },
});

const portfolioData = [
  {
    id: 1,
    title: 'Project 1',
    description: 'This is the first project',
    role: 'Developer',
    image: '/project1.jpg',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'This is the second project',
    role: 'Designer',
    image: '/project2.jpg',
  },
  // ... add more project data here
];

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Portfolio portfolioData={portfolioData} />
      <Footer />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
