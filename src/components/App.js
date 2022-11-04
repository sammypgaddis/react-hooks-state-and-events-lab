import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";

function App() {
  

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
   const [buttonChange, setButtonChange] = useState(false)
  const handleClick = () => {
   setButtonChange(!buttonChange)
  //  console.log('clickkkk')
  }
   const appClass = buttonChange ? "App dark"  : "App light"
   
   
// console.log(appClass)
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick= {handleClick}> {buttonChange ? "Dark Mode"  : "Light Mode"}</button>
      </header>
      <ShoppingList items={itemData} category={itemData.category}/>
    </div>
  );
  }

export default App;



