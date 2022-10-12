import "./Header.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function Header() {
  let location = useLocation();
  let pathname = location.pathname;

  return (
    <>
      <header>
        <div className="header-left">
          <Link to="/" className="header-link logo">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="header-right">
          <Link
            to="/product-add"
            className={
              pathname === "/product-add" ? "header-link active" : "header-link"
            }
          >
            Add Product
          </Link>
          <Link
            to="/bill"
            className={
              pathname === "/bill" ? "header-link active" : "header-link"
            }
          >
            Bill
          </Link>
          <Link
            to="/mycart"
            className={
              pathname === "/mycart" ? "header-link active" : "header-link"
            }
          >
            My Cart
          </Link>
        </div>
      </header>
    </>
  );
}
