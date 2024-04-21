import React from 'react'
import './CSS/LoginSignup.css'
export const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Crear cuenta</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Tu nombre' />
          <input type="email" placeholder='Correo' />
          <input type="password" placeholder='Contraseña' />

        </div>
          <button>Continuar</button>
          <p className='loginsignup-login'>Ya tienes una cuenta? <span>Inicia sesión aquí</span></p>
          <div className="loginsignup-agree">
            <input type="checkbox" name='' id='' />
            <p>Al continuar, estoy aceptando los términos de uso y de privacidad.</p>
          </div>
      </div>
    </div>
  )
}

export default LoginSignup