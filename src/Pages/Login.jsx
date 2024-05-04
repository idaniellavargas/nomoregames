import React, { useState } from 'react'
import './CSS/LoginSignup.css'
import { Link } from 'react-router-dom'

export const Login = () => {

  const [user, setUser] = useState(0);

  const [form, setForm] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  };

  const back = () => {
    setUser(0);
  }

  const send = () => {
    const queryParams = new URLSearchParams({
      ...form,
    });

    console.log(`http://65.52.218.65/api/users?${queryParams}`);

    fetch(`http://65.52.218.65/api/users?${queryParams}`, {
      method: 'get',
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      if(data.length === 0) setUser(1);
      else setUser(2);
      console.log(user);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
  if(user === 0) return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Iniciar Sesion</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Nombre de usuario' name='username' value={form.name} onChange={handleChange}/>
          <input type="password" placeholder='Contraseña' name='password' value={form.password} onChange={handleChange}/>
        </div>
          <button onClick={send}>Continuar</button>
          <p className='loginsignup-login'>No tienes una cuenta? <Link style={{textDecoration:'none'}} to='/register'>Registrate aquí</Link></p>
          <div className="loginsignup-agree">
            <input type="checkbox" name='' id='' />
            <p>Al continuar, estoy aceptando los términos de uso y de privacidad.</p>
          </div>
      </div>
    </div>
  )
  else if(user === 1) return(
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1 className='message'>Usuario no encontrado</h1>
        <button onClick={back}>Volver</button>
      </div>
    </div>
  )
  else if(user === 2) return(
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1 className='message'>Usuario encontrado</h1>
        <button>Continuar</button>
      </div>
    </div>
  )
}

export default Login;