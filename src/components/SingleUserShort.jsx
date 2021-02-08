/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getPictureUrl } from '../helpers/asset-url-getters';
import 'reactjs-popup/dist/index.css';
import './SingleUserShort.css';

// const limitLength = (str, maxLen = 10) => {
//   const words = str.split(' ');
//   let output = words[0];
//   let i = 1;
//   for (i = 1; i < words.length; i += 1) {
//     const toAdd = `${words[i]}`;
//     const next = `${output} ${toAdd}`;
//     if (next.length > maxLen) break;
//     output = next;
//   }
//   const didBreak = i < words.length;
//   return <>{output}{didBreak && <>&hellip;</>}</>;
// }

function SingleUser(props) {
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
                to={`/candidat/${candidat.slug}`}
                key={candidat.id}
              >
                {candidat.firstname} {candidat.lastname}
              </Link>
            </h4>
            <p className="card-text">
              {candidat.job &&
                candidat.job.map((job, idx) => (
                  <span key={idx} className="badge badge-job truncate">
                    {/* {limitLength(job, 30)} */}
                    {job}
                  </span>
                ))}
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
                to={`/candidat/${candidat.slug}`}
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

SingleUser.propTypes = {
  candidat: PropTypes.shape({
    id: PropTypes.number,
    slug: PropTypes.string,
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    picture: PropTypes.string,
    job: PropTypes.arrayOf(PropTypes.string),
    sector_of_activity: PropTypes.arrayOf(
      PropTypes.shape({
        name_sector: PropTypes.string,
      }),
    ),
  }).isRequired,
};

export default SingleUser;
