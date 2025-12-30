import React, { useState } from 'react'

export default function ContactForm(){
  const [form, setForm] = useState({name:'', email:'', message:''})
  const handleChange = (e) => setForm({...form, [e.target.name]: e.target.value})
  const handleSubmit = (e) => {
    e.preventDefault()
    // For now we just log — we can hook this up to an API later
    console.log('Contact form submitted', form)
    alert('Thanks — we received your message (demo)')
    setForm({name:'', email:'', message:''})
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Contact us</h2>
        <p className="muted">Tell us about your resourcing needs and we’ll be in touch.</p>
        <form onSubmit={handleSubmit} className="contact-form">
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