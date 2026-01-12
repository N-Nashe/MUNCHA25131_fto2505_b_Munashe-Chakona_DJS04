import React from 'react'

// WhyChoose component
// - Edit `points` to control the bullet copy.
// - This section is deliberately simple to be easy to restyle.
export default function WhyChoose(){
  const points = [
    { title: 'Vetted professionals', desc: 'Experienced and reference-checked consultants ready to hit the ground running.' },
    { title: 'Commercial governance', desc: 'Clear commercial controls and reporting to manage cost and delivery risk.' },
    { title: 'Rapid deployment', desc: 'Fast resourcing to scale teams and close capability gaps quickly.' },
    { title: 'Performance managed', desc: 'Ongoing performance metrics and reviews to ensure sustained delivery.' },
  ]

  return (
    <section id="why" className="why-section" aria-label="Why choose TalentSpace">
      <div className="container">
        <h2>Why choose TalentSpace</h2>
        <div className="why-grid">
          {points.map(p => (
            <div key={p.title} className="why-card">
              <h3>{p.title}</h3>
              <p className="muted">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
