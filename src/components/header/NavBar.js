import { AppBar, Avatar, Box, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import Logo from "../images/Logo.png";

const NavBar = ({ scrollToSection, activeTab, bgColor }) => {
  const pages = [
    { id: "section1", name: "Home" },
    { id: "section2", name: "Reviews" },
    { id: "section3", name: "Features" },
    { id: "section4", name: "Server Locations" },
  ];
  console.log("location", window.scrollY);
  return (
    <AppBar
      sx={{
        background: bgColor == "transparent" ? "transparent" : "linear-gradient(to right, #172231 62%,  #030507 96%)",
        boxShadow: "none",
      }}
      component="nav"
      position="sticky"
    >
      <Box className="borderBottomCss">
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: "space-between", py: "0.8rem" }}>
            <Box>
              <img src={Logo} />
            </Box>
            <Box display="flex" gap={{ md: 10, sm: 5, xs: 1.2 }}>
              {pages.map((page) => (
                <Box
                  key={page}
                  sx={{ cursor: "pointer" }}
                  onClick={() => {
                    scrollToSection(page?.id);
                  }}
                >
                  <Typography
                    textAlign="center"
                    sx={{
                      ":hover": {
                        background: "linear-gradient(to top, #0073c5 0%, #33a9fe 25%, #35df91 50%, #178f59 90%, #178f59 100%)",
                        "-webkit-background-clip": "text",
                        color: "transparent",
                        transition: "background-position 0.5s ease",
                        backgroundPosition: "100% 0%",
                        backgroundSize: "200% 100%",
                      },
                    }}
                    // className={window.location.hash === page?.id ? 'gradientText' : 'normalColor'}
                    color="#fff"
                    fontSize={{ md: "18px", sm: "16px", xs: "12px" }}
                    fontWeight={500}
                  >
                    {page?.name}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </Box>
    </AppBar>
  );
};

export default NavBar;
