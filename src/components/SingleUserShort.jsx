/* eslint-disable react/no-array-index-key */
import React from 'react';
import './SingleUserShort.css';
import { Link } from 'react-router-dom';
import {getPictureUrl} from '../helpers/asset-url-getters';
import 'reactjs-popup/dist/index.css';

const limitLength = (str, maxLen = 10) => {
  const words = str.split(' ');
  let output = words[0];
  let i = 1;
  for (i = 1; i < words.length; i += 1) {
    const toAdd = `${words[i]}`;
    const next = `${output} ${toAdd}`;
    if (next.length > maxLen) break;
    output = next;
  }
  const didBreak = i < words.length;
  return <>{output}{didBreak && <>&hellip;</>}</>;
}

export default function SingleUser(props) {
  const { candidat } = props;

  return (
    <div className="SingleUserShort card">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={getPictureUrl(candidat.picture)}
            className="rounded-circle"
            alt={`${candidat.firstname} ${candidat.lastname}`}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h4 className="card-title">
              <Link
                className="text-primary"
                to={`/candidat/${candidat.id}`}
                key={candidat.id}
              >
                {candidat.firstname} {candidat.lastname?.substring(0, 1)}
              </Link>
            </h4>
            <p className="card-text">
              {candidat.job && candidat.job.map((job, idx) => <span key={idx} className="badge badge-job truncate">
              {/* {limitLength(job, 30)} */}
              {job}
              </span>)}
            </p>
            <p className="card-text">
              {/* {candidat.sector_of_activity.map((sector) => <span key={sector.id_sector}>{sector.name_sector}</span>)} */}
              <span className="badge badge-sector truncate">
                {candidat.sector_of_activity[0].name_sector}
              </span>
            </p>
            <div className="text-right">
              <Link
                className="btn btn-primary"
                to={`/candidat/${candidat.id}`}
                key={candidat.id}
              >
                Voir plus
              </Link>
            </div>
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
