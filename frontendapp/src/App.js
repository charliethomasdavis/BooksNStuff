import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Mast from './components/Mast';
import PageContent from './components/PageContent';
import Footer from './components/Footer';
import Book from './components/Book';
import BookView from './components/BookView';
import Books from './components/books';
import Login from './components/login';

function App() {

  const [token, setToken] = useState('');

  const userLogin = (tok) => {
    setToken(tok);
  }

  return (
    <div className="App">
      <NavBar />
      <Mast />
      <PageContent />
      <BookView />
      {/* <Login userLogin={userLogin}/>
      <Books token={token}/> */}
    </div>
  );
}

export default App;
