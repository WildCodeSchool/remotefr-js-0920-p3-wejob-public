import React from 'react';
import './SingleUserShort.css';
import { Link } from 'react-router-dom';

export default function SingleUser(props) {
  return (
    <div className="Card">
      <h2 className="Title">
        {props.firstname} {props.lastname}
      </h2>
      <h3>Disponibility: {props.disponibility}</h3>
      <img className="ProfileImg" src={props.picture} alt={props.id} />
      <h3>{props.description}</h3>
      <Link to={`/user/${props.id}`} key={props.id}>
        <button id="btnSeeMore" type="button" className="btnSeeMore">
          En savoir plus sur ce candidat
        </button>
      </Link>
    </div>
  );
}
