import { Box, Container } from '@mui/material';
import React from 'react'
import { useStyles } from '../Style'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const GoogleMaps = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyARGQjXr2qmn5OEjqOOu8AQXMKGbpk5nTg"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const classes = useStyles();
  return (
    <Box className={classes.googleMap}>
      <Container maxWidth="lg">
        <Box className={classes.google_map_section}>
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
              onLoad={onLoad}
              onUnmount={onUnmount}
            >
              { /* Child components, such as markers, info windows, etc. */}
              <></>
            </GoogleMap>
          ) : <></>
          }
          fgfgfg
        </Box>
      </Container>
    </Box>
  )
}

export default GoogleMaps
