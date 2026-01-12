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
            <h3>Our model</h3>
            <p className="muted">Flexible engagement models from day-rate contractors through to embedded teams and outcome-based delivery. We pair commercial governance with practical delivery experience.</p>
          </div>
          <div className="advantage">
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