import React, { useState, useEffect, useMemo } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Fuse from 'fuse.js';
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
  const memoizedFuse = useMemo(() => new Fuse(candidats, {
    keys: ['job'],
    threshold: 0.3
  }), [candidats]);
  const memoizedResults = useMemo(() => keyWords ? memoizedFuse.search(keyWords).map(({ item }) => item) : candidats, [candidats, keyWords, memoizedFuse])

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/recruteurs/check`, {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data.status);
      });
  }, []);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/candidats`).then((response) => {
      setCandidats(response.data.map(({ job, ...rest}) => ({ ...rest, job: job.split(';')})));
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <CandidatesContext.Provider value={candidats}>
        <div className="App container">
          <div className="Homepage">
            <Route exact path="/">
              <Public handleKeyWords={setKeyWords} />
              <ListUsers candidates={memoizedResults} />
            </Route>
            <Route exact path="/candidat/:id" component={SingleUserFull} />
          </div>
        </div>
      </CandidatesContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
