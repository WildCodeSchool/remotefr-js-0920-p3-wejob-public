import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function RecruiterForm({ setUser }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const recruiter = { name, email, phone };
    axios
      .post(`${process.env.REACT_APP_API_URL}/recruteurs`, recruiter, {
        withCredentials: true,
      })
      .then(() => setUser(recruiter));
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        Veuillez renseigner les champs suivants:
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
            name="name"
            className="form-control"
            minLength="4"
            maxLength="255"
            size="10"
            value={name}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            id="email"
            name="email"
            required
            minLength="5"
            maxLength="255"
            size="10"
            value={email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Téléphone</label>
          <input
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            id="phone"
            name="phone"
            required
            minLength="10"
            maxLength="10"
            size="10"
            value={phone}
          />
        </div>
        <button id="btnSeeMore" type="submit" className="btn btn-primary">
          Valider vos informations
        </button>
      </div>
    </form>
  );
}

RecruiterForm.propTypes = {
  setUser: PropTypes.func.isRequired,
};

export default RecruiterForm;
