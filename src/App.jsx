import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Public from './components/Public';
import ListUsers from './components/ListUsers';
import SingleUserFull from './components/SingleUserFull';
import AuthContext from './components/AuthContext';
import CandidatesContext from './contexts/candidates';

function App() {
  const [keyWords, setKeyWords] = useState('');
  const [user, setUser] = useState(null);
  const [candidats, setCandidats] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/recruteurs/check`)
      .then((res) => {
        setUser(res.data);
      });
  }, []);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/candidats`).then((response) => {
      setCandidats(response.data);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <CandidatesContext.Provider value={candidats}>
      <div className="App container">
        <div className="Homepage">
          <Route exact path="/">
            <Public handleKeyWords={setKeyWords} />
            <ListUsers keyWords={keyWords} />
          </Route>
          <Route exact path="/candidat/:id" component={SingleUserFull} />
        </div>
      </div>
      </CandidatesContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
