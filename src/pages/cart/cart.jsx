import React, { useContext } from 'react';
import { Context } from '../../context/context';
import { PRODUCTS } from '../product/products';
import '../../App.css';
import { CartItem } from "./cart-item/cart-item";
import { useNavigate } from "react-router-dom";
import "./cart.css";

export const Cart = () => {
  const { cartItems } = useContext(Context);
  const navigate = useNavigate();
  let subtotal = 0;
  
  PRODUCTS.filter((product) => cartItems[product.id] !== 0).map((product) => {
    subtotal += cartItems[product.id] * product.price;
  });
  
  return (
    <div className="cart">
      {subtotal !== 0 ? (
        <>
          <h1>your cart items are</h1>
          <div>
            {PRODUCTS.map((product) => {
              if (cartItems[product.id] !== 0) {
                return <CartItem data={product} />;
              }
            })}
          </div>
          <div className="second">
            <div>
              <h1 className="subtotal">Sub-Total : {subtotal}</h1>
              <button
                onClick={() => {
                  navigate("/");
                }}
              >
                Continue Shopping
              </button>
              <button>Checkout</button>
            </div>
          </div>
        </>
      ) : (
        <h2>Your Cart is Empty</h2>
      )}
    </div>
  );
}
