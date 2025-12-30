import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import './styles.css'

export default function App() {
  return (
    <div className="app-root">
      <Header />
      <main>
        <Hero />
        <Services />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
