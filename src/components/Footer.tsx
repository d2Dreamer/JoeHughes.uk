import { Box, Link, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ py: 3, bgcolor: 'grey.900', color: 'white' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <Box>
          <Link href="https://github.com/d2Dreamer" target="_blank" rel="noopener" underline="none">
            <Typography variant="body1" sx={{ mr: 1 }}>GitHub</Typography>
          </Link>
          <Typography variant="body1" sx={{ mr: 1 }}></Typography>
          <Link href="mailto:jhughes2702@gmail.com" underline="none">
            <Typography variant="body1" sx={{ mr: 1 }}>Contact</Typography>
          </Link>
        </Box>
        <Typography variant="body2" sx={{ mt: 1, textAlign: { xs: 'center', sm: 'right' } }}>
          © {new Date().getFullYear()} Joseph Hughes. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
