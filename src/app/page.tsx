"use client"

import { Box, Container, Grid } from '@mui/material'
import styles from './page.module.css'
import Header from '../../components/Header'
import React from 'react';
import SideNav from '../../components/SideNav';
import WeatherWidget from '../../components/WeatherWidget';
import BarGraph from '../../components/BarGraph';
import PieChart from '../../components/PieChart';
import LineGraph from '../../components/LineGraph';
import CircleGraph from '../../components/CircleGraph';
import HorizontalGraph from '../../components/HorizontalGraph';
import Statistics from '../../components/Statistics';

export default function Home() {
  const [openNav, setOpenNav] = React.useState(false);

  return (
    <Box className={styles.main} id='background-element'>
      <Container>
        {/* Header */}
        <Header handleNav={() => setOpenNav(!openNav)} />
        {/* SideNav */}
        {openNav && <SideNav open={openNav} handleNav={() => setOpenNav(!openNav)} />}
        <Grid container sx={{ mt: 15 }}>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6} sx={{ alignItems: "left" }}>
            {/* Bar Graph */}
            <BarGraph />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={3} xl={3}></Grid>
          <Grid item xs={12} sm={12} md={12} lg={3} xl={3} sx={{ alignItems: "right" }}>
            {/* Weather Widget */}
            <WeatherWidget />
          </Grid>
        </Grid>
        <Grid container sx={{ mt: 2 }}>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            {/* Pie Chart */}
            <PieChart />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={3} xl={3}></Grid>
          <Grid item xs={12} sm={12} md={12} lg={3} xl={3} sx={{ textAlign: "-webkit-right", alignSelf: "end" }}>
            {/* Statistics */}
            <Statistics />
          </Grid>
        </Grid>
        <Grid container sx={{ mt: 2 }}>
          <Grid item xs={12} sm={12} md={12} lg={5} xl={5}>
            {/* Line Graph */}
            <LineGraph />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={3} xl={3} sx={{
            alignSelf: "end"
          }}>
            {/* Circle Graph */}
            <CircleGraph />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
            {/* Horizontal Graph */}
            <HorizontalGraph />
          </Grid>
        </Grid>
      </Container>
      <section className={styles["hero-section"]} style={{ display: "flex", justifyContent: "center", alignItems: "center" }} id="section_1">
        <div className={styles["video-wrap"]}>
          <video autoPlay loop muted className={styles["custom-video"]} poster="">
            <source src="./videos/video.mp4" type="video/mp4" />

            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </Box>
  )
}
