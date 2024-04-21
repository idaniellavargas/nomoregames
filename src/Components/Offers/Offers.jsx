import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusivo</h1>
        <h1>Para ti</h1>
        <p>NUESTRA SELECCIÓN</p>
        <button>Prueba ahora</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt=""/>
      </div>
    </div>
  )
}

export default Offers