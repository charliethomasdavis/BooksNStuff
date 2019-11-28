import React, { Component } from "react";
import pricing from "./images/pricing.png";
import shipping from "./images/1.png";
import student from "./images/2.png";
import Book from "./Book";

class BookView extends Component {
  render() {
    const elements = 7;
    const items = [];

    for (var i = 0; i < elements; i++) {
      items.push(<Book />);
    }

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "max",
          overflow: "hidden"
        }}
      >
        {items}
      </div>
    );
  }
}

export default BookView;
