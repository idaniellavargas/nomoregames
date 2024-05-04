import React, { useState } from 'react'
import './CSS/LoginSignup.css'
import {Link} from 'react-router-dom' 

export const LoginSignup = () => {

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  };

  const send = () => {
    const today = new Date();
    const parsedForm = {
      ...form,
      registrationdate: today.toLocaleDateString()
    }
    
    console.log(parsedForm);

    console.log(JSON.stringify(parsedForm));

    fetch('http://65.52.218.65/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(parsedForm),
    })
    .then(data => {
      console.log('Success:', data);
      if(data.status !== 500) setIsSubmitted(true);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  if(!isSubmitted) return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Crear cuenta</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Nombre de usuario' name='username' value={form.username} onChange={handleChange}/>
          <input type="email" placeholder='Correo' name='email' value={form.email} onChange={handleChange}/>
          <input type="password" placeholder='Contraseña' name='password' value={form.password} onChange={handleChange}/>
        </div>
          <button onClick={send}>Continuar</button>
          <p className='loginsignup-login'>Ya tienes una cuenta? <Link style={{textDecoration:'none'}} to='/login'>Inicia sesión aquí</Link></p>
          <div className="loginsignup-agree">
            <input type="checkbox" name='' id='' />
            <p>Al continuar, estoy aceptando los términos de uso y de privacidad.</p>
          </div>
      </div>
    </div>
  );
  else return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Registro extioso</h1>
          <button>Inicia sesion aqui</button>
      </div>
    </div>
  );
}

export default LoginSignup