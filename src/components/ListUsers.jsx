import React from 'react';
import './ListUsers.css';
import SingleUserShort from './SingleUserShort';

export default function ListUsers({ users }) {
  const listUsers = users.map((user) => (
    <SingleUserShort
      key={user.id}
      id={user.id}
      firstname={user.firstname}
      lastname={user.lastname}
      disponibility={user.disponibility}
      picture={user.picture}
      description={user.description}
      diploma={user.diploma}
      activity_area_id={user.activity_area_id}
      awailability={user.awailability}
      mobility={user.mobility}
      years_of_experiment={user.years_of_experiment}
      password={user.password}
      mail={user.mail}
      statut={user.statut}
      create_at={user.create_at}
      update_at={user.update_at}
      open_to_formation={user.open_to_formation}
      cv={user.cv}
      linkedin={user.linkedin}
      youtube={user.youtube}
    />
  ));

  return <div className="listUsers">{listUsers}</div>;
}
