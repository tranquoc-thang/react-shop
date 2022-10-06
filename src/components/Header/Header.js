import "./Header.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <header>
        <div className="header-left">
          <Link to="/" className="header-link logo">
            Logo
          </Link>
        </div>
        <div className="header-right">
          <Link to="/bill" className="header-link">
            Bill
          </Link>
          <Link to="/" className="header-link">
            Product
          </Link>
          <Link to="/mycart" className="header-link">
            My Cart
          </Link>
        </div>
      </header>
    </>
  );
}
