import React from 'react';
import { useContext } from 'react';
import { Context } from '../../context/context';
import '../../styles/cart-item.css'
export const CartItem = (props) => {
   const { id, name, src, quantity, ingredients, isAvailable, price } =
        props.data;
    const { cartItems, removeFromCart, addToCart } = useContext(Context);

  return (
    <div className="CI-card">
      <img src={src} alt={name} style={{ height: "13em" }} />
      <div className='second'>
        <div>
          <p className="name">{name}</p>
          <p className="quantity">{quantity}</p>
          <p className="price">&#8377;{price}</p>
        </div>
        <div className="buttons">
          <button onClick={() => removeFromCart(id)}>-</button>
          <input value={cartItems[id]} />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
}
