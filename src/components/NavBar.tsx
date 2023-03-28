import { Box, Button, Toolbar, AppBar, Typography } from "@mui/material";
import Link from "next/link";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" display='inline' sx={{ flexGrow: 1 }}>
            <span style={{ color: '#f50057' }}>J</span>oseph Hughes
          </Typography>
          <Typography variant="subtitle1" sx={{ display: "inline-block", ml: 1 }}>
            Full Stack Developer
          </Typography>
        </Box>
        <Box>
          <Button color="inherit" sx={{ mr: 2 }}>
            <Link href="/contact">Contact</Link>
          </Button>
          <Button color="inherit" sx={{ mr: 2 }}>
            <Link href="/work">Work</Link>
          </Button>
          <Button color="inherit" sx={{ mr: 2 }}>
            <Link href="/skills">Skills</Link>
          </Button>
          <Button color="inherit" sx={{ mr: 2 }}>
            <Link href="/about">About</Link>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
