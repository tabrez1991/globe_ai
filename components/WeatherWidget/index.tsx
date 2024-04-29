import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const WeatherWidget = () => {
  const [locationInfo, setLocationInfo] = React.useState<any>(null);

  React.useEffect(() => {
    // Check if geolocation is supported by the browser
    if ("geolocation" in navigator) {
      // Get user's current position
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Call API to get city/state information based on latitude and longitude
        fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
          .then(response => response.json())
          .then(data => {
            // Update state with city/state information
            setLocationInfo({
              city: data.city,
              state: data.principalSubdivision
            });
          })
          .catch(error => {
            console.error('Error fetching location:', error);
          });
      }, (error) => {
        console.error('Error getting geolocation:', error);
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <Container sx={{ position: "relative" }}>
      <Box sx={{
        width: "250px", border: "2px solid #000", background: "#000000b3", p: 2, borderRadius: "4px",
        // position: "absolute", top: "150px", right: "2%"
      }}>
        <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
          <Typography sx={{ color: "#ffa40e", mr: 2, fontSize: "1.5rem" }}><i className="ri-map-pin-fill"></i></Typography>
          <Typography sx={{ fontSize: "1.5rem" }}>{locationInfo?.city}</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 1 }}>
          <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
            <Typography sx={{ color: "#fff", mr: 1, fontSize: "0.75rem" }}><i className="ri-circle-fill"></i></Typography>
            <Typography sx={{ fontSize: "0.75rem" }}>INDEX: 123</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
            <Typography sx={{ color: "#fff", mr: 1, fontSize: "0.75rem" }}><i className="ri-circle-fill"></i></Typography>
            <Typography sx={{ fontSize: "0.75rem" }}>INDEX: 123</Typography>
          </Box>
        </Box>
      </Box >
    </Container>
  )
}

export default WeatherWidget