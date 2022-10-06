import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./FormProduct.css";
import * as Actions from "../../constant/actionTypes.js";
export default function FormProduct() {
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [tax, setTax] = useState("");

  function handleAddProduct() {
    dispatch({
      type: Actions.WATCHER_UPDATE_ADD_NEW_PRODUCT,
      data: {
        product: {
          id: id,
          name: name,
          url: url,
          unitPrice: unitPrice,
          tax: tax,
        },
      },
    });
  }

  return (
    <>
      <div className="form">
        <div>
          <label htmlFor="id">ID</label>
          <input
            type="text"
            name="id"
            placeholder="ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="url">URL</label>
          <input
            type="text"
            name="url"
            placeholder="URL Image"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="unitPrice">Unit Price</label>
          <input
            type="text"
            name="unitPrice"
            placeholder="Unit Price"
            value={unitPrice}
            onChange={(e) => setUnitPrice(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="tax">Tax</label>
          <input
            type="text"
            name="tax"
            placeholder="Tax"
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
