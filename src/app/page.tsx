"use client"

import { Box } from '@mui/material'
import styles from './page.module.css'
import Header from '../../components/Header'
import React from 'react';
import SideNav from '../../components/SideNav';

export default function Home() {
  const [openNav, setOpenNav] = React.useState(false);

  return (
    <Box className={styles.main} id='background-element'>
      {/* Header */}
      <Header handleNav={() => setOpenNav(!openNav)} />
      {openNav && <SideNav open={openNav} handleNav={() => setOpenNav(!openNav)} />}


      {/* <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex={-1} id="offcanvasMenu" aria-labelledby="offcanvasMenuLabel">
        <div className="offcanvas-header">
          <button type="button" className="btn-close ms-auto" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <div className="offcanvas-body d-flex flex-column justify-content-center align-items-center">
          <nav>
            <ul>
              <li>
                <a href="login.html">Login Form</a>
              </li>

              <li>
                <a href="register.html">Create an account</a>
              </li>

              <li>
                <a href="password-reset.html">Password Reset</a>
              </li>

              <li>
                <a href="404.html">404 Page</a>
              </li>

              <li>
                <a href="contact.html">Contact Form</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>


      <div className="modal fade" id="subscribeModal" tabIndex={-1} aria-labelledby="subscribeModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">

              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="modal-body">
              <form action="#" method="get" className="custom-form mt-lg-4 mt-2" role="form">
                <h2 className="modal-title" id="subscribeModalLabel">Stay up to date</h2>

                <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="your@email.com" required />

                <button type="submit" className="form-control">Notify</button>
              </form>
            </div>

            <div className="modal-footer justify-content-center">
              <p>By signing up, you agree to our Privacy Notice</p>
            </div>
          </div>
        </div>
      </div>*/}


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
