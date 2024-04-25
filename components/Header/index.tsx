import React from 'react'
import './styles.css'
import { Box, Container, Link } from '@mui/material'

const Header = () => {
  return (
    <Box sx={{ position: "absolute", zIndex: 22, top: 0, right: 0, left: 0, paddingTop: "30px", paddingBottom: "30px" }}>
      <Container>
        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }}>
          <Link sx={{ fontWeight: 700, color: "#fff", fontSize: "18px", display: "flex", justifyContent: "center", alignItems: "center" }} href="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box" viewBox="0 0 16 16">
              <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z" />
            </svg>
            <span style={{ marginLeft: "10px" }}>
              Globe AI
            </span>
          </Link>
          <ul className="social-icon d-flex justify-content-center align-items-center mx-auto">
            <span className="text-white me-4 d-none d-lg-block">Stay connected</span>

            <li className="social-icon-item">
              <a href="#" className="social-icon-link bi-instagram"></a>
            </li>

            <li className="social-icon-item">
              <a href="#" className="social-icon-link bi-twitter"></a>
            </li>

            <li className="social-icon-item">
              <a href="#" className="social-icon-link bi-whatsapp"></a>
            </li>
          </ul>

          <div>
            <a href="#" className="custom-btn custom-border-btn btn" data-bs-toggle="modal" data-bs-target="#subscribeModal">Notify me
              <i className="bi-arrow-right ms-2"></i>
            </a>
          </div>

          <a className="bi-list offcanvas-icon" data-bs-toggle="offcanvas" href="#offcanvasMenu" role="button" aria-controls="offcanvasMenu"></a>


        </Box>
      </Container>
    </Box>
  )
}

export default Header