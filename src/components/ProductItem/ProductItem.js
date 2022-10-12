import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../../constant/actionTypes.js";
import "./ProductItem.css";

export default function ProductItem({ product }) {
  const [quantity, setQuantity] = useState(1);
  let cart = useSelector((state) => state.MyCartReducer.cart);
  const dispatch = useDispatch();
  function handleAddToCart() {
    let newState;
    try {
      let quantityAdd = quantity || 1;

      const productAdd = cart.find((p) => {
        return product.id === p.id;
      });

      if (productAdd) {
        cart = cart.filter((product) => product.id !== productAdd.id);
        newState = {
          cart: [
            ...cart,
            {
              id: product.id,
              quantity: productAdd.quantity + quantityAdd,
              unitPrice: 0,
              name: "",
            },
          ],
        };
      } else {
        newState = {
          cart: [
            ...cart,
            {
              id: product.id,
              quantity: quantityAdd,
              unitPrice: 0,
              name: "",
            },
          ],
        };
      }
    } catch (error) {
      throw new Error(error);
    }

    dispatch({
      type: Actions.UPDATE_ADD_PRODUCT_TO_CART,
      data: {
        newState,
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
