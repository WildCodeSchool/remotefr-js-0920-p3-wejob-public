import React from 'react';
import PropTypes from 'prop-types';

import './Public.css';

function Public({ onChangeKeywords }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
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
            onChange={onChangeKeywords}
          />
        </div>
        <div className="col-md-3">
          <button className="btn btn-primary text-white" type="submit">
            Valider
          </button>
        </div>
      </div>
    </form>
  );
}

Public.propTypes = {
  onChangeKeywords: PropTypes.func.isRequired,
};

export default Public;
