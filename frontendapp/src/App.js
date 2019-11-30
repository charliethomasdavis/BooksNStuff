import React, { useState } from 'react';

// Components
import NavBar from './components/NavBar';
import Mast from './components/Mast';
import PageContent from './components/PageContent';
import BookView from './components/BookView/BookView';

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
