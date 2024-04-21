import React from 'react'
import './Hero.css'
import arrow_icon from '../Assets/arrow.png'
import hand_icon from '../Assets/hand_icon.png'
import hero_image from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>JUEGOS DE NUESTRA GENTE</h2>
            <div>
               <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={hand_icon} alt="" />
                </div> 
                <p>games</p>
                <p>4 everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Últimos juegos</div>
                <img src={arrow_icon} alt=""/>
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt=""/>

        </div>
    </div>
  )
}

export default Hero