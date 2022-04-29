import React, { useState } from 'react'
import './Card.css'
const Card = (props) => {
  const { id, value, suit, image} = props;
  const [faceUp, flip] = useState(false);

  if (!faceUp) {
    return (
      <div id={id} className="Card" onClick={() => flip(true)} >
        face down
        <img
          src="https://deckofcardsapi.com/static/img/back.png"
          alt="card back"
        /> 
      </div>
    );
  }

  return (
    <div id={id} className="Card"  onClick={() => flip(false)} >
      <span>{value} {suit}</span>
      <div>
        <img src={image} alt={value+suit}/> 
      </div>
    </div>
  );
};

export default Card;