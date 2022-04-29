import { useState } from 'react';
import Card from '../Card/Card';
import data from '../data';
import './CardsList.css';

const CardsList = (props) => {
  const doubleCards = data.cards.concat(
    data.cards.map(card => ({...card, id: card.id+2, code: card.id}))
  );
  const cardsWithMetadata = doubleCards.map(card => ({
    ...card,
    code: card.code ?? card.id,
    locked: false,
    isFaceUp: false,
  }));
  console.log(cardsWithMetadata);
  const [cardsList, setCardsList] = useState(cardsWithMetadata); // TODO: Move to redux

  const [flipCount, setFlipCount] = useState(0);

  const cardFlipped = (id) => {
    setFlipCount(flipCount + 1);

    const flippedCard = cardsList.find(card => card.id === id);
    console.log('flippedCard.code');
    console.log(flippedCard.code);

    let newCardsList = cardsList;

    if (flipCount !== 0 && flipCount % 2 !== 0 &&
      cardsList.find(card => card.isFaceUp && card.code === flippedCard.code)){
      console.log('includes!!!');
      // TODO: Extract lock cards function
      newCardsList = newCardsList
        .map(card => card.code === flippedCard.code
          ? { ...card, locked: true}
          : card);
    } else {
      if (flipCount !== 0 && flipCount % 2 === 0) {
        console.log('second');
        // TODO: Extract flip cards function
        newCardsList = newCardsList
          .map(card => card.locked ? card : ({
            ...card,
            isFaceUp: false,
          }))
      }
    }
    
    setCardsList(
      newCardsList.map(card => card.id === id
        ? ({...card, isFaceUp: true })
        : card)
    );
  };

  return (
    <div className='cards-list'>
      {cardsList.map(card => 
      {
        const { id, value, suit, image, locked, isFaceUp} = card;
        return <Card
          key={id}
          id={id}
          value={value}
          suit={suit}
          image={image}
          onFlip={cardFlipped}
          locked={locked}
          isFaceUp={isFaceUp}
        />
      }
      )}
    </div>
  );
};

export default CardsList;