import React from 'react'

// Expertise component
// - Edit the `cards` array to change titles, descriptions or icons.
// - Icons are simple inline SVGs to keep the file self-contained and easy to edit.
export default function Expertise(){
  const cards = [
    { title: 'Project management & PMO', desc: 'End-to-end delivery leadership and recovery to bring programmes back on track.', icon: 'pm' },
    { title: 'Business analysis', desc: 'Analysts who translate strategy into actionable, testable requirements.', icon: 'ba' },
    { title: 'ERP solutions', desc: 'ERP architects across SAP and Dynamics for design and delivery.', icon: 'erp' },
    { title: 'Software development', desc: 'Engineers delivering resilient, cloud-ready systems and APIs.', icon: 'dev' },
    { title: 'Integration', desc: 'API-led integration and middleware expertise for complex landscapes.', icon: 'int' },
    { title: 'Digital transformation', desc: 'Modernisation programs focused on people, process and platform.', icon: 'dx' },
  ]

  const Icon = ({ name }) => {
    // Simple set of icons — replace the svg paths if you prefer other visuals
    switch(name){
      case 'pm':
        return (
          <span className="icon" aria-hidden>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="4" rx="1" fill="currentColor"/><rect x="3" y="10" width="10" height="10" rx="1" fill="currentColor"/></svg>
          </span>
        )
      case 'ba':
        return (
          <span className="icon" aria-hidden>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16v2H4z" fill="currentColor"/><path d="M7 10h10v9H7z" fill="currentColor"/></svg>
          </span>
        )
      case 'erp':
        return (
          <span className="icon" aria-hidden>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="3" fill="currentColor"/><circle cx="12" cy="12" r="3" fill="currentColor"/><circle cx="18" cy="6" r="3" fill="currentColor"/></svg>
          </span>
        )
      case 'dev':
        return (
          <span className="icon" aria-hidden>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 6l-4 6 4 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 6l4 6-4 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
        )
      case 'int':
        return (
          <span className="icon" aria-hidden>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><path d="M12 3v18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
          </span>
        )
      case 'dx':
      default:
        return (
          <span className="icon" aria-hidden>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12c4-6 12-6 18 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><path d="M3 16c4-6 12-6 18 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
          </span>
        )
    }
  }

  return (
    <section id="expertise" className="expertise-section" aria-label="Our expertise">
      <div className="container">
        <h2>Our expertise</h2>
        <p className="muted">Specialist talent aligned to the outcomes you need.</p>
        <div className="services-grid enhanced">
          {cards.map((c) => (
            <article key={c.title} className="service-card fade-in">
              <Icon name={c.icon} />
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
