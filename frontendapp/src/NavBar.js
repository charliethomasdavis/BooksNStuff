import React, { Component } from "react";
import user from "./images/avatar.png";
import cart from "./images/shopping-cart.png";
import logo from "./images/logo2.png";
import Orders from "./Orders2";

class NavBar extends Component {
  state = {
    orders: [],
    credentials: { username: "", password: "" }
  };

  login = event => {
    fetch("http://ec2-34-214-249-60.us-west-2.compute.amazonaws.com/auth/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state.credentials)
    })
      .then(data => data.json())
      .then(window.alert("User has logged in."))
      .then(window.location.reload())
      .then(data => {
        this.props.userLogin(data.token);
      })
      .catch(error => console.error(error));
  };

  register = event => {
    fetch(
      "http://ec2-34-214-249-60.us-west-2.compute.amazonaws.com/api/users",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.state.credentials)
      }
    )
      .then(data => data.json())
      .then(data => {
        console.log(data.token);
      })
      .catch(error => console.error(error));
  };

  inputChanged = event => {
    const cred = this.state.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({ credentials: cred });
  };

  orderItemList = async event => {
    fetch(
      `http://ec2-34-214-249-60.us-west-2.compute.amazonaws.com/api/orderitems/`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ orders: data });
      })
      .catch(console.log);
  };

  refresh = event => {
    window.location.reload();
  };

  openCart = event => {
    return <div> </div>;
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
              onClick={this.refresh}
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
            <img
              onClick={this.orderItemList}
              src={cart}
              style={{
                width: "22px",
                height: "22px",
                textAlign: "center",
                marginTop: "1px"
              }}
            />
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
            <a style={{ textDecoration: "none", color: "#3470d1" }}>
              <input
                type="text"
                name="username"
                value={this.state.credentials.username}
                onChange={this.inputChanged}
                placeholder="Enter username."
                style={{ marginTop: "3px" }}
              />
              <input
                type="password"
                name="password"
                value={this.state.credentials.password}
                onChange={this.inputChanged}
                placeholder="Enter password."
              />
              <button
                onClick={this.login}
                style={{
                  backgroundColor: "#983eda",
                  color: "white",
                  border: "none",
                  textDecoration: "none",
                  borderRadius: "25px",
                  marginLeft: "5px"
                }}
              >
                Login
              </button>
              <button
                onClick={this.register}
                style={{
                  backgroundColor: "#983eda",
                  color: "white",
                  border: "none",
                  textDecoration: "none",
                  borderRadius: "25px",
                  marginLeft: "5px"
                }}
                s
              >
                Register
              </button>
            </a>
          </li>
        </ul>
        <Orders orders={this.state.orders} />
      </div>
    );
  }
}

export default NavBar;
