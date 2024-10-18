import { Box, Container, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import { useStyles } from '../Style'
import avatar from '../image/avatar.png'
import icon10 from '../image/icon10.svg'
import illustrator from '../image/illustrator.svg'
import photoshop from '../image/photoshop.svg'
import figma from '../image/figma.svg'
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ReactSVG } from 'react-svg'

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.header_section}>
      <Container maxWidth="lg">
        <Box className={classes.header_items}>
          <Grid container spacing={2} display="flex" flexDirection={{md:"row",sm:"column-reverse",xs:"column-reverse"}}>
            <Grid item xs={12} md={6} display="flex" justifyContent="center">
              <Box className={classes.avater_text}>
                <Typography variant='h3' component='h3' className={classes.sppb_addon_sup_title}>Hello, I'm</Typography>
                <Typography variant='h2' component='h2' className={classes.sppb_addon_title}>James Smith</Typography>
                <Typography variant='h4' component='h4' className={classes.sppb_addon_sub_title}>
                  A <span className={classes.greenText}> Creative Designer </span> From <span className={classes.purpleText}> New York</span>
                </Typography>
                <Typography variant='body1' component='p' className={classes.sppb_addon_description}>
                  I'm creative designer based in New York, and I'm very passionate and dedicated to my work.
                </Typography>
                <Box className={classes.hero_section_button}>
                  <Link href="#" className={classes.hero_about_button}>
                    About Me
                  </Link>
                  <Box className={classes.hero_sosial}>
                    <Link href="#" target="_blank" className={classes.hero_sosial_icon}>
                      <FacebookSharpIcon className={classes.hero_sosial_icon} />
                    </Link>
                    <Link href="#" target="_blank">
                      <TwitterIcon className={classes.hero_sosial_icon} />
                    </Link>
                    <Link href="#" target="_blank">
                      <LinkedInIcon className={classes.hero_sosial_icon} />
                    </Link>
                    <Link href="#" target="_blank">
                      <GitHubIcon className={classes.hero_sosial_icon} />
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className={classes.avater_section}>
                <img src={avatar} alt='avatar' className={classes.image_avater} />
                <Box className={classes.svg_illastator}><ReactSVG src={illustrator} /></Box>
                <Box className={classes.svg_photoshop}><ReactSVG src={photoshop} /></Box>
                <Box className={classes.svg_figma}><ReactSVG src={figma} /></Box>
              </Box>
            </Grid>
          </Grid>
          <Box className={classes.svg_image_section}>
            <Link href="#extra" className={classes.svg_image_link}>
              <ReactSVG src={icon10} />
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Header
