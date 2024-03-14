import React, { useContext } from "react";
import { Context } from "../../../context/context";
import './productDetail.css'


export const ProductDetail = () => {
    const { addToCart, removeFromCart, cartItems, currentPD, setShowPD } =
      useContext(Context);
  // const { id, name, src, quantity, ingredients, isAvailable, price } = props.data;
  const { id, name, src, quantity, ingredients, price } = currentPD;
  return (
    <div className="pdBackground">
      <div className="pdContainer">
        <button className="closeBtn" onClick={() => setShowPD(false)}>
          X
        </button>
        <div className="pdImage">
          <img src={src} alt={name} style={{ height: "15em" }} />
          <div className="buttons">
            <button onClick={() => removeFromCart(id)}>-</button>
            <input style={{ height: "1.542em" }} value={cartItems[id]} />
            <button onClick={() => addToCart(id)}>+</button>
          </div>
        </div>
        <div className="pdDetails">
          <p className="pdName">Name : {name}</p>
          <p className="pdQuantity">quantity : {quantity}</p>
          <p className="pdIngredients">ingredients : {ingredients}</p>
          <p className="pdPrice">price : &#8377;{price}</p>
        </div>
      </div>
    </div>
  );
};
