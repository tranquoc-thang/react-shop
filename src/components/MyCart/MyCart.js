import "./MyCart.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as Actions from "../../constant/actionTypes";

export default function MyCart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.MyCartReducer.cart);
  const products = useSelector((state) => state.SanPhamReducer.products);
  const donhang = useSelector((state) => state.DonHangReducer.bills);

  const [productsCart, setProductsCart] = useState([]);
  let newProductsCart = [];

  const [beforeTax, setBeforeTax] = useState(0);
  const [tax, setTax] = useState(0);
  const [afterTax, setAfterTax] = useState(0);
  const [isCheckout, setIsCheckout] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    newProductsCart = [...productsCart];

    getInfoProductById();
    calculateTotal();
  }, []);

  function handleCheckout() {
    dispatch({
      type: Actions.WATCHER_UPDATE_CREATE_NEW_DON_HANG,
      data: {
        donhang: {
          beforeTax,
          tax,
          afterTax,
        },
      },
    });
    dispatch({
      type: Actions.WATCHER_UPDATE_CREATE_NEW_DONG_DON_HANG,
      data: {
        dongdonhangs: productsCart,
        idBill: donhang.length + 1,
      },
    });
    dispatch({
      type: Actions.UPDATE_EMPTY_CART,
    });
    setIsCheckout(!isCheckout);
    setProductsCart([]);
    setBeforeTax(0);
    setTax(0);
    setAfterTax(0);
  }

  function calculateTotal() {
    const sumTax = newProductsCart.reduce(
      (prev, curr) => prev + curr.tax * curr.quantity,
      0
    );
    const total = newProductsCart.reduce(
      (prev, curr) => prev + curr.unitPrice * curr.quantity,
      0
    );
    setBeforeTax(total);
    setTax(sumTax);
    setAfterTax(total - sumTax);
  }

  function getInfoProductById() {
    let productMap = {};
    cart.map((productCart) => {
      products.filter((product) => {
        if (productCart.id === product.id) {
          productMap = {
            ...productCart,
            ...product,
          };
          newProductsCart.push(productMap);
        }
      });
    });
    setProductsCart(newProductsCart);
  }

  return (
    <>
      <div className="cart">
        {productsCart.length ? (
          <div className="cart-product">
            <ul className="cart-product-list">
              {productsCart &&
                productsCart.map((product, index) => (
                  <li key={index} className="cart-product-item">
                    <div className="cart-product-img">
                      <img src={product.url} alt="Cart Product" />
                    </div>
                    <div className="cart-product-info">
                      <div>
                        <span>Name: </span> {product.name}
                      </div>
                      <div>
                        <span>Quantity: </span> {product.quantity}
                      </div>
                    </div>
                    <div className="cart-product-total">
                      <div>
                        <span>Unit Price: </span>
                        {product.unitPrice}
                      </div>
                      <div>
                        <span>Total Price: </span>{" "}
                        {product.quantity * product.unitPrice}
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
            <div className="cart-checkout">
              <div className="checkout-before-tax">
                <span>Before tax: </span>
                {beforeTax}
              </div>
              <div className="checkout-tax">
                <span>Tax: </span> {tax}
              </div>
              <div className="checkout-after-tax">
                <span>After tax: </span> {afterTax}
              </div>
              <button className="btn-check-out" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          </div>
        ) : (
          <span
            style={{
              textAlign: "center",
              width: "100%",
              paddingLeft: "calc(50% - 100px)",
            }}
          >
            Empty Cart.{" "}
            <Link
              style={{ textDecoration: "none", color: "rgb(64, 64, 224)" }}
              to={"/"}
            >
              Go to shopping
            </Link>
          </span>
        )}
      </div>
    </>
  );
}
