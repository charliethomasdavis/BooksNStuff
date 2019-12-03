import React, { Component } from "react";
import user from "./images/avatar.png";
import cart from "./images/shopping-cart.png";
import logo from "./images/logo2.png";

class NavBar extends Component {
  inputChanged = event => {
    this.setState({ query: event.target.value });
  };

  render() {
    return (
      <div>
        <ul
          style={{
            listStyleType: "none",
            margin: "0",
            padding: "0",
            overflow: "hidden",
            backgroundColor: "#fafafa"
          }}
        >
          <li
            style={{
              display: "block",
              color: "black",
              textAlign: "center",
              padding: "14px 16px",
              textDecoration: "none",
              float: "left"
            }}
          >
            <a
              href="starwars.com"
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "25px"
              }}
            >
              JACK
              <span style={{ color: "#983eda" }}>BOOKS</span>
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
                style={{
                  width: "20px",
                  height: "auto",
                  textAlign: "center",
                  marginTop: "2px"
                }}
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
                  height: "22px",
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
