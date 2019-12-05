import Login from "./login";
import React, { useState } from "react";
import NavBar from "./NavBar";
import Mast from "./Mast";
import PageContent from "./PageContent";
import Footer from "./Footer";
import Book from "./Book";
import BookView from "./BookView";
import ShoppingCart from "./ShoppingCart";
import Orders from "./orders";

function App() {
  const [token, setToken] = useState("");

  const userLogin = tok => {
    setToken(tok);
  };

  return (
    <div>
      <NavBar />
      <Mast />
    </div>
  );
}

export default App;
