import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer
        style={{
          flexShrink: "0",
          textAlign: "center",
          backgroundColor: "tomato",
          color: "white"
        }}
      >
        <p> Built for CSC 425. </p>
      </footer>
    );
  }
}

export default Footer;
