import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import Order from "../Order Cart/Order";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cartItem, setCartItem] = useState([]);

  const HandleAddToCart = (cart) => {
    let newCart = [];
    /* Error Handle */
    if (!cartItem.includes(cart)) {
      if (cartItem.length < 4) {
        newCart = [...cartItem, cart];
      } else {
        alert("Can Take Only four Name");
        return;
      }
    } else {
      return alert("One Button one click");
    }

    setCartItem(newCart);
  };

  /* Remove All Carts Item */

  const RemoveTheCartItems = (one) => {
    let newCart = [...cartItem, one];
    newCart = [];
    setCartItem(newCart);
  };

  /*  SeletOnce Items */

  const SelectOneItems = () => {
    const randomlySeletedItem =
      cartItem[Math.floor(Math.random() * cartItem.length)];
    setCartItem([randomlySeletedItem]);
  };

  /* Json Data Call Show Product Components */

  useEffect(() => {
    fetch("watch.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    /* Product Chart Here  Display show for product components*/
    <div className="shop-container">
      {/* Order Chart Here  */}

      <div className="order-container">
        <h2>Order Chart</h2>
        {cartItem.map((item) => (
          <Order item={item} key={item.id}></Order>
        ))}

        <button onClick={SelectOneItems} className="order-btn">
          <p className="order-text">Select One</p>
        </button>

        <button onClick={RemoveTheCartItems} className="order-btn">
          <p className="order-text">Reset</p>
        </button>
      </div>
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={HandleAddToCart}
          ></Product>
        ))}
      </div>
    </div>
  );
};

export default Shop;
