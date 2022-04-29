import React from 'react'
import './Card.css'
const Card = (props) => {
  const { id, value, suit, image, onFlip, locked, isFaceUp} = props;
  const flip = (isFaceUp) => {
    onFlip(id);
  }

  if (!isFaceUp) {
    return (
      <div id={id} className="card" onClick={() => flip(true)} >
        face down
        <img
          src="https://deckofcardsapi.com/static/img/back.png"
          alt="card back"
        /> 
      </div>
    );
  }

  return (
    <div id={id} className={`card${locked ? ' locked' : ''}`} >
      <span>{value} {suit}</span>
      {locked}
      <div>
        <img src={image} alt={value+suit}/> 
      </div>
    </div>
  );
};

export default Card;