import React from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../product/products/products";
import { Card } from "../../components/card/card";
import "./category.css";

export const Category = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>{id}</h1>
      <div className="category">
        {PRODUCTS.filter((product) => product.category === id).map(
          (product) => (
            <Card data={product} />
          )
        )}
      </div>
    </div>
  );
};

