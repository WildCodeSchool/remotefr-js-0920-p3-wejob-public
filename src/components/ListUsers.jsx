import React, { useEffect, useState } from 'react';
import './ListUsers.css';
import axios from 'axios';
import SingleUserShort from './SingleUserShort';

export default function ListUsers({ keyWords }) {
  console.log('keyWords LU : ', keyWords);

  const [candidats, setCandidats] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/candidats`).then((response) => {
      setCandidats(response.data);
    });
  }, []);

  return (
    <div className="listUsers row">
      {keyWords
        ? candidats
            .filter(
              (u) =>
                u.keyWords &&
                (u.keyWords.toLowerCase().includes(keyWords.toLowerCase()) ||
                  u.job.toLowerCase().includes(keyWords.toLowerCase()) ||
                  u.description
                    .toLowerCase()
                    .includes(keyWords.toLowerCase()) ||
                  u.language.toLowerCase().includes(keyWords.toLowerCase())),
            )
            .map((candidat) => (
              <div key={candidat.id} className="col-md-4">
                <SingleUserShort candidat={candidat} />
              </div>
            ))
        : candidats.map((candidat) => (
            <div key={candidat.id} className="col-md-4">
              <SingleUserShort candidat={candidat} />
            </div>
          ))}
    </div>
  );
}
