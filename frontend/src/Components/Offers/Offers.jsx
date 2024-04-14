import './Offers.css';
import exclusive_image from '../Assests/exclusive_image.png';
import React from 'react'

const Offers = () => {
  return (
    <div className = "offers">
      <div className = "offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY THE BEST SELLING PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className = "offers-right">
        <img src = {exclusive_image} alt = ""></img>
      </div>
    </div>
  )
}

export default Offers