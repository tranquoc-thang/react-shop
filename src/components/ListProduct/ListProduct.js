import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ListProduct.css";
import ProductItem from "../ProductItem/ProductItem.js";

export default function Table() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.SanPhamReducer.products);
  const cart = useSelector((state) => state.MyCartReducer.cart);

  return (
    <>
      <div className="list-product">
        {products &&
          products.map((product, index) => (
            <ProductItem key={index} product={product}></ProductItem>
          ))}
      </div>
    </>
  );
}
