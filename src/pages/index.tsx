import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from '../styles/theme'
import { CssBaseline } from "@mui/material";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar"

const portfolioData = [
  {
    id: 1,
    title: 'Townesquare',
    description: 'Web3 Social Media Platform',
    role: 'CTO',
    image: '../assets/townesquare.png',
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

export default function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <Portfolio portfolioData={portfolioData} />            
        <Footer />
      </ThemeProvider>
    </React.StrictMode>
  )
}