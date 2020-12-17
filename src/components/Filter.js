import React from 'react';

const candidat = [
  {
    id: 0,
    firstname: "Christian",
    lastname: "Wagner",
    job: "conducteur de poids lourds",
    qualification: null,
    sectorOfActivity: "logistic",
    yearsOfExperiment: 10,
    disponibility: "as soon as possible",
    mobility: "France",
    language: "french", "english",
  },
  {
    id: 1,
    firstname: "Jack",
    lastname: "Newman",
    job: "expert comptable",
    qualification: "Bac +5",
    sectorOfActivity: "finance",
    yearsOfExperiment: 25,
    disponibility: "3 months",
    mobility: "Rhone-Alpes",
    language: "french", "english", 'german',
  },
  {
    id: 2,
    firstname: "Melanie",
    lastname: "Douglas",
    job: "caissière",
    qualification: null,
    sectorOfActivity: null,
    yearsOfExperiment: 1,
    disponibility: "as soon as possible",
    mobility: "Bordeaux",
    language: "french",
  },
  {
    id: 3,
    firstname: "Edna",
    lastname: "Hale",
    job: "Chimiste",
    qualification: "Bac +2 IUT de Chimie", "Bac +5 Cpe Lyon",
    sectorOfActivity: "Industry",
    yearsOfExperiment: 0,
    disponibility: "4 weeks",
    mobility: "Aix en Provence", "Region Nord",
    language: "french", "english",
  },
];


function Filter() {
  return (
    <div>
      {candidat.filter(candidat => candidat.id = {value.state}).map(filteredCandidat => (
        <li>
          {filteredCandidat.id}
        </li>
      ))}
    </div>
  );
}

export default Filter;