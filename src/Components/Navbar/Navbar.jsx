import './Navbar.css'
import React, {useState} from 'react' 
import {Link} from 'react-router-dom' 
import cart_icon from '../Assets/cart_icon.png'
export const Navbar = () => {

   const [menu, setMenu]= useState("shop");

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={"/Assets/logo.png"} alt=""/>
            <p>NOMOREGAMES</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Comprar</Link >{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("classics")}}><Link style={{textDecoration:'none'}} to='/classics'>Clásicos</Link >{menu==="classics"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("edus")}}><Link style={{textDecoration:'none'}} to='/edus'>Educativos</Link >{menu==="edus"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mobiles")}}><Link style={{textDecoration:'none'}} to='/mobiles'>Móvil</Link >{menu==="mobiles"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link style={{textDecoration:'none'}} to='/register'><button>Inicia Sesión</button></Link >
            <Link style={{textDecoration:'none'}} to='/cart'><img src={cart_icon} alt=""/></Link >
            <div className="nav-cart-count">
                0
            </div>
        </div>
    </div>
  )
}

export default Navbar;