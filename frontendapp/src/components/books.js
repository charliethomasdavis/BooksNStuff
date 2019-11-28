import React, { Component } from "react";

class Books extends Component {
  state = {
    books: []
  };

  loadBooks = async event => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/books/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${this.props.token}`
        },
        body: JSON.stringify(this.state.credentials)
      });
      if (!response.ok) {
        throw Error(response.statusText);
      }

      const json_response = await response.json();
      this.setState({ books: json_response });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <h1>Books</h1>
        {this.state.books.map(book => {
          return <h3 key={book.isbn}>{book.title}</h3>;
        })}
        <button onClick={this.loadBooks}>Load Books</button>
      </div>
    );
  }
}

export default Books;
