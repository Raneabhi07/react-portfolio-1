import React from 'react'
import './portfolio.css'
import img1 from '../../assets/img1.png'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img2 from '../../assets/img2.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <br></br>
      <br></br>
      <h2>My Portfolio</h2>
      <br></br>
      <div className="container portfolio_container">
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={img1} alt="" />
          </div>
          <h3>Calculator in Python</h3>
          <div className="portfolio__items-cta">
            <a href="https://github.com/" className='btn' target='_blank'>Github</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={img2} alt="" />
          </div>
          <h3>Wall Climbing Robot</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" className='btn' target='_blank'>Github</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={img3} alt="" />
          </div>
          <h3>Wire Cutting Machine</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" className='btn' target='_blank'>Github</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={img4} alt="" />
          </div>
          <h3>AI and ML</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" className='btn' target='_blank'>Github</a>
          </div>
        </article>
      </div>

    </section>
  )
}

export default Portfolio