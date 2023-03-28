import { Box, Button, Toolbar, AppBar, Typography } from "@mui/material";
import GetAppIcon from "@mui/icons-material/GetApp";
import Link from "next/link";

const NavBar = () => {
  const handleDownload = () => {
    // Code to download PDF goes here
  };

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
            <Link href="/about">01. About</Link>
          </Button>
          <Button color="inherit" sx={{ mr: 2 }}>
            <Link href="/experience">02. Experience</Link>
          </Button>
          <Button color="inherit" sx={{ mr: 2 }}>
            <Link href="/skills">03. Skills</Link>
          </Button>
          <Button color="inherit" sx={{ mr: 2 }}>
            <Link href="/work">04. Work</Link>
          </Button>
          <Button color="inherit" sx={{ mr: 2 }}>
            <Link href="/contact">05. Contact</Link>
          </Button>
          <Button
            color="inherit"
            variant="outlined"
            startIcon={<GetAppIcon />}
            sx={{ ml: 2 }}
            onClick={handleDownload}
          >
            Resume
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
