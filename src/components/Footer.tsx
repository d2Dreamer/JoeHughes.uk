import React from 'react';
import { Box, Container, Link, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'primary.dark', py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h5" sx={{ color: 'common.white' }}>
          JosephHughes.com
        </Typography>
        <Typography variant="body2" sx={{ color: 'common.white' }}>
          © {new Date().getFullYear()} Joseph Hughes. All rights reserved.
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Link href="#" color="common.white" sx={{ mr: 2 }}>
            Privacy Policy
          </Link>
          <Link href="#" color="common.white">
            Terms of Use
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
