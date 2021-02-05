import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './SingleUserFull.css';
import AuthContext from './AuthContext';
import RecruiterForm from './RecruiterForm';
import {getPictureUrl, getCvUrl} from '../helpers/asset-url-getters';
import { levelOfExperience, availabilitylist, mobilitylist } from '../constants/selectors';

export default function SingleUserFull(props) {
  const { user, setUser } = useContext(AuthContext);
  // eslint-disable-next-line
  // const current_user = users.find((user) => user.id == props.match.params.id);

  const [candidat, setCandidat] = useState(null);

  // const candidat = candidats.find(
  //   (candidat) => candidat.id == props.match.params.id,
  // );

  useEffect(() => {
    if (!user) return;
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/candidats/${props.match.params.id}`,
      )
      .then((response) => {
        const { job, keywords, ...rest } = response.data;
        const cand = {
          ...rest,
          job: job.split(';'),
          keywords: job.split(';'),
          experienceLabel: levelOfExperience[rest.years_of_experiment],
          availabilityLabel: availabilitylist[rest.availability],
          mobilityLabel: mobilitylist[rest.mobility]
        };
        setCandidat(cand);
      })
      .catch((err) => console.error(err));
  }, [user]);

  if (!user) {
    return <RecruiterForm setUser={setUser} />;
  }

  if (!candidat) {
    return <p>Loading</p>;
  }
  console.log(availabilitylist, candidat)
  return (
    <div className="SingleUserFull">
      <div className="row">
        <div className="col-md-12">
          <Link to="/">Retour</Link>
          <h1>
            {candidat.firstname} {candidat.lastname}
          </h1>
        </div>
        <div className="col-md-4">
          <img
            src={getPictureUrl(candidat.picture)}
            className="rounded-circle"
            alt={`${candidat.firstname} ${candidat.lastname}`}
          />
        </div>
        <div className="col-md-8">
          <h4>Métier(s)</h4>
          {candidat.job &&
            candidat.job.map((job) => (
              <span key={job} className="badge badge-job">
                {job}
              </span>
            ))}
          <h4>Secteur(s) d&#39;activité</h4>
          {candidat.sector_of_activity &&
            candidat.sector_of_activity.map((sec) => (
              <span key={sec.id_sector} className="badge badge-sector">
                {sec.name_sector}
              </span>
            ))}
            <h4>Mots-clés</h4>
            {candidat.keywords &&
              candidat.keywords.map((kw) => (
                <span key={kw} className="badge badge-keyword">
                  {kw}
                </span>
              ))}
            <h4>Langues</h4>
            {candidat.language && (
              candidat.language.map((lang) => (
                <span key={lang.id_lang} className="badge badge-lang">
                  {lang.lang}
                </span>
              ))
            )}
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
            {candidat.availability && (
              <li>
                <strong>Disponibilité : </strong>
                {candidat.availabilityLabel}
              </li>
            )}
            {candidat.mobility && (
              <li>
                <strong>Mobilité : </strong>
                {candidat.mobilityLabel}
              </li>
            )}
            {candidat.experienceLabel && (
              <li>
                <strong>Expérience : </strong>
                {candidat.experienceLabel}
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
                <i className="fab fa-linkedin" />
                  {' '}
                  <a rel="noopener noreferrer" target="_blank" href={candidat.linkedin}>{candidat.linkedin}</a>
              </li>
            )}
            {candidat.youtube && (
              <li><i className="fab fa-youtube" />
              {' '}
              <a rel="noopener noreferrer" target="_blank" href={candidat.youtube}>{candidat.youtube}</a>
              </li>
            )}
            {candidat.cv1 && (
              <li><i className="far fa-file-pdf" />
              {' '}
              <a rel="noopener noreferrer" target="_blank" href={getCvUrl(candidat.cv1)}>{candidat.cv1}</a>
              </li>
            )}
            {candidat.cv2 && (
              <li><i className="far fa-file-pdf" />
              {' '}
              <a rel="noopener noreferrer" target="_blank" href={getCvUrl(candidat.cv2)}>{candidat.cv2}</a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
