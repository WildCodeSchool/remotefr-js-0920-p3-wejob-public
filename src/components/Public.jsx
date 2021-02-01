import React, { useState } from 'react';
import './Public.css';

export default function Public({ handleKeyWords }) {
  const [keywords, setKeywords] = useState('');

  const handleChange = (e) => setKeywords(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleKeyWords(keywords);
  };

  return (
    <form className="champsRecherche" onSubmit={handleSubmit}>
      <h1>Trouver votre candidat idéal</h1>
      <div className="row">
        <div className="col-md-8">
          <div className="boxForm">
            <label className="recherche" htmlFor="keyResearch">
              Recherche par mots clés
            </label>
            <input
              type="text"
              className="researchKey"
              id="keyResearch"
              name="keyResearch"
              // onChange={handleChange}
              onChange={e => handleKeyWords(e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-4">
          <button
            className="btn btn-primary text-white"
            type="submit"
          >
            Valider
          </button>
        </div>
      </div>
    </form>
  );
}
