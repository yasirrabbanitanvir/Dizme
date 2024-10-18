import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { testimonialsData } from '../data'; 

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: "linear",
  };

  return (
    <Box style={{ padding: '32px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
      <Container maxWidth="lg">
        <Box style={{ textAlign: 'center', marginBottom: '32px' }}>
          <Typography variant="h5" component="h5" style={{ fontSize: '20px', color: '#555', fontWeight: '400' }}>
            Testimonials
          </Typography>
          <Typography variant="h2" component="h2" style={{ fontSize: '40px', fontWeight: '700', color: '#333' }}>
            What My Clients Say
          </Typography>
          <Typography variant="h5" component="p" style={{ fontSize: '18px', color: '#666' }}>
            Most common methods for designing websites that work well on desktop are responsive and adaptive design.
          </Typography>
        </Box>

        <Box style={{ marginTop: '24px' }}>
          <Slider {...settings}>
            {testimonialsData.map((testimonial, index) => (
              <Box key={index} style={{
                padding: '16px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                textAlign: 'center',
                backgroundColor: '#fff',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Box style={{ fontSize: '32px', color: '#ff5722', marginBottom: '8px' }}>
                  <i className="fa fa-quote-left" aria-hidden="true"></i>
                </Box>
                <Box style={{ fontSize: '16px', color: '#444', marginBottom: '16px', fontStyle: 'italic' }}>
                  {testimonial.text}
                </Box>
                <Box style={{ marginTop: '16px', textAlign: 'center' }}>
                  <Typography variant="h3" component="h4" style={{ fontSize: '20px', fontWeight: '600', color: '#333' }}>
                    {testimonial.name}
                  </Typography>
                  <Typography variant="h5" component="h5" style={{ fontSize: '16px', fontWeight: '400', color: '#777' }}>
                    {testimonial.title}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Slider>
          <br />
          <br />
          <br />
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;