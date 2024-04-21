import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Consigue ofertas exclusivas en tu correo</h1>
        <p>Suscríbete a nuestra newsletter y mantente actualizad@</p>
        <div>
            <input type="email" placeholder='Tu correo electrónico'/>
            <button>Suscríbete</button>
        </div>
    </div>
  )
}

export default NewsLetter