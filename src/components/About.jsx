import React from 'react'
import { useStyles } from '../Style'
import about from '../image/about section.jpg'
import aboutleft from '../image/about left.png'
import aboutright from '../image/about right.png'
import { Box, Container, Grid, Link, Typography } from '@mui/material';

const About = () => {
  const classes = useStyles();
  return (
    <Box className={classes.about_section} id="about">
      <Box className={classes.about_section_left_image}> <img src={aboutleft} alt="about" className={classes.about_left_image} /></Box>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} sx={{ display: "flex", flexFlow: "column", alignItems: "center", justifyContent: "center" }}>
            <Box className={classes.about_image_section}>
              <img src={about} alt="about" className={classes.about_image} />
              <Box className={classes.about_image_extra_1}>
                <Box className={classes.about_image_extra_text}>
                  <Typography variant="h4" component="h4" className={classes.about_image_extra_text_title_1}>
                    18
                  </Typography>
                  <Typography variant="h6" component="h6" className={classes.about_image_extra_text_subtitle}>
                    Years of <br></br>
                    Success
                  </Typography>
                </Box>
              </Box>
              <Box className={classes.about_image_extra_2}>
                <Box className={classes.about_image_extra_text}>
                  <Typography variant="h4" component="h4" className={classes.about_image_extra_text_title_2}>
                    9k
                  </Typography>
                  <Typography variant="h6" component="h6" className={classes.about_image_extra_text_subtitle}>
                    Total <br></br>
                    Projects
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: "flex", flexFlow: "column", alignItems: "center", justifyContent: "center" }}>
            <Box className={classes.about_text_section}>
              <Typography variant="h4" component="h4" className={classes.about_text_subTitle}>I'm a Designer</Typography>
              <Typography variant="h2" component="h2" className={classes.about_text_title}>I Can Design Anything You Want</Typography>
              <Typography variant="h5" component="p" className={classes.about_text_description}>
                Hello there! I'm a web designer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.
              </Typography>
              <Link href="#" className={classes.hero_about_button}>
                Hire Me
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box className={classes.about_section_right_image}> <img src={aboutright} alt="about" className={classes.about_right_image} /></Box>
    </Box>
  )
}

export default About