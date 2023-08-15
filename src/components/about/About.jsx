import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'
import {FaAward} from 'react-icons/fa'
import {HiOutlineFolder} from 'react-icons/hi'
import {HiUserGroup} from 'react-icons/hi'

const About = () => {
  return (
    <section id='about'>
      <br></br>
      <br></br>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="About Image" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>1+ years</small>
              </article>
              <article className="about__card">
                <HiUserGroup className='about__icon'/>
                <h5>Clients</h5>
                <small>0 Clients</small>
              </article>
              <article className="about__card">
                <HiOutlineFolder className='about__icon'/>
                <h5>Project</h5>
                <small>4+ completed</small>
              </article>
            </div>
            <p>
            Engineering graduate with hands on experience on Java, python and an enthusiasm to learn Cloud Computing.
            During the learning, I have developed skills such as Java, python, backend development and exploring the field of clouds.
            </p>
            <a href="#contact" className="btn btn-primary">Let's Talk</a>
          </div>
        </div>
    </section>
  )
}

export default About