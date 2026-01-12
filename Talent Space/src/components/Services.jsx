import React from 'react'
import Expertise from './Expertise'
import WhyChoose from './WhyChoose'
import ScaleCTA from './ScaleCTA'

// Services (refactored)
// - This file now explains "Our model" and "Your advantage" then renders the
//   'Our expertise' cards, 'Why choose' section and the main CTA.
// - Update copy below to change the model or advantage bullets.
export default function Services() {
  return (
    <section id="services" className="services-section" role="region" aria-label="What we do">
      <div className="container">
        <h2>What we do</h2>
        <p className="muted">We partner with organisations to supply delivery-critical roles on contract, project or fixed-term engagements.</p>

        {/* Our model / Your advantage */}
        <div className="model-adv">
          <div className="model">
            <span className="icon muted" aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
            </span>
            <h3>Our model</h3>
            <p className="muted">Flexible engagement models — day-rate contractors, embedded teams and outcome-based delivery paired with commercial governance.</p>
          </div>
          <div className="advantage">
            <span className="icon" aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3 6 6 .5-4.5 4 1 6-5.5-3L7 19l1-6L3.5 9.5 10 9 12 2z" fill="currentColor"/></svg>
            </span>
            <h3>Your advantage</h3>
            <ul className="adv-list muted">
              <li>Fast access to experienced practitioners</li>
              <li>Commercial clarity and structured governance</li>
              <li>Fit-for-purpose teams tailored to your objectives</li>
            </ul>
          </div>
        </div>

      </div>

      {/* Our expertise (moved cards) */}
      <Expertise />

      {/* Why choose TalentSpace */}
      <WhyChoose />

      {/* CTA */}
      <ScaleCTA />
    </section>
  )
}