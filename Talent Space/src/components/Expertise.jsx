import React, { useState } from 'react'
import Modal from '../Modal'

// Expertise component with modal details
// - Click a card (or press Enter) to open a modal with more detail
// - Add / adjust the `details` field to change modal content
export default function Expertise(){
  const cards = [
    { title: 'Project management & PMO', desc: 'End-to-end delivery leadership and recovery to bring programmes back on track.', details: 'Our PMO and Project Management specialists run governance, recovery and delivery engagements. They lead programme plans, risk mitigation, stakeholder engagement and supplier management for long-running transformations.', icon: 'pm' },
    { title: 'Business analysis', desc: 'Analysts who translate strategy into actionable, testable requirements.', details: 'Our Business Analysts bring domain knowledge and strong elicitation skills — producing fit-for-purpose requirements, acceptance criteria, and ensuring alignment between stakeholders and delivery teams.', icon: 'ba' },
    { title: 'ERP solutions', desc: 'ERP architects across SAP and Dynamics for design and delivery.', details: 'ERP experts focusing on design, configuration, cutover and stabilisation for SAP and Dynamics 365. They bridge the gap between technical teams and business process owners to ensure smooth delivery.', icon: 'erp' },
    { title: 'Software development', desc: 'Engineers delivering resilient, cloud-ready systems and APIs.', details: 'From front-end UIs to backend APIs and platform automation — our engineers deliver testable, monitored and scalable solutions that meet enterprise SLAs.', icon: 'dev' },
    { title: 'Integration', desc: 'API-led integration and middleware expertise for complex landscapes.', details: 'Integration specialists design API-led architectures, secure messaging and reliable data flows between on-prem and cloud systems, prioritising reliability and observability.', icon: 'int' },
    { title: 'Digital transformation', desc: 'Modernisation programs focused on people, process and platform.', details: 'Transformation consultants help shape business cases, target operating models and delivery roadmaps — balancing quick wins with sustainable change.', icon: 'dx' },
  ]

  const [selected, setSelected] = useState(null)

  const Icon = ({ name }) => {
    switch(name){
      case 'pm': return (<span className="icon muted" aria-hidden><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="4" rx="1" fill="currentColor"/><rect x="3" y="10" width="10" height="10" rx="1" fill="currentColor"/></svg></span>)
      case 'ba': return (<span className="icon muted" aria-hidden><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16v2H4z" fill="currentColor"/><path d="M7 10h10v9H7z" fill="currentColor"/></svg></span>)
      case 'erp': return (<span className="icon muted" aria-hidden><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="3" fill="currentColor"/><circle cx="12" cy="12" r="3" fill="currentColor"/><circle cx="18" cy="6" r="3" fill="currentColor"/></svg></span>)
      case 'dev': return (<span className="icon muted" aria-hidden><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 6l-4 6 4 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 6l4 6-4 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg></span>)
      case 'int': return (<span className="icon muted" aria-hidden><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><path d="M12 3v18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg></span>)
      case 'dx':
      default: return (<span className="icon muted" aria-hidden><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12c4-6 12-6 18 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><path d="M3 16c4-6 12-6 18 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg></span>)
    }
  }

  return (
    <section id="expertise" className="expertise-section" aria-label="Our expertise">
      <div className="container">
        <h2>Our expertise</h2>
        <p className="muted">Specialist talent aligned to the outcomes you need.</p>
        <div className="services-grid enhanced">
          {cards.map((c) => (
            <article
              key={c.title}
              className="service-card fade-in"
              role="button"
              tabIndex={0}
              onClick={() => setSelected(c)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelected(c) }}
              aria-label={`${c.title} details`}
            >
              <Icon name={c.icon} />
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </article>
          ))}
        </div>
      </div>

      <Modal isOpen={!!selected} onClose={() => setSelected(null)} title={selected?.title}>
        <p className="muted">{selected?.desc}</p>
        <div style={{marginTop:12}}>
          <p>{selected?.details}</p>
        </div>
      </Modal>
    </section>
  )
}
