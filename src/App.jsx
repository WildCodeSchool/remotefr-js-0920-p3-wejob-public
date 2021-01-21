import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Public from './components/Public';
import ListUsers from './components/ListUsers';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <div className="Homepage">
        <Public />
        <Route>
          <ListUsers />
        </Route>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
