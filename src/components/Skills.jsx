import { Box, Container, Grid, LinearProgress, Typography } from '@mui/material';
import React from 'react'
import { useStyles } from '../Style'
import skill from "../image/skill.jpg"
import { linearProgressClasses } from '@mui/material/LinearProgress';

const Skills = () => {
  const classes = useStyles();
  return (
    <Box className={classes.skill}>
      <Container maxWidth="lg">
        <Grid container spacing={3} sx={{ display: "flex", flexFlow: { xs: "column-reverse", sm: "column-reverse", md: "row" }, alignItems: "center" }}>
          <Grid item xs={12} md={6}>
            <Box className={classes.skill_left}>
              <Box className={`${classes.common_text_area} ${classes.skill_text_area}`}>
                <Typography variant="h5" component="h5" className={classes.common_text_area_subtitle}>
                  Design is Life
                </Typography>
                <Typography variant="h2" component="h2" className={classes.common_text_area_title}>
                  I Develop Skills Regularly to Keep Me Update
                </Typography>
                <Typography variant="h5" component="p" className={classes.common_text_area_description}>
                  Most common methods for designing websites that work well on desktop is responsive and adaptive design
                </Typography>
              </Box>
              <Box className={classes.progressbar_group}>
                <Box className={classes.progressbar}>
                  <Box className={classes.progressbar_label}>Illustrator <span style={{ color: "#f75023" }}>85%</span></Box>
                  <LinearProgress variant="determinate" value={85} className={classes.progressbar_main} sx={{ [`& .${linearProgressClasses.bar}`]: { backgroundColor: "#f75023" } }} />
                </Box>
                <Box className={classes.progressbar}>
                  <Box className={classes.progressbar_label}>Photoshop <span style={{ color: "rgb(28, 190, 89)" }}>95%</span></Box>
                  <LinearProgress variant="determinate" value={95} className={classes.progressbar_main} sx={{ [`& .${linearProgressClasses.bar}`]: { backgroundColor: "rgb(28, 190, 89)" } }} />
                </Box>
                <Box className={classes.progressbar}>
                  <Box className={classes.progressbar_label}>Figma <span style={{ color: "rgb(128, 103, 240)" }}>85%</span></Box>
                  <LinearProgress variant="determinate" value={85} className={classes.progressbar_main} sx={{ [`& .${linearProgressClasses.bar}`]: { backgroundColor: "rgb(128, 103, 240)" } }} />
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className={classes.skill_right}>
              <img src={skill} alt="skill" className={classes.skill_image} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Skills
