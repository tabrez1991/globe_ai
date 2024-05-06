"use client"

import { Box, Container, Grid, TextareaAutosize } from '@mui/material'
import styles from '../page.module.css'
import Header from '../../../components/Header'
import React from 'react';
import SideNav from '../../../components/SideNav';
import Image from 'next/image';

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
          <Grid item xs={12} sm={12} md={12} lg={4} xl={4} sx={{ alignItems: "left" }}>
            {/* pulse rate */}
            <Image src='/images/pulse-rate.png' alt='pulse rate' width="400" height={200} />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={4} xl={4}></Grid>
          <Grid item xs={12} sm={12} md={12} lg={4} xl={4} sx={{ alignItems: "right" }}>
            {/* Blood Pressure */}
            <Image src='/images/bloodPressure.png' alt='pulse rate' width="400" height={200} />
          </Grid>
        </Grid>
        <Grid container sx={{ mt: 2 }}>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={3} xl={3}></Grid>
          <Grid item xs={12} sm={12} md={12} lg={3} xl={3} sx={{ textAlign: "-webkit-right", alignSelf: "end" }}>
            <TextareaAutosize name="Outlined" placeholder="Type in here…" autoFocus style={{ background: "rgb(75 70 70 / 42%)", width: "100%", padding: "8px" }} maxRows={3} minRows={3} />
          </Grid>
        </Grid>
        <Grid container sx={{ mt: 2 }}>
          <Grid item xs={12} sm={12} md={12} lg={5} xl={5}>
            {/* Body Temprature */}
            <Image src='/images/bodyTemprature.png' alt='pulse rate' width="400" height={300} />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={3} xl={3} sx={{
            alignSelf: "end"
          }}>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
            <Image src='/images/breathingRate.png' alt='pulse rate' width="400" height={300} />

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
