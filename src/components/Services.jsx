import { Box, Container, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import { useStyles } from '../Style'
import servicerightimg from "../image/service right.png"
import anchor from "../image/anchor.svg"
import physics from "../image/physics.svg"
import contact from "../image/contact.svg"
import web from "../image/web.svg"
import service_left_image from "../image/service_left_image.png"

const Services = () => {
  const classes = useStyles();
  return (
    <Box className={classes.service} id="services">
      <Box className={classes.service_section_right_image}> <img src={servicerightimg} alt="about" className={classes.service_left_image} /></Box>
      <Container maxWidth="lg">
        <Box className={`${classes.common_text_area} ${classes.services_text_area}`}>
          <Typography variant="h5" component="h5" className={classes.common_text_area_subtitle}>
            Design is Life
          </Typography>
          <Typography variant="h2" component="h2" className={classes.common_text_area_title}>
            What I Do for Clients
          </Typography>
          <Typography variant="h5" component="p" className={classes.common_text_area_description}>
            Most common methods for designing websites that work well on desktop is responsive and adaptive design
          </Typography>
        </Box>
        <Box className={classes.service_box_area}>
        <Box className={classes.service_section_left_image}> <img src={service_left_image} alt="about" className={classes.service_left_image} /></Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box className={classes.service_box}>
                <Box className={classes.service_pull_left}>
                  <span className={`${classes.sppb_img_container} ${classes.sppb_img_container_after_1}`}>
                    <Link href='#'>
                      <img src={anchor} alt="anchor" className={classes.service_image} />
                    </Link>
                  </span>
                </Box>
                <Box className={classes.service_pull_right}>
                  <Link href='#' className={classes.service_pull_right_title}>Creative Design</Link>
                  <Typography variant="h4" component="h4" className={classes.service_pull_right_subtitle}>
                    Starts from <span>$99</span>
                  </Typography>
                  <Typography variant="h4" component="p" className={classes.service_pull_right_des}>
                    Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
            <Box className={classes.service_box}>
                <Box className={classes.service_pull_left}>
                  <span className={`${classes.sppb_img_container} ${classes.sppb_img_container_after_2}`}>
                    <Link href='#'>
                      <img src={physics} alt="anchor" className={classes.service_image} />
                    </Link>
                  </span>
                </Box>
                <Box className={classes.service_pull_right}>
                  <Link href='#' className={classes.service_pull_right_title}>Graphic Design</Link>
                  <Typography variant="h4" component="h4" className={classes.service_pull_right_subtitle}>
                    Starts from <span>$99</span>
                  </Typography>
                  <Typography variant="h4" component="p" className={classes.service_pull_right_des}>
                    Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
            <Box className={classes.service_box}>
                <Box className={classes.service_pull_left}>
                  <span className={`${classes.sppb_img_container} ${classes.sppb_img_container_after_3}`}>
                    <Link href='#'>
                      <img src={contact} alt="anchor" className={classes.service_image} />
                    </Link>
                  </span>
                </Box>
                <Box className={classes.service_pull_right}>
                  <Link href='#' className={classes.service_pull_right_title}>Graphic Design</Link>
                  <Typography variant="h4" component="h4" className={classes.service_pull_right_subtitle}>
                    Starts from <span>$99</span>
                  </Typography>
                  <Typography variant="h4" component="p" className={classes.service_pull_right_des}>
                    Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
            <Box className={classes.service_box}>
                <Box className={classes.service_pull_left}>
                  <span className={`${classes.sppb_img_container} ${classes.sppb_img_container_after_4}`}>
                    <Link href='#'>
                      <img src={web} alt="anchor" className={classes.service_image} />
                    </Link>
                  </span>
                </Box>
                <Box className={classes.service_pull_right}>
                  <Link href='#' className={classes.service_pull_right_title}>Graphic Design</Link>
                  <Typography variant="h4" component="h4" className={classes.service_pull_right_subtitle}>
                    Starts from <span>$99</span>
                  </Typography>
                  <Typography variant="h4" component="p" className={classes.service_pull_right_des}>
                    Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default Services
