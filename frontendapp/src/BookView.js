import React, { Component } from "react";
import pricing from "./images/pricing.png";
import shipping from "./images/1.png";
import student from "./images/2.png";
import Book from "./Book";
import Contacts from "./contacts";

class BookView extends Component {
  state = {
    contacts: [],
    query: "Tiger"
  };

  componentDidMount = async event => {
    fetch(
      `http://ec2-34-214-249-60.us-west-2.compute.amazonaws.com/api/books?search=${this.state.query}`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ contacts: data });
      })
      .catch(console.log);
  };

  render() {
    return <Contacts contacts={this.state.contacts} />;
  }
}

export default BookView;
