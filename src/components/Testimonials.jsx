import { Box, Container, Link, Typography } from '@mui/material'
import React from 'react'
import { useStyles } from '../Style'
import tes1 from "../image/tes1.jpg";
import Slider from "react-slick";

const Testimonials = () => {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Box className={classes.testimonial}>
      <Container maxWidth="lg">
        <Box className={`${classes.common_text_area} ${classes.testimonial_text_area}`}>
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
        <Box className={classes.textimonial_section}>

        <Slider {...settings}>
        <Box className={classes.textimonial_group}>
            <Box className={classes.textimonial_icon}><i class="fa fa-quote-left" aria-hidden="true"></i></Box>
            <Box className={classes.textimonial_text}>
              Loved the template design, documentation, customizability and the customer support from Marketify team! I am a noob in programming with very little knowledge about coding but the Marketify team helped me to launch my resume website successfully. Much recommended!
            </Box>
            <Box className={classes.textimonial_avater_section}>
              <Box className={classes.textimonial_avater_img}><img src={tes1} /></Box>
              <Box className={classes.textimonial_avater_text}>
                <Typography variant="h3" component="h4" className={classes.textimonial_avater_text_title}>Nazmul hossen</Typography>
                <Typography variant="h5" component="h5" className={classes.textimonial_avater_text_subtitle}>Web Developer</Typography>
              </Box>
            </Box>
          </Box>
          <Box className={classes.textimonial_group}>
            <Box className={classes.textimonial_icon}><i class="fa fa-quote-left" aria-hidden="true"></i></Box>
            <Box className={classes.textimonial_text}>
              Loved the template design, documentation, customizability and the customer support from Marketify team! I am a noob in programming with very little knowledge about coding but the Marketify team helped me to launch my resume website successfully. Much recommended!
            </Box>
            <Box className={classes.textimonial_avater_section}>
              <Box className={classes.textimonial_avater_img}><img src={tes1} /></Box>
              <Box className={classes.textimonial_avater_text}>
                <Typography variant="h3" component="h4" className={classes.textimonial_avater_text_title}>Nazmul hossen</Typography>
                <Typography variant="h5" component="h5" className={classes.textimonial_avater_text_subtitle}>Web Developer</Typography>
              </Box>
            </Box>
          </Box>
          <Box className={classes.textimonial_group}>
            <Box className={classes.textimonial_icon}><i class="fa fa-quote-left" aria-hidden="true"></i></Box>
            <Box className={classes.textimonial_text}>
              Loved the template design, documentation, customizability and the customer support from Marketify team! I am a noob in programming with very little knowledge about coding but the Marketify team helped me to launch my resume website successfully. Much recommended!
            </Box>
            <Box className={classes.textimonial_avater_section}>
              <Box className={classes.textimonial_avater_img}><img src={tes1} /></Box>
              <Box className={classes.textimonial_avater_text}>
                <Typography variant="h3" component="h4" className={classes.textimonial_avater_text_title}>Nazmul hossen</Typography>
                <Typography variant="h5" component="h5" className={classes.textimonial_avater_text_subtitle}>Web Developer</Typography>
              </Box>
            </Box>
          </Box>
        </Slider>

        </Box>
      </Container>
    </Box>
  )
}

export default Testimonials
