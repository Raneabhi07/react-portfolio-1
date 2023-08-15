import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/profile.png'
import Headersocials from './Headersocials'

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Abhijeet Rane</h1>
        <h5 className="text-light">Java Developer</h5>
        <CTA/>
        <Headersocials />
        <div className='me'>
          <img src={me} alt="me" />
        </div>
        <a href="#contact" className='Scroll_down' Scroll Down>Scroll Down</a>
      </div>
    </header>

  )
}

export default Header