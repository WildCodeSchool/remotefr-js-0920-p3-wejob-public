import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SingleUserFull.css';
import axios from 'axios';

export default function SingleUserFull(props) {
  // eslint-disable-next-line
  // const current_user = users.find((user) => user.id == props.match.params.id);

  const [candidat, setCandidat] = useState(null);

  // const candidat = candidats.find(
  //   (candidat) => candidat.id == props.match.params.id,
  // );

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/candidats/${props.match.params.id}`)
      .then((response) => {
        setCandidat(response.data[0]);
      });
  }, []);

  if (!candidat) {
    return <p>Loading</p>;
  }
  return (
    <div className="Full">
      <Link to="/">Retour</Link>
      <h1>
        {candidat.firstname} {candidat.lastname}
      </h1>
      <div>
        <img src={candidat.picture} alt={candidat.lastname} />
      </div>

      <ul className="marker">
        {candidat.description && (
          <li>
            <strong>Description: </strong>
            {candidat.description}
          </li>
        )}

        {candidat.diploma && (
          <li>
            <strong>Diploma: </strong>
            {candidat.diploma}
          </li>
        )}
        {candidat.activity_area_id && (
          <li>
            <strong>activity_area_id: </strong>
            {candidat.activity_area_id}
          </li>
        )}
        {candidat.awailability && (
          <li>
            <strong>Availability: </strong>
            {candidat.awailability}
          </li>
        )}
        {candidat.mobility && (
          <li>
            <strong>Mobility: </strong>
            {candidat.mobility}
          </li>
        )}
        {candidat.years_of_experiment && (
          <li>
            <strong>Years of experiment: </strong>
            {candidat.years_of_experiment}
          </li>
        )}
        {candidat.mail && (
          <li>
            <strong>Email: </strong>
            {candidat.mail}
          </li>
        )}
        {candidat.open_to_formation && (
          <li>
            <strong>Open to formation: </strong>
            {candidat.open_to_formation}
          </li>
        )}
        {candidat.cv && (
          <li>
            <strong>CV: </strong>
            {candidat.cv}
          </li>
        )}
        {candidat.linkedin && (
          <li>
            <strong>Linkedin: </strong>
            {candidat.linkedin}
          </li>
        )}
        {candidat.youtube && (
          <li>
            <strong>Youtube: </strong>
            {candidat.youtube}
          </li>
        )}
      </ul>
    </div>
  );
}
