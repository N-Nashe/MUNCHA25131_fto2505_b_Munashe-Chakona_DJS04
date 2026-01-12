import React, { useState } from 'react'

// Contact component
// - Replace the demo submit handler with a server-side integration for production
export default function Contact(){
  const [form, setForm] = useState({name:'', email:'', message:''})
  const handleChange = (e) => setForm({...form, [e.target.name]: e.target.value})
  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Hook this up to a serverless function / API endpoint
    console.log('Contact form submitted', form)
    alert('Thanks — we received your message (demo)')
    setForm({name:'', email:'', message:''})
  }

  return (
    <section id="contact" className="contact-section" aria-label="Contact">
      <div className="container">
        <h2>Contact us</h2>
        <p className="muted">Tell us about your resourcing needs and we’ll be in touch.</p>

        {/* Quick contact details above the form so visitors can email directly */}
        <div className="contact-info" style={{marginBottom:12}}>
          <p className="muted">Email: <a href="mailto:hello@talentspace.example">hello@talentspace.example</a> · Phone: +44 20 0000 0000</p>
        </div>

        <form onSubmit={handleSubmit} className="contact-form" name="contact">
          <label>
            <span>Name</span>
            <input name="name" value={form.name} onChange={handleChange} required />
          </label>
          <label>
            <span>Email</span>
            <input name="email" type="email" value={form.email} onChange={handleChange} required />
          </label>
          <label>
            <span>Message</span>
            <textarea name="message" value={form.message} onChange={handleChange} rows="5" required />
          </label>
          <button className="btn-primary" type="submit">Send message</button>
        </form>
      </div>
    </section>
  )
}