import { useState } from "react";
import "./App.css";
import { products } from "./utils/dummy";
import { ProductItem } from "./components";
import { Product } from "./types";

//This dummy API will use for this project - https://dummyjson.com/docs/products

const App = () => {
  return (
    <div className="card">
      <h1>React Learning</h1>
      {products.map((item, index) => {
        return (
          <ProductItem key={item.name} product={item} onClick={() => {}} />
        );
      })}
    </div>
  );
};

export default App;
