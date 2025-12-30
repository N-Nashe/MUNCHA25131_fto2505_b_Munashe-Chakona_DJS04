import React from 'react'

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-bg">
        <span className="blob b1" aria-hidden></span>
        <span className="blob b2" aria-hidden></span>
        <span className="blob b3" aria-hidden></span>
      </div>

      <div className="container hero-content">
        <h1>TalentSpace — Delivery-driven talent & consulting</h1>
        <p className="lead">We supply high-calibre professional resources for Project Management, PMO, Business Analysis, ERP (SAP, Dynamics 365), Software Development, Integration, Data, and Digital Transformation. We operate as a delivery partner — providing vetted consultants who are performance-managed and commercially aligned.</p>
        <div className="hero-ctas">
          <a className="btn-primary" href="#contact">Get Talent</a>
          <a className="btn-ghost" href="#services">Our Services</a>
        </div>
      </div>
    </section>
  )
}