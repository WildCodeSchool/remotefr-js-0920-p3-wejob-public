import React from 'react';
import './SingleUserShort.css';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function SingleUser(props) {
  const { user } = props;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: name,
      email: email,
      phone: phone,
    };
    axios.post('/api', data).then;
  };

  return (
    <div className="Card">
      <h2 className="Title">
        {user.firstname} {user.lastname.substring(0, 1)}.
      </h2>
      <h3>Secteur d'activité: {user.activity_area_id}</h3>
      <img className="ProfileImg" src={user.picture} alt={user.id} />
      <h3>{user.job}</h3>
      <h3>{user.description}</h3>
      <Popup
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
            {/* < to={`/user/${user.id}`} key={user.id}> */}
            <button id="btnSeeMore" type="submit" className="btnSeeMore">
              Ok
            </button>
          </div>
        </form>
      </Popup>
    </div>
  );
}
