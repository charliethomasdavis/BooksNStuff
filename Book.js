import React, { Component } from "react";
import logo from "./images/random.jpg";

class Book extends Component {
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
        <h5 style={{ margin: "auto" }}>{this.props.name}</h5>
        <p style={{ marginTop: "2px" }}>
          by <a href="https://www.google.com">{this.props.author}</a>
        </p>
        <button type="button" style={{ marginBottom: "5px", marginTop: "2px" }}>
          Add to Cart
        </button>
      </div>
    );
  }
}

export default Book;
