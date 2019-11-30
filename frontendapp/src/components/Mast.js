import React, { Component } from "react";
import profPic from "../images/mastPic.jpeg";
import user from "../images/user.png";
import cart from "../images/cart.png";

class Mast extends Component {
  state = { query: '' }

  search = async event => {
    try {
      let url = `http://127.0.0.1:8000/api/books?search=${this.state.query}`;

      const response = await fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw Error(response.statusText);
      }

      const json_response = await response.json();

      // TODO: do something with response (redirect?)

      console.log(json_response);
    } catch (error) {
      console.log(error);
    }
  };

  inputChanged = event => {
    this.setState({ query: event.target.value });
  };

  handleKeyPress = event => {
    // Let enter key activate search
    if (event.which === 13)
    {
      this.search()
    }
  };

  render() {
    return (
      <header
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
            transform: "translate(-50%, -50%)"
          }}
        >
          <div
            style={{
              padding: "0.01em 16px",
              color: "#000",
              backgroundColor: "#fff",
              paddingTop: "16px",
              paddingBottom: "16px",
              opacity: ".95"
            }}
          >
            <h3 style={{}}> Search 1,000s of Books</h3>
            <div
              style={{
                margin: "0 -16px",
                padding: "0 8px",
                content: "",
                display: "table",
                clear: "both"
              }}
            >

              {/* Input Box */}
              <div style={{ float: "left", width: "54%" }}>
                <input
                  type="text"
                  placeholder="ISBN, Author, or Title..."
                  value={this.state.query.searchquery}
                  onChange={this.inputChanged}
                  onKeyPress={this.handleKeyPress}
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
              {/* Submit Button */}
              <button
                type="submit"
                onClick={this.search}
                style={{
                  backgroundColor: "#3470d1",
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
      </header>
    );
  }
}

export default Mast;
