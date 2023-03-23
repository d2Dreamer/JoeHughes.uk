import { Box, Container, Typography } from '@mui/material';
import Portfolio from '../components/Portfolio';
import PortfolioCard from '../components/PortfolioCard';
import theme from '../styles/theme';

export default function HomePage() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: theme.palette.background.paper,
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="md">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Welcome to Joseph Hughes&apos; Portfolio
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Here are some of the projects I&apos;ve worked on in the past.
          </Typography>
        </Container>
        <Portfolio>
          <PortfolioCard
            title="My first project"
            description="This is a description of my first project."
          />
          <PortfolioCard
            title="My second project"
            description="This is a description of my second project."
          />
          <PortfolioCard
            title="My third project"
            description="This is a description of my third project."
          />
        </Portfolio>
      </Box>
      <Box sx={{ bgcolor: '#333333', color: 'white', py: 3 }}>
        <Container maxWidth="md">
          <Typography variant="body1" align="center">
            &copy; Joseph Hughes {new Date().getFullYear()}
          </Typography>
        </Container>
      </Box>
    </>
  );
}
