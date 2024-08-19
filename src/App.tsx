import { useState } from "react";
import "./App.css";
import { products } from "./utils/dummy";

//This dummy API will use for this project - https://dummyjson.com/docs/products

type ProductItemProps = {
  item: any;
};

const ProductItem = ({ item }: ProductItemProps) => {
  return (
    <div key={item.name} className="product-item">
      <div>
        <span className="title">{item.name}</span>
      </div>
      <div>
        <span className="subtitle">{item.category}</span>
      </div>
      <div>
        <span className="desc">{item.description}</span>
      </div>
    </div>
  );
};

const App = () => {
  const names = ["Sumudu", "Roshan", "Kamal"];
  const items = [
    {
      id: 1,
      name: "Apple",
      description: "Apple Descroption",
      category: "Apparel",
    },
    {
      id: 2,
      name: "Google",
      description: "Google Descroption",
      category: "Outdoor",
    },
    {
      id: 3,
      name: "Amazon",
      description: "Amazon Descroption",
      category: "Sports",
    },
  ];

  return (
    <div className="card">
      <h1>React Learning</h1>
      {names.map((name, index) => {
        return (
          <div key={name}>
            <span>{`${index + 1}. ${name}`}</span>
          </div>
        );
      })}
      {items.map((item, index) => {
        return <ProductItem key={item.name} item={item} />;
      })}
    </div>
  );
};

export default App;
