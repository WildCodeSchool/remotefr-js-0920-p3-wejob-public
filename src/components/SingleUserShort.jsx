import React from 'react';
import './SingleUserShort.css';
import { Link } from 'react-router-dom';

export default function SingleUser(props) {
  const { user } = props;
  return (
    <div className="Card">
      <h2 className="Title">
        {user.firstname} {user.lastname}
      </h2>
      <h3>Disponibility: {user.disponibility}</h3>
      <img className="ProfileImg" src={user.picture} alt={user.id} />
      <h3>{user.description}</h3>
      <Link to={`/user/${user.id}`} key={user.id}>
        <button id="btnSeeMore" type="button" className="btnSeeMore">
          En savoir plus sur ce candidat
        </button>
      </Link>
    </div>
  );
}
