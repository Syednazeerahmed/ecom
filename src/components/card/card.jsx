import React, { useContext } from "react";
import "../../App.css";
import "./card.css";
import { Context } from "../../context/context";

export const Card = (props) => {
  // const { id, name, src, quantity, ingredients, isAvailable, price } = props.data;
  const { id, name, src, quantity, price } = props.data;
  // const { addToCart, cartItems, removeFromCart} = useContext(Context);
  const { addToCart, cartItems, displayPD } = useContext(Context);

  const cartItemAmount = cartItems[id];
  return (
    <div className="card">
      <img
        src={src}
        alt={name}
        style={{ height: "10em",width: "6.33em" }}
        onClick={() => displayPD(id)}
      />
      <p className="quantity">{quantity}</p>
      <p className="name">{name}</p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <p className="price">&#8377;{price}</p>
      </div>
      <button onClick={() => addToCart(id)}>
        Add to Cart{cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  );
};
