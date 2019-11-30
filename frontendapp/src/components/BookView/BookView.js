import React, { Component } from "react";

// Components
import Book from "./Book";
import NavigationPanel from "./NavigationPanel";

class BookView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFilter: 'Fantasy'
    };
  }

  onFilterChange = (filter) => {
    this.setState({ activeFilter: filter })
  }

  getFilteredBooks = async () => {
    try {
      let url = `http://127.0.0.1:8000/api/books/?isbn=&title=&price=&pubdate=&userreviews=&sname=&bookcat__categorydesc=${this.state.activeFilter}`;

      const response = await fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw Error(response.statusText);
      }

      const json_response = await response.json();

      console.log(json_response);

      return json_response;

    } catch (error) {
      console.log(error);
    }
  };

  render() {
    let currentBooks = this.getFilteredBooks()
    return (
      <div className='BookView'>
        <NavigationPanel onMainFilterClick={this.onFilterChange} activeTab={this.state.activeFilter} />
        {/* <Books books={currentBooks} /> */}
      </div>
    );
  }
}

export default BookView;
