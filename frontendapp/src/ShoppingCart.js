import React, { Component } from "react";
import logo from "./images/random.jpg";
import Orders from "./orders";

class ShoppingCart extends Component {
  state = {
    orders: []
  };

  componentDidMount = async event => {
    fetch(
      `http://ec2-34-214-249-60.us-west-2.compute.amazonaws.com/api/ordersitems`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ contacts: data });
      })
      .catch(console.log);
  };

  inputChanged = event => {
    this.setState({ query: event.target.value });
    console.log("Help");
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: "#f5f5f5",
          padding: "4px",
          width: "auto",
          boxShadow: "5px 5px 5px grey",
          margin: "5px",
          backgroundColor: "#f2f2f0"
        }}
      >
        <Orders orders={this.state.orders} />
      </div>
    );
  }
}

export default ShoppingCart;
