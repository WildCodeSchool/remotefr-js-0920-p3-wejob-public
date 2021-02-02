import React from 'react';
import './SingleUserShort.css';
import { Link } from 'react-router-dom';
// import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
// import axios from 'axios';

export default function SingleUser(props) {
  const { candidat } = props;
  console.log(candidat)

  return (
    <div className="SingleUserShort card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={candidat.picture}
            className="rounded-circle"
            alt={`${candidat.firstname} ${candidat.lastname}`}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">
              <Link
                className="text-primary"
                to={`/candidat/${candidat.id}`}
                key={candidat.id}
              >
                {candidat.firstname} {candidat.lastname?.substring(0, 1)}
              </Link>
            </h5>
            <p className="card-text">
              {candidat.job && candidat.job.map((job, idx) => <span key={idx} className="badge bg-primary">
                {job}
              </span>)}
            </p>
            <p className="card-text">
              {/* {candidat.sector_of_activity.map((sector) => <span key={sector.id_sector}>{sector.name_sector}</span>)} */}
              <span className="badge bg-primary">
                {candidat.sector_of_activity[0].name_sector}
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* <Popup
        trigger={<button>En savoir plus sur ce candidat</button>}
        position="right center"
      >

      </Popup> */}
    </div>
  );
}
