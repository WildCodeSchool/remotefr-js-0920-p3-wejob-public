import React from 'react';
import { useForm } from 'react-hook-form';
import './Public.css';

const wait = function (duration = 1000) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, duration);
  });
};

export default function Public() {
  const { register, handleSubmit, formState, errors } = useForm();
  const { isSubmitting } = formState;

  const onSubmit = async (data) => {
    await wait(2000);
    console.log(data);
  };

  console.log(errors);

  return (
    <form className="champsRecherche" onSubmit={handleSubmit(onSubmit)}>
      <h1>Trouver votre candidat idéal</h1>
      <div className="row">
        <div className="boxForm">
          <label htmlFor="keyResearch">Recherche par mots clés</label>
          <input
            type="text"
            className="researchKey"
            id="keyResearch"
            name="keyResearch"
            ref={register({ required: 'Vous devez remplir ce champs' })}
            // defaultValue="Métier, Secteur d'activité, Description, Compétences, Langues"
          />
          {errors.keyResearch && <span>{errors.keyResearch.message}</span>}
        </div>
        <div className="boxForm">
          <label htmlFor="place">Lieu</label>
          <input
            type="text"
            className="researchPlace"
            id="place"
            name="place"
            ref={register}
            // defaultValue="Bordeaux, Gironde, Nouvelle Aquitaine, France"
          />
        </div>
        <button disabled={isSubmitting} type="submit">
          Valider
        </button>
      </div>
    </form>
  );
}
