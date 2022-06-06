import React from "react";
import "./Product.css";
import { TiShoppingCart } from 'react-icons/ti';
const Product = ({product, handleAddToCart}) => {
  const { name, price, image } = product;
 
  return (
    <div className="product-info">
        <img src={image} alt="" />
      <div className="product-text">
        <h1>{name}</h1>
        <p>Price: ${price}</p>
      </div>
      <button onClick={() => handleAddToCart(product)} className="btn-cart">
          <p className="btn-text">Add To Cart</p>
          <TiShoppingCart size={23}/>
      </button>
    </div>
  );
};

export default Product;
