import React from 'react';
import { useForm } from 'react-hook-form';
import './Public.css';

export default function Public({ handleKeyWords }) {
  const { register, handleSubmit, formState, errors } = useForm();
  const { isSubmitting } = formState;

  const onSubmit = async (data) => {
    handleKeyWords(data.keyResearch);
  };

  // console.log(errors);

  return (
    <form className="champsRecherche" onSubmit={handleSubmit(onSubmit)}>
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
            ref={register}
            // defaultValue="Métier, Secteur d'activité, Description, Compétences, Langues"
          />
          {errors.keyResearch && <span>{errors.keyResearch.message}</span>}
        </div>

        <button disabled={isSubmitting} type="submit">
          Valider
        </button>
      </div>
    </form>
  );
}
