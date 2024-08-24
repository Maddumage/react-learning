import React, { FC } from "react";
import "./ProductItem.css";
import { Product } from "../../types";

type ProductItemProps = {
  product: Product;
  onClick?: () => void;
};

const ProductItem: FC<ProductItemProps> = ({ product, onClick }) => {
  return (
    <div key={product.name} className="product-item" onClick={onClick}>
      <div className="title">
        <span>{product.name}</span>
      </div>
      <div className="subtitle">
        <span>{product.category}</span>
      </div>
      <div className="desc">
        <span>{product.description}</span>
      </div>
      <div className="price-stock-container">
        <div className="price">
          <span>${product.price}</span>
        </div>
        <div className="stock">
          <span>{product.stock}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
