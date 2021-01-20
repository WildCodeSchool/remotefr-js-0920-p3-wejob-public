import React from 'react';
import './App.css';
import Public from './components/Public';
import ListUsers from './components/ListUsers';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Public />
      <div className="Listuser">
        <ListUsers />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
