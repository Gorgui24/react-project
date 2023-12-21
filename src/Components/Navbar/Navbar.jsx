import React, { useState } from 'react'
import './Navbar.css'

import cart_icon from '../Assets/cart_icon.png'
import logo from '../Assets/cart_icon.png'
import marque from '../Assets/logo.png'
import { Link } from 'react-router-dom'
export const Navbar = () => {
    const [menu, setMenu] = useState("shop");
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={marque} alt="" />
            <p>NET SHOP</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link to='/' style={{ textDecoration: 'none'}}>Accueil</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("laptop")}}><Link to='/laptop'  style={{ textDecoration: 'none'}}>ORDINATEURS</Link>{menu==="laptop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("printer")}}><Link to='/printer'  style={{ textDecoration: 'none'}}>IMPRIMANTES / PHOTOCOPIEUSES</Link>{menu==="printer"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("ass")}}><Link to='/ass'  style={{ textDecoration: 'none'}}>ACESSOIRES</Link>{menu==="ass"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
        <Link to='/login'><button>Connectez - vous</button></Link>
        <Link to='/cart'><img src={logo} alt="" /></Link>
            <div className='nav-cart-count'>0</div>
        </div>

    </div>
  )
}
