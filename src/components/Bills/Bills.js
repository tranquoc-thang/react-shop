import "./Bills.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Bills() {
  const bills = useSelector((state) => state.DonHangReducer.bills);
  return (
    <>
      <div className="cart">
        <div className="cart-product">
          <ul
            className="cart-product-list"
            style={{ padding: "0", marginRight: "0" }}
          >
            <h1>List Don Hang</h1>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Before Tax</th>
                  <th>Tax</th>
                  <th>After Tax</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {bills.map((bill, index) => (
                  <tr key={index}>
                    <td>{bill.name}</td>
                    <td>{bill.beforeTax}</td>
                    <td>{bill.sumTax || bill.tax}</td>
                    <td>{bill.afterTax}</td>
                    <td>
                      <Link
                        className="bill-action-link"
                        to={`/bill-detail/${bill.id}`}
                      >
                        See detail
                      </Link>
                    </td>
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
