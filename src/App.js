//100 around
//We can omit the React import , just because this is an modern packages
import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartContextProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown]= useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  }
  const hideCartHandler = () => {
     setCartIsShown(false);
  };
  return (
    <CartContextProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler}></Header> 
      <main>
      <Meals />
      </main>
      
    </CartContextProvider>
  );
}

export default App;
