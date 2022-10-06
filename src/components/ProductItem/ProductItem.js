import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as Actions from "../../constant/actionTypes.js";
import "./ProductItem.css";

export default function ProductItem({ product }) {
  const [quantity, setQuantity] = useState();
  const cart = useSelector((state) => state.MyCartReducer.cart);

  const dispatch = useDispatch();
  function handleAddToCart() {
    dispatch({
      type: Actions.UPDATE_ADD_PRODUCT_TO_CART,
      data: {
        product: {
          id: product.id,
          quantity: Number(quantity) ?? 1,
        },
      },
    });
  }

  return (
    <>
      <div className="cart-item">
        <div className="cart-item-img">
          <img src={product.url} alt={product.name} />
        </div>
        <div className="cart-item-content">
          <div className="cart-item-info">
            <div className="cart-item-name">
              <span>Name: </span>
              {product.name}
            </div>
            <div className="cart-item-name">
              <span>Unit Price: </span>
              {product.unitPrice}
            </div>
            <div className="cart-item-name">
              <span>Tax: </span>
              {product.tax}
            </div>
          </div>
          <div className="select-buy-item">
            <input
              type="number"
              placeholder="Quantity"
              name="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <button onClick={handleAddToCart}>Buy now</button>
          </div>
        </div>
      </div>
    </>
  );
}
