import React, { Component } from "react";
import profPic from "./images/background2.jpg";
import user from "./images/user.png";
import cart from "./images/cart.png";
import BookView from "./BookView";
import Contacts from "./contacts";
import Footer from "./Footer";
import PageContent from "./PageContent";

class Mast extends Component {
  state = {
    contacts: [],
    query: "",
    author: []
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

  inputChanged = event => {
    this.setState({ query: event.target.value });
  };

  render() {
    return (
      <div
        style={{
          maxWidth: "auto",
          position: "relative",
          display: "none !important"
        }}
      >
        <img
          src={profPic}
          alt="mastCover"
          style={{
            height: "auto",
            width: "100%"
          }}
        />

        {/*DIV for Search Bar Box */}
        <div
          style={{
            width: "65%",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            opacity: ".95"
          }}
        >
          <div
            style={{
              padding: "0.01em 16px",
              color: "#000",
              paddingTop: "16px",
              paddingBottom: "16px"
            }}
          >
            <h1 style={{ color: "white" }}>Search for 1,000's of books!</h1>
            <div
              style={{
                margin: "0 -16px",
                padding: "0 8px",
                content: "",
                display: "table",
                clear: "both"
              }}
            >
              <div style={{ float: "left", width: "54%" }}>
                <input /* TODO: Make enter key work */
                  type="text"
                  placeholder="Enter ISBN, Author, or Title..."
                  value={this.state.query.searchquery}
                  onChange={this.inputChanged}
                  style={{
                    padding: "8px",
                    display: "block",
                    border: "none",
                    borderBottom: "1px solid #ccc",
                    width: "300px",
                    border: "1px solid #ccc"
                  }}
                ></input>
              </div>
            </div>
            <p>
              <button
                onClick={this.componentDidMount}
                style={{
                  backgroundColor: "#983eda",
                  color: "white",
                  border: "none",
                  textDecoration: "none",
                  width: "150px",
                  borderRadius: "25px",
                  margin: "0 auto"
                }}
              >
                SEARCH
              </button>
            </p>
          </div>
        </div>
        <PageContent />
        <Contacts contacts={this.state.contacts} />
      </div>
    );
  }
}

export default Mast;
