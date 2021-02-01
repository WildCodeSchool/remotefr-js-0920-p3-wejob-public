import React, { useEffect, useState } from 'react';
import './ListUsers.css';
import SingleUserShort from './SingleUserShort';
import axios from 'axios';

export default function ListUsers({ keyWords }) {
  console.log('keyWords LU : ', keyWords);

  const [candidats, setCandidats] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/api/candidats`).then((response) => {
      setCandidats(response.data);
    });
  }, []);

  return (
    <div className="listUsers">
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
              <SingleUserShort key={candidat.id} candidat={candidat} />
            ))
        : candidats.map((candidat) => (
            <SingleUserShort key={candidat.id} candidat={candidat} />
          ))}
    </div>
  );
}
