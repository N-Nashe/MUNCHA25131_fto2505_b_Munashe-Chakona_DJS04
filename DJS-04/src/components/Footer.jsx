import React from 'react'

// Footer component
// - Small and accessible. Add social links or legal text here as needed.
export default function Footer(){
  return (
    <footer className="site-footer" role="contentinfo">
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