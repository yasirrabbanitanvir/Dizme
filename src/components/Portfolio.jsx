import React, { useState } from 'react'
import { useStyles } from '../Style'
import { Box, Grid, Link, Typography, Container } from '@mui/material';
import portfolio_laft from '../image/portfolio_laft.png'
import postfolio_right from '../image/postfolio_right.png'
import {portfolio} from '../data'

const allCatValues = ["All",...new Set(portfolio.map((curElm)=> curElm.catagory))];

const Portfolio = () => {
  const[items, setItems]=useState(portfolio);
  const [catItems,setCatItems] = useState(allCatValues);

  const filterPortfolio = (category) => {
    if(category === "All"){
      setItems(portfolio);
      return;
    }
    const updatedItems = portfolio.filter((curElem)=>{
      return curElem.catagory === category;
    })
    setItems(updatedItems);
  }
  const classes = useStyles();
  return (
    <Box className={classes.portfolio} id="portfolio">
      <Box className={classes.portfolio_section_left_image}> <img src={portfolio_laft} alt="about" className={classes.about_left_image} /></Box>
      <Container maxWidth="lg">
        <Box className={`${classes.common_text_area} ${classes.portfolio_text_area}`}>
          <Typography variant="h5" component="h5" className={classes.common_text_area_subtitle}>
            Portfolio
          </Typography>
          <Typography variant="h2" component="h2" className={classes.common_text_area_title}>
            My Amazing Works
          </Typography>
          <Typography variant="h5" component="p" className={classes.common_text_area_description}>
            Most common methods for designing websites that work well on desktop is responsive and adaptive design
          </Typography>
        </Box>
        <Box className={classes.portfolio_button_group}>
          {catItems.map((item,index)=>(
            <Link href="javascript:void(0)" key={index} onClick={() => filterPortfolio(item)} className={classes.portfolio_link}>{item}</Link>
          ))}
          
        </Box>
        <Box className={classes.portfolio_box_section}>
          <Grid container spacing={2}>

            {items.map((item,index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box sx={{ position: "relative", overflow: "hidden", borderRadius: "12px" }}>
                  <Box className={classes.portfolio_image_box}>
                    <img src={item.img} alt="" className={classes.portfolio_image_box_image} />
                  </Box>
                  <Link href={item.link} className={classes.portfolio_text_link}>
                    <Box className={classes.portfolio_text_box}>
                      <Box className={classes.portfolio_text_box_area}>
                        <Typography variant="h2" component="h2" className={classes.portfolio_text_box_title}>
                          {item.title}
                        </Typography>
                        <Typography variant="h5" component="p" className={classes.portfolio_text_box_description}>
                          Visit
                        </Typography>
                      </Box>
                    </Box>
                  </Link>
                </Box>
              </Grid>
            ))}

          </Grid>
        </Box>
      </Container>
      <Box className={classes.portfolio_section_right_image}> <img src={postfolio_right} alt="about" className={classes.about_right_image} /></Box>
    </Box>
  )
}

export default Portfolio
