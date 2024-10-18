import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react'
import { useStyles } from '../Style'

const Newsletter = () => {
  const classes = useStyles();
  return (
    <Box className={classes.newslatter}>
      <Container maxWidth="lg">
        <Box className={classes.newslatter_box}>
          <Box className={classes.newslatter_box_color}></Box>
          <Box className={classes.newslatter_box_content}>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Box className={`${classes.newslatter_text_area}`}>
                  <Typography variant="h5" component="h5" className={classes.newslatter_text_area_subtitle}>
                    Subscribe Now
                  </Typography>
                  <Typography variant="h2" component="h2" className={classes.newslatter_text_area_title}>
                    Get My Newsletter
                  </Typography>
                  <Typography variant="h5" component="p" className={classes.newslatter_text_area_description}>
                    Get latest news, updates, tips and trics in your inbox
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Newsletter
