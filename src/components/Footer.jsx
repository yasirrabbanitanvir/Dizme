import { Box, Container, Link } from '@mui/material';
import React from 'react'
import { useStyles } from '../Style'

const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.footer}>
      <Container maxWidth="lg">
        <Box className={classes.footer_box}>
          <Box className={classes.footer_box_left}>
            Copyright © 2024 <Link href="#">TechPhi IT</Link>. All Rights Reserved by Codelayers.
          </Box>
          <Box className={classes.footer_box_right}>
            <Link href="#">Terms & Condition</Link>
            <Link>Privacy Policy</Link>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer