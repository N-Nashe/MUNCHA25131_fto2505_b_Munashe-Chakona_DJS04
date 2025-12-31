import React from 'react'

// Services grid
// - Add/remove services in the `services` array
export default function Services() {
  const services = [
    'Project Management',
    'PMO',
    'Business Analysis',
    'ERP (SAP, Dynamics 365)',
    'Software Development',
    'Integration',
    'Data',
    'Digital Transformation',
  ]

  return (
    <section id="services" className="services-section" role="region" aria-label="Services">
      <div className="container">
        <h2>What we do</h2>
        <p className="muted">We partner with organisations to supply delivery-critical roles on contract, project or fixed-term engagements.</p>
        <div className="services-grid">
          {services.map((s) => (
            <div key={s} className="service-card">
              <h3>{s}</h3>
              <p>Experienced consultants ready to join and deliver across the full lifecycle — implementations, BAU augmentation, project recovery and specialist interventions.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}