import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-scroll";
import { useTheme } from "@mui/material/styles";
import pdf from "../../../img/SteveJhordan_Duran_CV.pdf";
import PropTypes from "prop-types";

const Navbar = ({ pages, children, position = "fixed" }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [scroll, setScroll] = React.useState(0);
  const theme = useTheme();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  window.onscroll = function () {
    setScroll(window.scrollY);
  };

  const bg =
    scroll === 0
      ? "transparent"
      : theme.palette.mode === "dark"
      ? "rgba(18, 18, 18, 0.6)"
      : "rgba(156, 39, 176, 0.6)";

  const blur = scroll === 0 ? "blur(0px)" : "blur(15px)";
  const boxS =
    scroll === 0
      ? "none"
      : "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)";

  return (
    <AppBar
      position={position}
      color="secondary"
      style={{ background: bg, backdropFilter: blur, boxShadow: boxS }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link
                      activeClass="active"
                      className={page}
                      to={page}
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      {page}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
              <MenuItem>
                <Typography textAlign="center">
                  <a
                    href={pdf}
                    rel="noopener noreferrer"
                    download="JhordanDuranCV.pdf"
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    CV
                  </a>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Box key={page} component="span" sx={{ p: 2, cursor: "pointer" }}>
                <Link
                  activeClass="active"
                  className={page}
                  to={page}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  {page}
                </Link>
              </Box>
            ))}
            <Box component="span" sx={{ p: 2, cursor: "pointer" }}>
              <a
                href={pdf}
                rel="JhordanDuranCV"
                download="JhordanDuranCV.pdf"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                CV
              </a>
            </Box>
          </Box>

          <Box sx={{ flexGrow: 0 }}>{children}</Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

Navbar.propTypes = {
  /**
   * Ingresa las opciones para navegar
   */
  pages: PropTypes.array,
  /**
   * agrega la opcion que mostrara en la parte derecha del menu
   */
  children: PropTypes.node,
  /**
   * agrega la posision del menu
   */
  position: PropTypes.oneOf([
    "absolute",
    "fixed",
    "relative",
    "static",
    "sticky",
  ]),
};

export default Navbar;
