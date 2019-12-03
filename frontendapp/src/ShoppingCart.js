import React, { Component } from "react";
import logo from "./images/random.jpg";

class ShoppingCart extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#f5f5f5",
          padding: "4px",
          width: "197px",
          boxShadow: "5px 5px 5px grey",
          margin: "5px"
        }}
      >
        <img
          src={logo}
          style={{ width: "180px", height: "230px" }}
          alt="BookPic"
        />
        <h5 style={{ margin: "auto" }}>{"Coding with Kanye"}</h5>
        <span style={{ color: "orange" }} class="fa fa-star checked"></span>
        <span style={{ color: "orange" }} class="fa fa-star checked"></span>
        <span style={{ color: "orange" }} class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <p style={{ marginTop: "2px" }}>
          by <a href="https://www.google.com">{"K. West"}</a>
        </p>
        <button type="button" style={{ marginBottom: "5px", marginTop: "2px" }}>
          Add to Cart
        </button>
      </div>
    );
  }
}

export default ShoppingCart;
