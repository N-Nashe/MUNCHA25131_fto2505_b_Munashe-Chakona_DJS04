import React from 'react'
import Logo from '../assets/logo.svg'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <a href="#" className="logo" aria-label="TalentSpace home">
          <img src={Logo} alt="TalentSpace logo" />
        </a>
        <nav className="nav">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact" className="btn-outline">Contact</a>
        </nav>
      </div>
    </header>
  )
}