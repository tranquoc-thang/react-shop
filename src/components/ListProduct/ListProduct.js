import { useEffect, useState } from "react";
import "./ListProduct.css";
import ProductItem from "../ProductItem/ProductItem.js";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";

window.searchProducts = function () {};

export default function Table() {
  const products = useSelector((state) => state.SanPhamReducer.products);
  const [showProducts, setShowProducts] = useState([]);

  let location = useLocation();

  useEffect(() => {
    setShowProducts(products);
  }, [location]);

  window.searchProducts = function (searchProducts) {
    setShowProducts(searchProducts);
  };

  return (
    <>
      <div className="list-product">
        {showProducts &&
          showProducts.map((product, index) => (
            <ProductItem key={index} product={product}></ProductItem>
          ))}
        {!showProducts.length && (
          <div
            style={{
              color: "rgba(0,0,0,.87)",
              textAlign: "center",
              fontSize: "1.2rem",
            }}
          >
            No result is found
          </div>
        )}
      </div>
    </>
  );
}
