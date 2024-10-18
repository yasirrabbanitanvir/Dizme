import { Box } from '@mui/material';
import React from 'react'
import ScrollToTop from "react-scroll-to-top";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useStyles } from '../Style'

const ScrollToTops = () => {
    const classes = useStyles();
  return (
    <Box>
      <ScrollToTop smooth top="1000" component={<ArrowUpwardIcon />} className={classes.scroll_to_top} />
    </Box>
  )
}

export default ScrollToTops
