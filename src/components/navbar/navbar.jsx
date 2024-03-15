import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { BsCart, BsShop } from 'react-icons/bs'

export const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <BsShop />
        </Link>
      <Link to="/cart">
        <BsCart />
      </Link>
    </nav>
  );
}
