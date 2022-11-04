import React from "react";
import { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  
  const [changeCategory, setChangeCategory] = useState("")
  const handleSelect = (e) => {
    setChangeCategory(e.target.value)
  }
  const filteredCategory = items.filter( (itemObj)  => {
        if (changeCategory === "All" || changeCategory === ""){
          return true
        }else {
          return (itemObj.category === changeCategory)
        }  
         
          
  })
  // console.log(filteredCategory);
 
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleSelect} name="filter">  
          <option value= "All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredCategory.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
 
