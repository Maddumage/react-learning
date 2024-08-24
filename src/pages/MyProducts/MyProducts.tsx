import React from "react";
import { products } from "../../utils/dummy";
import { ProductItem } from "./components";

//This dummy API will use for this project - https://dummyjson.com/docs/products

const MyProducts = () => {
  return (
    <div className="card">
      <h1>Products</h1>
      {products.map((item, index) => {
        return (
          <ProductItem key={item.name} product={item} onClick={() => {}} />
        );
      })}
    </div>
  );
};

export default MyProducts;
