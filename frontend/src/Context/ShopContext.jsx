import React, {createContext} from 'react';
import all_product from '../Components/Assests/all_product'
import { useState } from 'react';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
         cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {

    const [cartItem, setCartItem] = useState(getDefaultCart());

    const [total, setTotal] = useState(0);
    
    // console.log(cartItem)
    
    const addToCart = (itemId, itemPrice) => {
        setCartItem((prev) => ({...prev, [itemId]:prev[itemId]+1}))
        setTotal(prev => prev + itemPrice)
        console.log(cartItem);
    }
    const removeFromCart = (itemId, itemPrice) => {
        setCartItem((prev) => ({...prev, [itemId]:prev[itemId]-1}))
        setTotal(prev => prev - itemPrice)
    }

    const getTotalCartAmount = () => {
        let total = 0;
        for(const item in cartItem)
        {
            if(cartItem[item] > 0)
            {
                let itemInfo = all_product.find((product)=> product.id === Number(item))
                total += itemInfo.new_price * cartItem[item];
            }
            return total;
        }
    }

    const getTotalCartItems = () =>{
        let total = 0;
        for(const item in cartItem)
        {
            if(cartItem[item] > 0)
            {
                total += cartItem[item];
            }
        }

        return total;
    }
    
    const contextValue = {getTotalCartItems, getTotalCartAmount, all_product, cartItem, addToCart, removeFromCart, total, setTotal};


    return (
        <ShopContext.Provider value = {contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}


export default ShopContextProvider;