import { useSelector } from "react-redux";
import "./ListProduct.css";
import ProductItem from "../ProductItem/ProductItem.js";

export default function Table() {
  const products = useSelector((state) => state.SanPhamReducer.products);

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
