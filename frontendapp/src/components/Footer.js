import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div
        style={{
          position: "fixed",
          left: "0",
          bottom: "0",
          width: "100%",
          textAlign: "center",
          color: "white",
          backgroundColor: "black"
        }}
      >
        <p> Built for CSC 425. </p>
      </div>
    );
  }
}

export default Footer;
