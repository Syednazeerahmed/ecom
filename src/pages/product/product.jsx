import React,{ useContext } from 'react';
import './../../styles/product.css'
import { PRODUCTS } from './products';
import { Card } from './card';
import { ProductDetail } from './productDetail';
import { Context } from '../../context/context';
import { Banner } from './Banner/Banner';
export const Product = () => {
  const { showPD } = useContext(Context);
  return (
    <>
      { 
        showPD  ? <ProductDetail /> 
      :
      <>
       <Banner />
       <div className='product'>
        {PRODUCTS.filter(product => product.isAvailable).map(product => (
          <Card data={product} />
          ))}
      </div>
      </>
      }
    </>
  );
}
