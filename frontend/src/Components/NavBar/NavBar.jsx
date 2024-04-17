import React, { useState } from 'react'
import "./NavBar.css"
import logo from '../Assests/logo.png'
import cart_icon from '../Assests/cart_icon.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'

const NavBar = () => {

  const {getTotalCartItems} = useContext(ShopContext);

  const [menu, setMenu] = useState("shop");

  return (
    <div className='navbar'>
        <div className = 'nav-logo'>
            <img src = {logo} alt = "Logo"/>
                <Link style = {{textDecoration: 'none'}} to = '/'><p>SHOPPER</p></Link>
        </div>
        <ul className = 'nav-menu'>
          <li onClick={()=>{setMenu('shop')}}><Link style = {{ textDecoration:'none'}}to = '/'>Shop</Link> {menu === "shop" ? <hr/> : <></>}</li>
            <li onClick={()=>{setMenu('mens')}}><Link style = {{ textDecoration:'none'}} to = '/mens'>Mens</Link> {menu === "mens" ? <hr/> : <></>}</li>
            <li onClick={()=>{setMenu('womens')}}> <Link style = {{ textDecoration:'none'}} to = '/womens'>Womens</Link> {menu === "womens" ? <hr/> : <></>}</li>
            <li onClick={()=>{setMenu('kids')}}><Link style = {{ textDecoration:'none'}} to = '/kids'>Kids</Link> {menu === "kids" ? <hr/> : <></>}</li>
        </ul>
        <div className='nav-login-cart'>
            <Link to = '/login'><button>Login</button></Link>
            <Link to = '/cart'><img src={cart_icon} alt='cart'/></Link>
            <div className='nav-cart-count'>{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default NavBar