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
      <Link to={`/user/${user.id}`} key={user.id}>
        <button id="btnSeeMore" type="button" className="btnSeeMore">
          En savoir plus sur ce candidat
        </button>
      </Link>
      <Popup
        trigger={<button>En savoir plus sur ce candidat</button>}
        position="right center"
      >
        <div>Veuillez renseigner les champs suivants: Nom:</div>
      </Popup>
    </div>
  );
}
