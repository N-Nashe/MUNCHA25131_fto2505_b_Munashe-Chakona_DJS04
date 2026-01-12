import React from 'react'

// Footer component
// - Redesigned to provide a clear services list and contact info.
// - Change copy or add links below as needed. Keep contact email in one place for updates.
export default function Footer(){
  const services = ['Project management & PMO','Business analysis','ERP solutions','Software development','Integration','Digital transformation']
  return (
    <footer className="site-footer dark" role="contentinfo">
      <div className="container footer-inner">
        <div className="footer-brand">
          <strong>TalentSpace</strong>
          <p className="muted">Delivery-driven talent & consulting</p>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              {services.map(s => <li key={s}><a href="#expertise">{s}</a></li>)}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <p className="muted">Email us: <a href="mailto:hello@talentspace.example">hello@talentspace.example</a></p>
            <p className="muted">Phone: +44 20 0000 0000</p>
          </div>

          <div className="footer-col social">
            <h4>Follow</h4>
            <div className="social-links">
              <a href="#" aria-label="Twitter">Twitter</a>
              <a href="#" aria-label="LinkedIn">LinkedIn</a>
            </div>
          </div>
        </nav>

      </div>
      <div className="site-bottom">© {new Date().getFullYear()} TalentSpace — All rights reserved</div>
    </footer>
  )
}