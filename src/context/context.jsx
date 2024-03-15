import { createContext, useState } from "react"
import React from 'react'
import { PRODUCTS } from "../pages/product/products/products";

export const Context = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i <= PRODUCTS.length; i++) {
        cart[i] = 0;
    }
    return cart;
}
export const ContextProvider = (props) => {

  const [ cartItems, setCartItems ] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
  }

  const [ currentPD, setCurrentPD ] = useState(PRODUCTS[0]);

  const [ showPD, setShowPD ] = useState(false);

  const displayPD = (id) => {
    setCurrentPD(PRODUCTS[id-1]);
    setShowPD(true);
  }
  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    currentPD,
    showPD,
    displayPD,
    setShowPD,
  };
  
  return( 
    <Context.Provider value={contextValue}>
        {props.children}
    </Context.Provider>
  );
};
