import React, { Component } from "react";
import logo from "./images/random.jpg";

class Orders extends Component {
  state = {
    books: []
  };

  loadBooks = () => {
    fetch(
      "http://ec2-34-214-249-60.us-west-2.compute.amazonaws.com/api/orderitems/",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state.credentials)
      }
    )
      .then(data => data.json())
      .then(data => {
        this.setState({ books: data });
      })
      .catch(error => console.error(error));
  };

  render() {
    return (
      <div>
        <h1>Shopping Cart</h1>
        {this.state.books.map(book => {
          return <h3 key={book.id}>{book.isbn}</h3>;
        })}
        <button onClick={this.loadBooks}>Load Books</button>
      </div>
    );
  }
}

export default Orders;
