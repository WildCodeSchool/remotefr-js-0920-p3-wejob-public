import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Public from './components/Public';
import ListUsers from './components/ListUsers';
import SingleUserFull from './components/SingleUserFull';
import AuthContext from './components/AuthContext';

function App() {
  const [keyWords, setKeyWords] = useState('');
  const [user, setUser] = useState({});
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACK_URL}/recruteur/check`)
      .then((response) => {
        setUser(res.data);
      });
  }, []);

  return (
    <AuthContext.Provider value={user}>
      <div className="App">
        <div className="Homepage">
          <Public handleKeyWords={setKeyWords} />
          <Route exact path="/">
            <ListUsers keyWords={keyWords} />
          </Route>
          <Route exact path="/user/:id" component={SingleUserFull} />
        </div>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
