import "./Header.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  const [search, setSearch] = useState("");

  let location = useLocation();
  let pathname = location.pathname;

  const searchRef = useRef();

  const products = useSelector((state) => state.SanPhamReducer.products);

  function handleOnClick() {
    searchRef.current.focus();
  }

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  useEffect(() => {
    const searchProducts = products.filter((product) =>
      product.name.includes(search)
    );
    window.searchProducts(searchProducts);
  }, [search]);

  useEffect(() => {
    setSearch("");
  }, [location]);

  return (
    <>
      <header>
        <div className="header-left">
          <Link to="/" className="header-link logo">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="header-search" onClick={handleOnClick}>
          <input
            type="text"
            placeholder="Type to search..."
            ref={searchRef}
            onChange={handleSearch}
            value={search}
          />
          <FontAwesomeIcon
            className="header-search-icon"
            icon={faMagnifyingGlass}
          />
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
