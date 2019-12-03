import React from "react";
import logo from "./images/random.jpg";

const Contacts = ({ contacts }) => {
  return (
    <div>
      {contacts.map(contact => (
        <div
          style={{
            backgroundColor: "#f5f5f5",
            padding: "5px",
            width: "197px",
            height: "400px",
            boxShadow: "5px 5px 5px grey",
            margin: "5px",
            float: "left"
          }}
        >
          <img
            src={logo}
            style={{ width: "180px", height: "230px" }}
            alt="BookPic"
          />
          <h5 style={{ margin: "auto" }}>{contact.title}</h5>
          <p style={{ marginTop: "1px", fontSize: "11px" }}>
            by {contact.sname}
          </p>
          <p style={{ color: "#ffbf00", marginTop: "15px" }}>
            {(() => {
              if (contact.userreviews == 5) {
                return <div>★★★★★</div>;
              } else if (contact.userreviews == 4) {
                return <div>★★★★☆</div>;
              } else if (contact.userreviews == 3) {
                return <div>★★★☆☆</div>;
              } else if (contact.userreviews == 2) {
                return <div>★★☆☆☆</div>;
              } else {
                return <div>★☆☆☆☆</div>;
              }
            })()}
          </p>
          <p>${contact.price}</p>
          <button
            type="button"
            style={{
              marginBottom: "5px",
              marginTop: "2px",
              backgroundColor: "#983eda",
              color: "white",
              border: "none",
              textDecoration: "none",
              width: "90px",
              borderRadius: "25px"
            }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Contacts;
