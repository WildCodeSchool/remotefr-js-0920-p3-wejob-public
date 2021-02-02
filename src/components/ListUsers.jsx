import React, { useContext } from 'react';
import './ListUsers.css';
import axios from 'axios';
import SingleUserShort from './SingleUserShort';
import CandidatesContext from '../contexts/candidates';

export default function ListUsers({ candidates }) {
  return (
    <div className="listUsers row">
      {candidates.map((candidat) => (
        <div key={candidat.id} className="col-md-4">
          <SingleUserShort candidat={candidat} />
        </div>
      ))}
    </div>
  );
}
