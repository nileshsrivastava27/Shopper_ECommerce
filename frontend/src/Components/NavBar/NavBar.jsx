import React from 'react'
import "./NavBar.css"
import logo from '../Assests/logo.png'
import cart_icon from '../Assests/cart_icon.png'

const NavBar = () => {
  return (
    <div className='navbar'>
        <div className = 'nav-logo'>
            <img src = {logo} alt = "Logo"/>
                <p>SHOPPER</p>
        </div>
        <ul className = 'nav-menu'>
            <li>Shop <hr/></li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
        </ul>
        <div className='nav-login-cart'>
            <button>Login</button>
            <img src={cart_icon} alt='cart'/>
            <div className='nav-cart-count'>0</div>
        </div>
    </div>
  )
}

export default NavBar