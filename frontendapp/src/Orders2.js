import React from "react";
import logo from "./images/random.jpg";

const Orders = ({ orders }) => {
  return (
    <div>
      {orders.map(order => (
        <div
          style={{
            backgroundColor: "#f5f5f5",
            padding: "5px",
            width: "197px",
            boxShadow: "5px 5px 5px grey",
            margin: "5px",
            float: "left"
          }}
        >
          <h5 style={{ margin: "auto" }}>{order.title}</h5>
          <p style={{ marginTop: "1px", fontSize: "11px" }}>
            ISBN: {order.isbn}
          </p>

          <p>${order.itemprice}</p>
        </div>
      ))}
    </div>
  );
};

export default Orders;
