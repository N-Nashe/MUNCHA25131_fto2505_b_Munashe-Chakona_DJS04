import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

// Home page
// - This is the primary page composed of shared components.
// - If you later add `react-router`, point `/` to this component.
export default function Home(){
  return (
    <div className="app-root">
      <Header />
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}