import React, { Component } from "react";
import user from "./images/user.png";
import cart from "./images/cart.png";

class NavBar extends Component {
  render() {
    return (
      <div>
        <ul
          style={{
            listStyleType: "none",
            margin: "0",
            padding: "0",
            overflow: "hidden",
            backgroundColor: "black"
          }}
        >
          <li
            style={{
              float: "left",
              display: "block",
              color: "white",
              textAlign: "center",
              padding: "14px 16px",
              textDecoration: "none"
            }}
          >
            <a
              href="starwars.com"
              style={{ textDecoration: "none", color: "white" }}
            >
              BooksNStuff
            </a>
          </li>
          <li
            style={{
              float: "right",
              display: "block",
              color: "#4e03fc",
              textAlign: "center",
              padding: "14px 16px",
              textDecoration: "none"
            }}
          >
            <a
              style={{ textDecoration: "none", color: "#3470d1" }}
              href="thenextweb.com"
            >
              <img
                src={user}
                style={{ width: "15px", height: "auto", textAlign: "center" }}
              />
            </a>
          </li>
          <li
            style={{
              float: "right",
              display: "block",
              color: "#4e03fc",
              textAlign: "center",
              padding: "14px 16px",
              textDecoration: "none"
            }}
          >
            <a
              style={{ textDecoration: "none", color: "#3470d1" }}
              href="https://www.linkedin.com/in/alexandro-valdez-b57627180"
            >
              <img
                src={cart}
                style={{
                  width: "22px",
                  height: "auto",
                  textAlign: "center",
                  marginTop: "1px"
                }}
              />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
