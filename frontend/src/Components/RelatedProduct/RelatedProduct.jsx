import React from 'react'
import data_product from '../Assests/data';
import './RelatedProduct.css'
import Item from '../Items/Items';

const RelatedProduct = () => {
  return (
    <div className='relatedproducts'>
        <h1>RELATED PRODUCTS</h1>
        <hr/>
        <div className = "collections-div">
            {
                data_product.map((item, i)=>{
                    return <Item key = {i} id = {item.id} name = {item.name} image = {item.image} new_price = {item.new_price} old_price = {item.old_price}/>
                })
            }
        </div>
    </div>
  )
}

export default RelatedProduct