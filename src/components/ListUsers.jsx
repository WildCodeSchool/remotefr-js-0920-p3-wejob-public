import React from 'react';
import './ListUsers.css';
import PropTypes from 'prop-types';
import SingleUserShort from './SingleUserShort';

function ListUsers({ candidates }) {
  return (
    <div className="listUsers row">
      {candidates.map((candidat) => (
        <div key={candidat.id} className="col-md-6">
          <SingleUserShort candidat={candidat} />
        </div>
      ))}
    </div>
  );
}

ListUsers.propTypes = {
  candidates: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ).isRequired,
};

export default ListUsers;
