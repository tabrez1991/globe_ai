import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const Statistics = () => {
  return (
    <Container sx={{ position: "relative" }}>
      <Box sx={{
        width: "200px", height: "120px", border: "2px solid rgb(0 0 0 / 42%)", background: "rgb(0 0 0 / 42%)", p: 2, borderRadius: "4px",
        // position: "absolute", top: "420px", right: "0", 
        textAlign: "right"
      }}>
        <Typography sx={{ fontSize: "0.75rem" }}><span style={{ fontSize: "1.25rem" }}>S</span>TATISTICS</Typography>
        <Typography sx={{ fontSize: "0.75rem", color: "#aba3a3" }}>INDEX DESCRIPTION</Typography>
        <Typography sx={{ fontSize: "0.75rem" }}><span style={{ fontSize: "2rem", marginRight: "10px" }}>20</span>UNIT</Typography>
      </Box>
    </Container>
  )
}

export default Statistics