"use client"

import { Box } from '@mui/material'
import styles from './page.module.css'
import Header from '../../components/Header'
import React from 'react';
import SideNav from '../../components/SideNav';
import WeatherWidget from '../../components/WeatherWidget';
import BarGraph from '../../components/BarGraph';
import PieChart from '../../components/PieChart';
import LineGraph from '../../components/LineGraph';

export default function Home() {
  const [openNav, setOpenNav] = React.useState(false);

  return (
    <Box className={styles.main} id='background-element'>
      {/* Header */}
      <Header handleNav={() => setOpenNav(!openNav)} />

      {/* SideNav */}
      {openNav && <SideNav open={openNav} handleNav={() => setOpenNav(!openNav)} />}

      {/* Weather Widget */}
      <WeatherWidget />

      {/* Bar Graph */}
      <BarGraph />

      {/* Pie Chart */}
      <PieChart />

      {/* Line Graph */}
      <LineGraph />
      
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
