import React from 'react'
import './Card.css'
const Card = (props) => {
  const { id, value, suit, image} = props;
  return (
    <div id={id} className="Card">
      <span>{value} - {suit}</span>
      <div>
        <img src={image} alt={value+suit}/> 
      </div>
    </div>
  );
};

export default Card;