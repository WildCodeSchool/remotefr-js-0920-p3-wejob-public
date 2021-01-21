import React from 'react';
import './ListUsers.css';
import SingleUserShort from './SingleUserShort';

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

export default function ListUsers() {
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
