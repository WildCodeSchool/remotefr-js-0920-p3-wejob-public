import React, { useContext } from 'react';
import './ListUsers.css';
import axios from 'axios';
import SingleUserShort from './SingleUserShort';
import CandidatesContext from '../contexts/candidates';

export default function ListUsers({ keyWords }) {
  console.log('keyWords LU : ', keyWords);
  const candidats = useContext(CandidatesContext);

  const keylow = keyWords.toLowerCase();

  return (
    <div className="listUsers row">
      {keyWords
        ? candidats
            .filter(
              (u) =>
                // u.keywords?.toLowerCase().includes(keylow) ||
                u.job.split(';')[0]?.toLowerCase().includes(keylow) || false
                // u.description?.toLowerCase().includes(keylow) ||
                // u.language
                //   .map((l) => l.lang)
                //   .join(';')
                //   .toLowerCase()
                //   .includes(keylow),
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
