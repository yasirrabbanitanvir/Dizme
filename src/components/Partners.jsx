import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { partnersData } from '../data'; 

const Partner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      }
    ]
  };

  return (
    <Box style={{ padding: '15px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
      <Container maxWidth="lg">
        <Box style={{ textAlign: 'center', marginBottom: '32px' }}>
          <Typography variant="h2" component="h2" style={{ fontSize: '40px', fontWeight: '700', color: '#333' }}>
            Our Partners
          </Typography>
        </Box>

        <Box style={{ marginTop: '24px' }}>
          <Slider {...settings}>
            {partnersData.map((partner, index) => (
              <Box key={index} style={{
                padding: '16px',
                textAlign: 'center',
                backgroundColor: '#fff',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              }}>
                <img src={partner.logo} alt={partner.name} style={{ maxWidth: '80%', height: 'auto', marginBottom: '16px' }} />
                <Typography variant="h5" component="h5" style={{ fontSize: '16px', fontWeight: '400', color: '#333' }}>
                  {partner.name}
                </Typography>
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

export default Partner;