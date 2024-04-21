import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
        HOME <img src={arrow_icon} alt="" />
        COMPRAR <img src={arrow_icon} alt="" />
        <img src={arrow_icon} alt="" />
        {product.title}
    </div>
  )
}

export default Breadcrum