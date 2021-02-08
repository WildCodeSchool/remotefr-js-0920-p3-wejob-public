import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './SingleUserFull.css';
import AuthContext from './AuthContext';
import RecruiterForm from './RecruiterForm';
import { getPictureUrl, getCvUrl } from '../helpers/asset-url-getters';
import {
  levelOfExperience,
  availabilitylist,
  mobilitylist,
} from '../constants/selectors';

export default function SingleUserFull() {
  const { slug } = useParams();
  const { user, setUser } = useContext(AuthContext);
  const [candidat, setCandidat] = useState(null);
  const [error, setError] = useState(null);
  // const candidat = candidats.find(
  //   (candidat) => candidat.id == props.match.params.id,
  // );

  useEffect(() => {
    if (!user) return;
    axios
      .get(`${process.env.REACT_APP_API_URL}/candidats/${slug}`, {
        withCredentials: true,
      })
      .then((response) => {
        const { job, keywords, ...rest } = response.data;
        const cand = {
          ...rest,
          job: job.split(';'),
          keywords: job.split(';'),
          experienceLabel: levelOfExperience[rest.years_of_experiment],
          availabilityLabel: availabilitylist[rest.availability],
          mobilityLabel: mobilitylist[rest.mobility],
        };
        setCandidat(cand);
      })
      .catch((err) => {
        const msg =
          err?.response?.status === 404
            ? "Cette fiche candidat n'existe plus ou a été momentanément désactivée"
            : "Une erreur s'est produite, veuillez nous contacter ou réessayer ultérieurement.";
        setError(new Error(msg));
      });
  }, [user, slug]);

  if (!user) {
    return <RecruiterForm setUser={setUser} />;
  }

  if (error) {
    return (
      <div className="container">
        <div className="alert alert-danger">
          {error.message}. <Link to="/">Retour à la liste</Link>
        </div>
      </div>
    );
  }

  if (!candidat) {
    return <p>Loading</p>;
  }
  return (
    <div className="SingleUserFull">
      <div className="row">
        <div className="col-md-3">
          <Link to="/">Retour</Link>
        </div>
        <div className="col-md-9">
          <h1>
            {candidat.firstname} {candidat.lastname}
          </h1>
        </div>
        <div className="col-md-3">
          <img
            src={getPictureUrl(candidat.picture)}
            className="rounded-circle"
            alt={`${candidat.firstname} ${candidat.lastname}`}
          />
        </div>
        <main className="col-md-6">
          <h4>Métier(s)</h4>
          {candidat.job &&
            candidat.job.map((job) => (
              <span key={job} className="badge badge-job">
                {job}
              </span>
            ))}
          <ul className="marker">
            {candidat.description && (
              <li>
                <strong>Description: </strong>
                {candidat.description}
              </li>
            )}
            {candidat.experienceLabel && (
              <li>
                <strong>Expérience : </strong>
                {candidat.experienceLabel}
              </li>
            )}
            {candidat.diploma && (
              <li>
                <strong>Diplôme(s) : </strong>
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
          </ul>
        </main>
        <div className="col-md-3">
          <div className="panel panel-default">
            <div className="panel-body">
              <h6>Secteur(s) d&#39;activité</h6>
              {candidat.sector_of_activity &&
                candidat.sector_of_activity.map((sec) => (
                  <span key={sec.id_sector} className="badge badge-sector">
                    {sec.name_sector}
                  </span>
                ))}
              <h6>Mots-clés</h6>
              {candidat.keywords &&
                candidat.keywords.map((kw) => (
                  <span key={kw} className="badge badge-keyword">
                    {kw}
                  </span>
                ))}
              <h6>Langues</h6>
              {candidat.language &&
                candidat.language.map((lang) => (
                  <span key={lang.id_lang} className="badge badge-lang">
                    {lang.lang}
                  </span>
                ))}
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-body">
              <ul className="marker">
                {candidat.linkedin && (
                  <li>
                    <i className="fab fa-linkedin" />{' '}
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={candidat.linkedin}
                    >
                      Profil LinkedIn
                    </a>
                  </li>
                )}
                {candidat.youtube && (
                  <li>
                    <i className="fab fa-youtube" />{' '}
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={candidat.youtube}
                    >
                      Présentation vidéo
                    </a>
                  </li>
                )}
                {candidat.cv1 && (
                  <li>
                    <i className="far fa-file-pdf" />{' '}
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={getCvUrl(candidat.cv1)}
                    >
                      {candidat.cv1}
                    </a>
                  </li>
                )}
                {candidat.cv2 && (
                  <li>
                    <i className="far fa-file-pdf" />{' '}
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={getCvUrl(candidat.cv2)}
                    >
                      {candidat.cv2}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
