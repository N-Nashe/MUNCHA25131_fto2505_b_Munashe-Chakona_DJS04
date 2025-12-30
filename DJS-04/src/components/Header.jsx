import React from 'react'
// Header component
// - Shows the logo and top navigation
// - Update `src/assets/logo-talentspace.svg` to replace the placeholder logo.
import Logo from '../assets/logo-talentspace.svg'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <a href="#" className="logo" aria-label="TalentSpace home">
          <img src={Logo} alt="TalentSpace logo" />
        </a>
        <nav className="nav" aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact" className="btn-outline">Contact</a>
        </nav>
      </div>
    </header>
  )
}