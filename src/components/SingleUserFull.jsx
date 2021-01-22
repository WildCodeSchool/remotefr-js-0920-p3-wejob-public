import React from 'react';
import { Link } from 'react-router-dom';
import './SingleUserFull.css';

const users = [
  {
    id: 0,
    lastname: 'Wagner',
    firstname: 'Christian',
    description:
      'Je suis conducteur de poids lours et je cherche un travail dans toute la france',
    diploma: 'ingenier',
    activity_area_id: 1,
    awailability: 2,
    mobility: 1000,
    years_of_experiment: 10,
    password: 'EgTTOgnze46648',
    mail: 'martin@hotmail.fr',
    statut: 'online',
    create_at: '26/05/1999',
    update_at: '29/05/1999',
    open_to_formation: 'yes',
    cv: 'fichier.pdf',
    linkedin: 'lien.com',
    youtube: 'lien.com',
    picture: 'https://via.placeholder.com/150',
  },
  {
    id: 1,
    firstname: 'Jack',
    lastname: 'Newman',
    description: 'Pilote de ligne',
    diploma: 'ingenier',
    activity_area_id: 1,
    awailability: 2,
    mobility: 1000,
    years_of_experiment: 10,
    password: 'EgTTOgnze46648',
    mail: 'martin@hotmail.fr',
    statut: 'online',
    create_at: '26/05/1999',
    update_at: '29/05/1999',
    open_to_formation: 'yes',
    cv: 'fichier.pdf',
    linkedin: 'lien.com',
    youtube: 'lien.com',
    picture: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    firstname: 'Edna',
    lastname: 'Hale',
    description: 'Caissière',
    diploma: 'ingenier',
    activity_area_id: 1,
    awailability: 2,
    mobility: 1000,
    years_of_experiment: 10,
    password: 'EgTTOgnze46648',
    mail: 'martin@hotmail.fr',
    statut: 'online',
    create_at: '26/05/1999',
    update_at: '29/05/1999',
    open_to_formation: 'yes',
    cv: 'fichier.pdf',
    linkedin: 'lien.com',
    youtube: 'lien.com',
    picture: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    firstname: 'Martin',
    lastname: 'Francois',
    description: 'Acteur',
    diploma: 'ingenier',
    activity_area_id: 1,
    awailability: 2,
    mobility: 1000,
    years_of_experiment: 10,
    password: 'EgTTOgnze46648',
    mail: 'martin@hotmail.fr',
    statut: 'online',
    create_at: '26/05/1999',
    update_at: '29/05/1999',
    open_to_formation: 'yes',
    cv: 'fichier.pdf',
    linkedin: 'lien.com',
    youtube: 'lien.com',
    picture: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    firstname: 'Simon',
    lastname: 'Levy',
    description: 'Réalisateur',
    diploma: 'ingenier',
    activity_area_id: 1,
    awailability: 2,
    mobility: 1000,
    years_of_experiment: 10,
    password: 'EgTTOgnze46648',
    mail: 'martin@hotmail.fr',
    statut: 'online',
    create_at: '26/05/1999',
    update_at: '29/05/1999',
    open_to_formation: 'yes',
    cv: 'fichier.pdf',
    linkedin: 'lien.com',
    youtube: 'lien.com',
    picture: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    firstname: 'Mohamed',
    lastname: 'Hatal',
    description: 'Chomeur',
    diploma: 'ingenier',
    activity_area_id: 1,
    awailability: 2,
    mobility: 1000,
    years_of_experiment: 10,
    password: 'EgTTOgnze46648',
    mail: 'martin@hotmail.fr',
    statut: 'online',
    create_at: '26/05/1999',
    update_at: '29/05/1999',
    open_to_formation: 'yes',
    cv: 'fichier.pdf',
    linkedin: 'lien.com',
    youtube: 'lien.com',
    picture: 'https://via.placeholder.com/150',
  },
  {
    id: 6,
    firstname: 'Sarah',
    lastname: 'Pitzkowsky',
    description: 'Carriste',
    diploma: 'ingenier',
    activity_area_id: 1,
    awailability: 2,
    mobility: 1000,
    years_of_experiment: 10,
    password: 'EgTTOgnze46648',
    mail: 'martin@hotmail.fr',
    statut: 'online',
    create_at: '26/05/1999',
    update_at: '29/05/1999',
    open_to_formation: 'yes',
    cv: 'fichier.pdf',
    linkedin: 'lien.com',
    youtube: 'lien.com',
    picture: 'https://via.placeholder.com/150',
  },
  {
    id: 7,
    firstname: 'Martine',
    lastname: 'Azau',
    description: 'Animateur pour enfant',
    diploma: 'ingenier',
    activity_area_id: 1,
    awailability: 2,
    mobility: 1000,
    years_of_experiment: 10,
    password: 'EgTTOgnze46648',
    mail: 'martin@hotmail.fr',
    statut: 'online',
    create_at: '26/05/1999',
    update_at: '29/05/1999',
    open_to_formation: 'yes',
    cv: 'fichier.pdf',
    linkedin: 'lien.com',
    youtube: 'lien.com',
    picture: 'https://via.placeholder.com/150',
  },
  {
    id: 8,
    firstname: 'Zinedine',
    lastname: 'Zidane',
    description: 'Clown',
    diploma: 'ingenier',
    activity_area_id: 1,
    awailability: 2,
    mobility: 1000,
    years_of_experiment: 10,
    password: 'EgTTOgnze46648',
    mail: 'martin@hotmail.fr',
    statut: 'online',
    create_at: '26/05/1999',
    update_at: '29/05/1999',
    open_to_formation: 'yes',
    cv: 'fichier.pdf',
    linkedin: 'lien.com',
    youtube: 'lien.com',
    picture: 'https://via.placeholder.com/150',
  },
];

export default function SingleUserFull(props) {
  // eslint-disable-next-line
  const current_user = users.find((user) => user.id == props.match.params.id);

  return (
    <div className="Full">
      <Link to="/">Retour</Link>
      <h1>
        {current_user.firstname} {current_user.lastname}
      </h1>
      <div>
        <img src={current_user.picture} alt={current_user.lastname} />
      </div>

      <ul className="marker">
        {current_user.description && (
          <li>
            <strong>Description: </strong>
            {current_user.description}
          </li>
        )}

        {current_user.diploma && (
          <li>
            <strong>Diploma: </strong>
            {current_user.diploma}
          </li>
        )}
        {current_user.activity_area_id && (
          <li>
            <strong>activity_area_id: </strong>
            {current_user.activity_area_id}
          </li>
        )}
        {current_user.awailability && (
          <li>
            <strong>Availability: </strong>
            {current_user.awailability}
          </li>
        )}
        {current_user.mobility && (
          <li>
            <strong>Mobility: </strong>
            {current_user.mobility}
          </li>
        )}
        {current_user.years_of_experiment && (
          <li>
            <strong>Years of experiment: </strong>
            {current_user.years_of_experiment}
          </li>
        )}
        {current_user.mail && (
          <li>
            <strong>Email: </strong>
            {current_user.mail}
          </li>
        )}
        {current_user.open_to_formation && (
          <li>
            <strong>Open to formation: </strong>
            {current_user.open_to_formation}
          </li>
        )}
        {current_user.cv && (
          <li>
            <strong>CV: </strong>
            {current_user.cv}
          </li>
        )}
        {current_user.linkedin && (
          <li>
            <strong>Linkedin: </strong>
            {current_user.linkedin}
          </li>
        )}
        {current_user.youtube && (
          <li>
            <strong>Youtube: </strong>
            {current_user.youtube}
          </li>
        )}
      </ul>
    </div>
  );
}
