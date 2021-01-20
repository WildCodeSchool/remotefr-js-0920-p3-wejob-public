import React from 'react';
import './SingleUserShort.css';

export default function SingleUser(props) {
  return (
    <div className="Card">
      <h2 className="Title">
        {props.firstname} {props.lastname}
      </h2>
      <h3>Disponibility: {props.disponibility}</h3>
      <img className="ProfileImg" src={props.picture} alt={props.id} />
      <h3>{props.description}</h3>
    </div>
  );
}
