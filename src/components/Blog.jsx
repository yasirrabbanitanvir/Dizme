import React from 'react'
import { useStyles } from '../Style'
import blog1 from "../image/blog1.jpg";
import blog2 from "../image/blog2.jpg";
import blog3 from "../image/blog3.jpg";
import { Box, Container, Grid, Link, Typography } from '@mui/material';


const Blog = () => {
  const classes = useStyles();
  return (
    <Box className={classes.blog} id="blog">
      <Container maxWidth="lg">
        <Box className={`${classes.common_text_area}`}>
          <Typography variant="h5" component="h5" className={classes.common_text_area_subtitle}>
            From My Blog
          </Typography>
          <Typography variant="h2" component="h2" className={classes.common_text_area_title}>
            Our Recent Updates, Blog, Tips, Tricks & More
          </Typography>
        </Box>
        <Grid container spacing={4}>

          <Grid item xs={12} md={4}>
            <Box className={classes.blog_section}>
              <Box className={classes.blog_section_image}>
                <img src={blog1} />
                <Box className={classes.blog_section_date}>
                  11
                  <span itemprop="datePublished">Apr</span>
                </Box>
              </Box>
              <Box className={classes.blog_section_text}>
                <Typography variant="h5" component="h5" className={classes.blog_section_text_subtitle}>
                <Link href='#'>Web Development</Link>
                </Typography>
                <Typography variant="h2" component="h2" className={classes.blog_section_text_title}>
                  <Link href='#'>Jim Morisson Says when the musics over turn off the light</Link>
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box className={classes.blog_section}>
              <Box className={classes.blog_section_image}>
                <img src={blog2} />
                <Box className={classes.blog_section_date}>
                  11
                  <span itemprop="datePublished">Apr</span>
                </Box>
              </Box>
              <Box className={classes.blog_section_text}>
                <Typography variant="h5" component="h5" className={classes.blog_section_text_subtitle}>
                <Link href='#'>Web Development</Link>
                </Typography>
                <Typography variant="h2" component="h2" className={classes.blog_section_text_title}>
                  <Link href='#'>Jim Morisson Says when the musics over turn off the light</Link>
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box className={classes.blog_section}>
              <Box className={classes.blog_section_image}>
                <img src={blog3} />
                <Box className={classes.blog_section_date}>
                  11
                  <span itemprop="datePublished">Apr</span>
                </Box>
              </Box>
              <Box className={classes.blog_section_text}>
                <Typography variant="h5" component="h5" className={classes.blog_section_text_subtitle}>
                <Link href='#'>Web Development</Link>
                </Typography>
                <Typography variant="h2" component="h2" className={classes.blog_section_text_title}>
                  <Link href='#'>Jim Morisson Says when the musics over turn off the light</Link>
                </Typography>
              </Box>
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  )
}

export default Blog
