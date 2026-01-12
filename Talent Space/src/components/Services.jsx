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
            {/* Professional, centred icon — edit SVG here if you want a different symbol */}
            <span className="icon card-icon" aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12 2v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 20v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M4.9 4.9l1.4 1.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M17.7 17.7l1.4 1.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <h3>Our model</h3>
            <p className="muted">Flexible engagement models — day-rate contractors, embedded teams and outcome-based delivery paired with commercial governance.</p>
          </div>
          <div className="advantage">
            {/* Professional, centred icon — simple badge */}
            <span className="icon card-icon" aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12 2l2.9 5.9L21 9l-4 3.6L17.8 19 12 16.2 6.2 19 7 12.6 3 9l6.1-.1L12 2z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" strokeLinecap="round"/></svg>
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