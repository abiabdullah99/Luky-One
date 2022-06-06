import React from "react";
import "./Order.css";
const Order = ({ item }) => {
  const { name, image } = item;
  return (
    <div>
      <div className="order">
        <img src={image} alt="" />
        <h1>{name}</h1>
      </div>
     
    </div>
  );
};

export default Order;
