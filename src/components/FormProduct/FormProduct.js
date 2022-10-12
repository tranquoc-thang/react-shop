import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import "./FormProduct.css";
import * as Actions from "../../constant/actionTypes.js";
export default function FormProduct() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [tax, setTax] = useState("");

  const inputNameRef = useRef();

  function handleAddProduct() {
    dispatch({
      type: Actions.WATCHER_UPDATE_ADD_NEW_PRODUCT,
      data: {
        product: {
          name: name,
          url: url,
          unitPrice: unitPrice,
          tax: tax,
        },
      },
    });
    setName("");
    setUrl("");
    setUnitPrice("");
    setTax("");

    alert("Add product successfully");

    inputNameRef.current.focus();
  }

  return (
    <>
      <div className="form">
        <div>
          <label htmlFor="name">Name</label>
          <input
            ref={inputNameRef}
            type="text"
            name="name"
            placeholder="Enter Name here..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="url">URL</label>
          <input
            type="text"
            name="url"
            placeholder="Enter URL Image here..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="unitPrice">Unit Price</label>
          <input
            type="text"
            name="unitPrice"
            placeholder="Enter Unit Price here..."
            value={unitPrice}
            onChange={(e) => setUnitPrice(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="tax">Tax</label>
          <input
            type="text"
            name="tax"
            placeholder="Enter Tax here..."
            value={tax}
            onChange={(e) => setTax(e.target.value)}
          />
        </div>
        <button onClick={handleAddProduct} type="submit">
          Add Product
        </button>
      </div>
    </>
  );
}
