import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Public from './components/Public';
import ListUsers from './components/ListUsers';
import SingleUserFull from './components/SingleUserFull';

function App() {
  const [keyWords, setKeyWords] = useState('');
  return (
    <div className="App">
      <div className="Homepage">
        <Public handleKeyWords={setKeyWords} />
        <Route exact path="/">
          <ListUsers keyWords={keyWords} />
        </Route>
        <Route exact path="/user/:id" component={SingleUserFull} />
      </div>
    </div>
  );
}

export default App;
