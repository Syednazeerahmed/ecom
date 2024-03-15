import React,{ useContext } from 'react';
import "./product.css";
import { PRODUCTS } from "./products/products";
import { Card } from "../../components/card/card";
import { ProductDetail } from "./productDetail/productDetail";
import { Context } from '../../context/context';
import { Banner } from './Banner/Banner';
import { Categories } from './categories/categories';

export const Product = () => {
  const { showPD } = useContext(Context);
  return (
    <>
      {showPD ? (
        <ProductDetail />
      ) : (
        <>
          <Banner />
          <Categories />
          <h2>popular products</h2>
          <div className="product">
            {PRODUCTS.filter((product) => product.isAvailable).map(
              (product, key) => {
                if (key < 6) return <Card data={product} />;
              }
            )}
          </div>
        </>
      )}
    </>
  );
}
