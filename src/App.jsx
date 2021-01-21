import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Public from './components/Public';
import ListUsers from './components/ListUsers';
import SingleUserFull from './components/SingleUserFull';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <div className="Homepage">
        <Public />
        <Route exact path="/" component={ListUsers} />
        <Route exact path="/user/:id" component={SingleUserFull} />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
