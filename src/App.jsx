import React from 'react';
import './App.css';
import Public from './components/Public';
import Candidat from './components/Candidat';

const candidat = [
  {
    id: 0,
    firstname: 'Christian',
    lastname: 'Wagner',
    job: 'conducteur de poids lourds',
    qualification: null,
    sectorOfActivity: 'logistic',
    yearsOfExperiment: 10,
    disponibility: 'as soon as possible',
    mobility: 'France',
    language: ['french', 'english'],
    picture: 'https://via.placeholder.com/150',
    description:
      'Je suis conducteur de poids lours et je cherche un travail dans toute la france',
  },
  {
    id: 1,
    firstname: 'Jack',
    lastname: 'Newman',
    job: 'expert comptable',
    qualification: 'Bac +5',
    sectorOfActivity: 'finance',
    yearsOfExperiment: 25,
    disponibility: '3 months',
    mobility: 'Rhone-Alpes',
    language: 'french' /*"english", 'german',*/,
    picture: 'https://via.placeholder.com/150',
    description: 'lorem imsum dolor blabla',
  },
  {
    id: 2,
    firstname: 'Melanie',
    lastname: 'Douglas',
    job: 'caissière',
    qualification: null,
    sectorOfActivity: null,
    yearsOfExperiment: 1,
    disponibility: 'as soon as possible',
    mobility: 'Bordeaux',
    language: 'french',
    picture: 'https://via.placeholder.com/150',
    description: 'lorem imsum dolor blabla',
  },
  {
    id: 3,
    firstname: 'Edna',
    lastname: 'Hale',
    job: 'Chimiste',
    qualification: 'Bac +2 IUT de Chimie' /*"Bac +5 Cpe Lyon",*/,
    sectorOfActivity: 'Industry',
    yearsOfExperiment: 0,
    disponibility: '4 weeks',
    mobility: 'Aix en Provence' /*"Region Nord",*/,
    language: 'french' /*"english",*/,
    picture: 'https://via.placeholder.com/150',
    description: 'lorem imsum dolor blabla',
  },
];

function App() {
  const listCard = candidat.map((single) => (
    <Candidat
      key={single.id}
      firstname={single.firstname}
      lastname={single.lastname}
      disponibility={single.disponibility}
      picture={single.picture}
      description={single.description}
    />
  ));
  return (
    <div className="App">
      {/* <Header /> */}
      <Public />
      <div className="ListCard">{listCard}</div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
