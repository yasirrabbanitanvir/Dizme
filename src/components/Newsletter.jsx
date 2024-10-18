import { Box, Container, Grid, Typography, TextField, Button } from '@mui/material';
import React from 'react';
import { useStyles } from '../Style';

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
                    Get latest news, updates, tips and tricks in your inbox
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Email"
                  type="email"
                  className={classes.email_input}
                />
                <Button variant="contained" color="primary" className={classes.subscribe_button}>
                  Subscribe
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Newsletter;