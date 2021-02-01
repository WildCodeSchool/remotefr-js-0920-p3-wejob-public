import React from 'react';
import './SingleUserShort.css';
import { useHistory, Link } from 'react-router-dom';
// import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
// import axios from 'axios';

export default function SingleUser(props) {
  const { candidat } = props;

  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [phone, setPhone] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  // const data = {
  //   name: name,
  //   email: email,
  //   phone: phone,
  // };

  //   axios
  //     .post(`${process.env.REACT_APP_BACK_URL}/recruteur`, data)
  //     .then((response) => {
  //       history.push(`/user/${user.id}`).catch((error) => {
  //         console.log(error.message);
  //       });
  //     });
  // };
  console.log(candidat);

  return (
    <div className="SingleUserShort card mb-3" style={{maxWidth: '32%'}}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={candidat.picture} alt={`${candidat.firstname} ${candidat.lastname}`} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{candidat.firstname} {candidat.lastname.substring(0, 1)}</h5>
            <p className="card-text">
              <h6>Secteur d'activité: {candidat.activity_area_id}</h6>
            </p>
            <p className="card-text">{candidat.job}</p>
            <p className="card-text">{candidat.description}</p>
            <Link
              className="btn btn-primary"
              to={`/candidat/${candidat.id}`}
              key={candidat.id}
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </div>
      {/* <Popup
        trigger={<button>En savoir plus sur ce candidat</button>}
        position="right center"
      >
        <form onSubmit>
          <div>
            Veuillez renseigner les champs suivants:
            <label htmlFor="name">Name:</label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="name"
              name="name"
              required
              minLength="4"
              maxLength="255"
              size="10"
              value={name}
            ></input>
            <label htmlFor="email">Email:</label>
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
            ></input>
            <label htmlFor="phone">Téléphone:</label>
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
            ></input>

            <button id="btnSeeMore" type="submit" className="btnSeeMore">
              Ok
            </button>
          </div>
        </form>
      </Popup> */}
    </div>

  );
}
