import React from 'react'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <strong>TalentSpace</strong>
          <p className="muted">Delivery-driven talent & consulting</p>
        </div>
        <div className="footer-links">
          <a href="#contact">Contact</a>
          <a href="#services">Services</a>
        </div>
      </div>
      <div className="site-bottom">© {new Date().getFullYear()} TalentSpace — All rights reserved</div>
    </footer>
  )
}