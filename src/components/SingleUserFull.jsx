import React from 'react';

export default function SingleUserFull(props) {
  return (
    <div className="Full">
      <h1>
        {props.firstname} {props.lastname}
      </h1>
      <div>
        <img src={props.picture} alt={props.lastname} />
      </div>

      <ul className="marker">
        {props.description && (
          <li>
            <strong>Description: </strong>
            {props.description}
          </li>
        )}

        {props.diploma && (
          <li>
            <strong>Diploma: </strong>
            {props.diploma}
          </li>
        )}
        {props.activity_area_id && (
          <li>
            <strong>activity_area_id: </strong>
            {props.activity_area_id}
          </li>
        )}
        {props.awailability && (
          <li>
            <strong>Awailability: </strong>
            {props.awailability}
          </li>
        )}
        {props.mobility && (
          <li>
            <strong>Mobility: </strong>
            {props.mobility}
          </li>
        )}
        {props.years_of_experiment && (
          <li>
            <strong>Years of experiment: </strong>
            {props.years_of_experiment}
          </li>
        )}
        {props.mail && (
          <li>
            <strong>Mail: </strong>
            {props.mail}
          </li>
        )}
        {props.open_to_formation && (
          <li>
            <strong>Open to formation: </strong>
            {props.open_to_formation}
          </li>
        )}
        {props.cv && (
          <li>
            <strong>CV: </strong>
            {props.cv}
          </li>
        )}
        {props.linkedin && (
          <li>
            <strong>Linkedin: </strong>
            {props.linkedin}
          </li>
        )}
        {props.youtube && (
          <li>
            <strong>Youtube: </strong>
            {props.youtube}
          </li>
        )}
      </ul>
    </div>
  );
}
