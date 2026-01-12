import React from 'react'

// ScaleCTA component
// - Simple, editable CTA card. Update headings and buttons easily.
export default function ScaleCTA(){
  return (
    <section id="scale" className="scale-section" aria-label="Scale delivery capability">
      <div className="container">
        <div className="scale-card">
          <h2>Ready to scale delivery capability?</h2>
          <p className="muted">From project recovery to transformation — we deliver the talent you need, when you need it.</p>
          <div className="scale-actions">
            <a className="btn-primary" href="#contact">Schedule consultation</a>
            <a className="btn-ghost" href="#case-studies">View case studies</a>
          </div>
        </div>
      </div>
    </section>
  )
}
