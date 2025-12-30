import React from 'react'

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

export default function Services() {
  return (
    <section id="services" className="services-section">
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