import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react'
import { useStyles } from '../Style'
import extra1 from '../image/extra 1.png'
import extra2 from '../image/extra 2.png'
import extra3 from '../image/extra 3.png'
import target from '../image/target.svg'
import brush from '../image/brush.svg'
import energy from '../image/energy.svg'

const ExtraSection_1 = () => {
  const classes = useStyles();
  return (
    <Box className={classes.extra_section} id="extra">
      <Container maxWidth="lg">
        <Box>
          <Grid container spacing={{md:10,sm:3}}>
            <Grid item xs={12} md={4} sm={4} sx={{display:"flex",flexFlow:"column",alignItems:"center",justifyContent:"center"}}>
              <Box className={classes.extra_img_section}>
                <img src={extra1} alt="Image" className={classes.extra_img_1} />
                <img src={target} alt="Image" className={classes.extra_img_2} />
              </Box>
              <Box className={classes.extra_text_section}>
                <Typography variant='h2' component='h2' className={classes.extra_text_title}>
                  Pixel Perfect
                </Typography>
                <Typography variant='h5' component='p' className={classes.extra_text_description}>
                Most common methods for designing websites that work well on desktop is responsive and adaptive design.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4} sm={4} sx={{display:"flex",flexFlow:"column",alignItems:"center",justifyContent:"center"}}>
              <Box className={classes.extra_img_section}>
                <img src={extra2} alt="Image" className={classes.extra_img_1} />
                <img src={brush} alt="Image" className={classes.extra_img_2} />
              </Box>
              <Box className={classes.extra_text_section}>
                <Typography variant='h2' component='h2' className={classes.extra_text_title}>
                High Quality
                </Typography>
                <Typography variant='h5' component='p' className={classes.extra_text_description}>
                Most common methods for designing websites that work well on desktop is responsive and adaptive design.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4} sm={4} sx={{display:"flex",flexFlow:"column",alignItems:"center",justifyContent:"center"}}>
              <Box className={classes.extra_img_section}>
                <img src={extra3} alt="Image" className={classes.extra_img_1} />
                <img src={energy} alt="Image" className={classes.extra_img_2} />
              </Box>
              <Box className={classes.extra_text_section}>
                <Typography variant='h2' component='h2' className={classes.extra_text_title}>
                Awesome Idea
                </Typography>
                <Typography variant='h5' component='p' className={classes.extra_text_description}>
                Most common methods for designing websites that work well on desktop is responsive and adaptive design.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default ExtraSection_1
