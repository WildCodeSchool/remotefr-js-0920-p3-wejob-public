import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SingleUserFull.css';
import axios from 'axios';

export default function SingleUserFull(props) {
  // eslint-disable-next-line
  // const current_user = users.find((user) => user.id == props.match.params.id);

  const current_candidat = candidats.find(
    (candidat) => candidat.id == props.match.params.id,
  );
  console.log(props.match.params.id, current_candidat);

  const [candidats, setCandidats] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/candidats/${current_candidat.id}`)
      .then((response) => {
        setCandidats(response.data);
      });
  });

  return (
    <div className="Full">
      <Link to="/">Retour</Link>
      <h1>
        {current_candidat.firstname} {current_candidat.lastname}
      </h1>
      <div>
        <img src={current_candidat.picture} alt={current_candidat.lastname} />
      </div>

      <ul className="marker">
        {current_candidat.description && (
          <li>
            <strong>Description: </strong>
            {current_candidat.description}
          </li>
        )}

        {current_candidat.diploma && (
          <li>
            <strong>Diploma: </strong>
            {current_candidat.diploma}
          </li>
        )}
        {current_candidat.activity_area_id && (
          <li>
            <strong>activity_area_id: </strong>
            {current_candidat.activity_area_id}
          </li>
        )}
        {current_candidat.awailability && (
          <li>
            <strong>Availability: </strong>
            {current_candidat.awailability}
          </li>
        )}
        {current_candidat.mobility && (
          <li>
            <strong>Mobility: </strong>
            {current_candidat.mobility}
          </li>
        )}
        {current_candidat.years_of_experiment && (
          <li>
            <strong>Years of experiment: </strong>
            {current_candidat.years_of_experiment}
          </li>
        )}
        {current_candidat.mail && (
          <li>
            <strong>Email: </strong>
            {current_candidat.mail}
          </li>
        )}
        {current_candidat.open_to_formation && (
          <li>
            <strong>Open to formation: </strong>
            {current_candidat.open_to_formation}
          </li>
        )}
        {current_candidat.cv && (
          <li>
            <strong>CV: </strong>
            {current_candidat.cv}
          </li>
        )}
        {current_candidat.linkedin && (
          <li>
            <strong>Linkedin: </strong>
            {current_candidat.linkedin}
          </li>
        )}
        {current_candidat.youtube && (
          <li>
            <strong>Youtube: </strong>
            {current_candidat.youtube}
          </li>
        )}
      </ul>
    </div>
  );
}
