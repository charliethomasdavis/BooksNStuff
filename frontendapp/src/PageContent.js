import React, { Component } from "react";
import pricing from "./images/pricing.png";
import shipping from "./images/1.png";
import student from "./images/2.png";
import Book from "./Book";

class PageContent extends Component {
  render() {
    return (
      <div
        style={{
          maxWidth: "auto",
          position: "relative",
          backgroundColor: "white",
          textAlign: "center"
        }}
      >
        <select
          style={{
            backgroundColor: "white",
            textAlign: "center",
            marginLeft: "10px"
          }}
        >
          <option selected disabled>
            Category
          </option>
          <option value="Horror">Young Adult</option>
          <option value="Fantasy">Comedy</option>
          <option value="Adventure">Crime</option>
          <option value="Drama">Adventure</option>
          <option value="Horror">Drama</option>
          <option value="Fantasy">Horror</option>
          <option value="Adventure">Children</option>
          <option value="Drama">Romance</option>
          <option value="Horror">Sci-Fi</option>
          <option value="Fantasy">Western</option>
          <option value="Adventure">Fantasy</option>
          <option value="Drama">IT Horror</option>
          <option value="Drama">Computer Science Horror</option>
        </select>

        <select
          style={{
            backgroundColor: "white",
            textAlign: "center",
            marginLeft: "10px"
          }}
        >
          <option selected disabled>
            Rating
          </option>
          <option value="Horror">5</option>
          <option value="Fantasy">4</option>
          <option value="Adventure">3</option>
          <option value="Drama">2</option>
          <option value="Drama">1</option>
        </select>
        <button
          type="button"
          style={{
            margin: "15px",
            backgroundColor: "#983eda",
            color: "white",
            border: "none",
            textDecoration: "none",
            borderRadius: "25px",
            marginLeft: "10px"
          }}
        >
          Filter
        </button>
      </div>
    );
  }
}
//#983eda
export default PageContent;
