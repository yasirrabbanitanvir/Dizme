import { Box, Container, Drawer, IconButton, Link } from '@mui/material';
import React, { useState } from 'react'
import { useStyles } from '../Style'
import logo from '../image/logo.png'
import { navitem } from '../data';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const classes = useStyles();

  const [scrollNavbar, setScrollNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 90) {
      setScrollNavbar(true);
    } else {
      setScrollNavbar(false);
    }
  }
  window.addEventListener('scroll', changeBackground)

  const [openMenu, setOpenMenu] = useState(false)
  return (
    <Box className={scrollNavbar ? `${classes.navbar_section_active}` : `${classes.navbar_section}`}>
      <Container maxWidth="lg">
        <Box className={classes.navbar}>
          <Box className={classes.logo}>
            <img src={logo} alt="logo" className={classes.logo_image} />
          </Box>
          <Box sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
            <nav>
              {navitem.map((item, index) => (

                <Link href={item.link} className={classes.navlink}>
                  {item.name}
                </Link>
              ))}
            </nav>
          </Box>
          <Box display="flex" alignItems="center" gap={3}>
            <Link href="#" className={classes.download_cv_button}>
              Download CV
            </Link>
            <IconButton onClick={() => setOpenMenu(!openMenu)} className={classes.menu_icon}>
              <MenuOpenIcon />
            </IconButton>
            <Drawer
              anchor={"right"}
              open={openMenu}
              onClose={() => setOpenMenu(!openMenu)}
              style={{ overflowY: "hidden !important", display: "flex", flexFlow: "column", zIndex: 9999999 }}
            >
              <Box className={classes.drawer_mobail_menu}>
                <IconButton onClick={() => setOpenMenu(!openMenu)} className={classes.menu_icon_close}>
                  <CloseIcon />
                </IconButton>
                {navitem.map((item, index) => (
                  <Link href={item.link} className={classes.mobail_menu_link}>
                    {item.name}
                  </Link>
                ))}
              </Box>
            </Drawer>
          </Box>
        </Box>

      </Container>
    </Box>
  )
}

export default Navbar
