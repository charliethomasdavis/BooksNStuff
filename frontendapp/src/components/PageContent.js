import React, { Component } from "react";
import pricing from "../images/pricing.png";
import shipping from "../images/1.png";
import student from "../images/2.png";
import Book from "./BookView/Book";

class PageContent extends Component {
  render() {
    return (
      <div
        style={{
          maxWidth: "auto",
          position: "relative",
          backgroundColor: "black"
        }}
      >
        <label style={{ margin: "5px", color: "white" }}> Category: </label>
        <select>
          <option value="Horror">Horror</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Adventure">Adventure</option>
          <option value="Drama">Drama</option>
        </select>
        <label style={{ margin: "5px", color: "white" }}> Rating: </label>
        <select>
          <option value="Horror">5</option>
          <option value="Fantasy">4</option>
          <option value="Adventure">3</option>
          <option value="Drama">2</option>
          <option value="Drama">1</option>
        </select>
        <button type="button" style={{ margin: "15px" }}>
          Search
        </button>
      </div>
    );
  }
}

export default PageContent;
