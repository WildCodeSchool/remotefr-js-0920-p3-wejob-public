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
      <h1>Trouvez votre candidat idéal</h1>
      <div className="row">
        <div className="col-md-3">
          <label className="recherche" htmlFor="keyResearch">
            Recherche par mots clés
          </label>
        </div>
        <div className="col-md-6">
          <input
            type="text"
            id="keyResearch"
            name="keyResearch"
            // onChange={handleChange}
            onChange={e => handleKeyWords(e.target.value)}
          />
        </div>
        <div className="col-md-3">
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
