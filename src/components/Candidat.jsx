import React from 'react';
import './Candidat.css';

function Candidat(props) {
  return (
    <div className="Card">
      <h2 className="Title">
        {props.firstname} {props.lastname}
      </h2>
      <h3>Disponibility: {props.disponibility}</h3>
      <img className="ProfileImg" src={props.picture} alt={props.id} />
      <h3>
        Description Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Aperiam maiores iusto laborum ratione corporis possimus cupiditate
        tempore doloremque quisquam vitae assumenda corrupti ad odio nostrum
        dolorum exercitationem, dicta, quos dignissimos.
      </h3>
    </div>
  );
}

export default Candidat;
