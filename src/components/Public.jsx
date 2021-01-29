import React from 'react';
import './Public.css';

export default function Public({ handleKeyWords }) {
  // const { register, handleSubmit, formState, errors } = useForm();
  // const { isSubmitting } = formState;

  // const onSubmit = async (data) => {
  //   handleKeyWords(data.keyResearch);
  // };
  const isSubmitting = false;

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form className="champsRecherche" onSubmit={handleSubmit}>
      <h1>Trouver votre candidat idéal</h1>
      <div className="row">
        <div className="boxForm">
          <label className="recherche" htmlFor="keyResearch">
            Recherche par mots clés
          </label>
          <input
            type="text"
            className="researchKey"
            id="keyResearch"
            name="keyResearch"
          />
        </div>

        <button disabled={isSubmitting} type="submit">
          Valider
        </button>
      </div>
    </form>
  );
}
