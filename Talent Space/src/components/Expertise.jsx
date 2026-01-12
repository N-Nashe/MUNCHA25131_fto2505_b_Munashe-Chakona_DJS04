import React from 'react'

// Expertise component
// - This component renders the "Our expertise" section.
// - Edit the `cards` array to add / remove / change items and their descriptions.
// - Keep descriptions short and unique so they don't repeat.
export default function Expertise(){
  const cards = [
    {
      title: 'Project management & PMO',
      desc: 'End-to-end delivery leadership, governance and recovery to bring programmes back on track.'
    },
    { title: 'Business analysis', desc: 'Domain-led analysts who translate strategy into actionable requirements and value.' },
    { title: 'ERP solutions', desc: 'ERP architects & consultants across SAP and Dynamics to design and run large implementations.' },
    { title: 'Software development', desc: 'Full‑stack engineers delivering resilient, testable and cloud-ready systems.' },
    { title: 'Integration', desc: 'API-led integration and middleware expertise to connect complex enterprise landscapes.' },
    { title: 'Digital transformation', desc: 'Modernisation programs focused on people, process and platform to accelerate value.' },
  ]

  return (
    <section id="expertise" className="expertise-section" aria-label="Our expertise">
      <div className="container">
        <h2>Our expertise</h2>
        <p className="muted">Specialist talent aligned to the outcomes you need.</p>
        <div className="services-grid enhanced">
          {cards.map((c) => (
            <article key={c.title} className="service-card highlight">
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
