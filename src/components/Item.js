import React from "react";
import { useState } from 'react';



function Item({ name, category }) {
  
  const [itemChange, setItemChange] = useState(true)
  const addToCart = () => {
    setItemChange(!itemChange)
  }
  const itemClass = itemChange ?  "" : "in-cart"
  
  return (
    <li className={ itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick = {addToCart} className="add">{itemChange ?  "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}


export default Item