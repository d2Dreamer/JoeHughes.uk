import { Box, Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../styles/theme';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  header: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  content: {
    flexGrow: 1,
  },
  footer: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}));

const experiences = [
  {
    id: 1,
    title: 'Example Company',
    description: 'A brief description of what Example Company does',
    role: 'Full Stack Developer',
    duration: '2021 - Present',
    duties: [
      'Developed and maintained the company website using Next.js and TypeScript',
      'Built custom APIs to integrate with third-party services',
      'Collaborated with the design team to implement new features and improve the user experience',
    ],
  },
  // Add more experience objects as needed
];

const IndexPage = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.root}>
        <Box className={classes.header}>
          <Container maxWidth="lg">
            <Typography variant="h4" component="h1" gutterBottom>
              Joseph Hughes
            </Typography>
            <Typography variant="h6" component="h2" gutterBottom>
              Full Stack Developer
            </Typography>
          </Container>
        </Box>
        <Box className={classes.content}>
          <Container maxWidth="lg">
            {/* Map over experiences and render a card for each one */}
            {experiences.map((exp) => (
              <Box key={exp.id} my={2} sx={{ '&:hover .more-info': { display: 'block' } }}>
                <Typography variant="h5" component="h3" gutterBottom>
                  {exp.title}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  {exp.description}
                </Typography>
                {/* Add hover effect to show more information */}
                <Typography variant="subtitle2" component="p" color="textSecondary" className="more-info" sx={{ display: 'none' }}>
                  {exp.role} ({exp.duration})
                  <ul>
                    {exp.duties.map((duty, index) => (
                      <li key={index}>{duty}</li>
                    ))}
                  </ul>
                </Typography>
              </Box>
            ))}
          </Container>
        </Box>
        <Box className={classes.footer}>
          <Container maxWidth="lg">
            <Typography variant="body2" component="p" align="center">
              © Joseph Hughes {new Date().getFullYear()}
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default IndexPage;
