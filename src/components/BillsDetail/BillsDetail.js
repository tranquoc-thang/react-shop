import "./BillsDetail.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BillsDetail() {
  const products = useSelector((state) => state.SanPhamReducer.products);
  const billsDetail = useSelector(
    (state) => state.DongDonHangReducer.billDetails
  );
  const [billsDetailByIdProduct, setBillsDetailByIdProduct] = useState([]);

  let { value } = useParams();

  useEffect(() => {
    let billsDetailFilter = billsDetail.filter(
      (bill) => bill.idBill === Number(value)
    );
    let billDetailMapArr = [];
    let billDetailMap = {};
    products.map((product) => {
      billsDetailFilter.filter((billdt) => {
        if (product.id === billdt.idProduct) {
          billDetailMap = {
            ...product,
            ...billdt,
          };
          billDetailMapArr.push(billDetailMap);
        }
      });
    });
    setBillsDetailByIdProduct(billDetailMapArr);
  }, []);

  return (
    <>
      <div className="cart">
        <div className="cart-product">
          <ul
            className="cart-product-list"
            style={{ padding: "0", marginRight: "0" }}
          >
            <h1>Chi Tiet Don Hang {value}</h1>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Unit Price</th>
                  <th>Before Tax</th>
                  <th>Sum Tax</th>
                </tr>
              </thead>
              <tbody>
                {billsDetailByIdProduct &&
                  billsDetailByIdProduct.map((bill, index) => (
                    <tr key={index}>
                      <td>{bill.name}</td>
                      <td>{bill.quantity}</td>
                      <td>{bill.unitPrice}</td>
                      <td>{bill.beforeTax}</td>
                      <td>{bill.tax}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </ul>
        </div>
      </div>
    </>
  );
}
