import React from 'react';
import './SingleUserShort.css';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function SingleUser(props) {
  const { user } = props;
  return (
    <div className="Card">
      <h2 className="Title">
        {user.firstname} {user.lastname.substring(0, 1)}.
      </h2>
      <h3>Secteur d'activité: {user.activity_area_id}</h3>
      <img className="ProfileImg" src={user.picture} alt={user.id} />
      <h3>{user.job}</h3>
      <h3>{user.description}</h3>
      <Popup
        trigger={<button>En savoir plus sur ce candidat</button>}
        position="right center"
      >
        <div>
          Veuillez renseigner les champs suivants:
          <label for="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            minlength="4"
            maxlength="255"
            size="10"
          ></input>
          <label for="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            required
            minlength="5"
            maxlength="255"
            size="10"
          ></input>
          <label for="phone">Téléphone:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            required
            minlength="10"
            maxlength="10"
            size="10"
          ></input>
          <Link to={`/user/${user.id}`} key={user.id}>
            <button id="btnSeeMore" type="button" className="btnSeeMore">
              Ok
            </button>
          </Link>
        </div>
      </Popup>
    </div>
  );
}
