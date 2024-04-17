import React from 'react'
import './CartItems.css';
import { useContext, useState } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from "../Assests/cart_cross_icon.png";


const CartItems = () => {
    const {getTotalCartAmount, all_product, cartItem, addToCart, removeFromCart, total, setTotal} = useContext(ShopContext);


  return (
    <div className = "cartitems">
        <div className='cartitems-format-main'>
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
        {
            all_product.map((e)=>{
                if(cartItem[e.id] > 0)
                {
                    return <div>
                            <div className = 'cartitems-format cartitems-format-main'>
                                <img src = {e.image} alt = "" className='carticon-product-icon'/>
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitems-quantity'>{cartItem[e.id]}</button>
                                <p>${e.new_price * cartItem[e.id]}</p>
                                <img className='cartitems-remove' src = {remove_icon} onClick={()=>removeFromCart(e.id, e.new_price)} alt = ""/>
                            </div>
                            <hr/>
                        </div>
                }
                return null;
            })
        }

        <div className ='cartitems-down'>
            <div className='cartitems-total'>
                <h1>Cart Total</h1>
                <div>
                    <div className = 'cartitems-total-item'>
                        <p>Subtotal</p>
                        <p>${total}</p>
                    </div>
                    <hr/>
                    <div className='cartitems-total-item'>
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr/>
                    <div className='cartitems-total-item'>
                        <h3>Total</h3>
                        <h3>${total}</h3>
                    </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className='cartitems-promocode'>
                <p>If you have a promocode, Enter it here</p>
                <div className='cartitems-promobox'>
                    <input type="text" placeholder='Enter Promocode'/>
                    <button>Submit</button>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default CartItems