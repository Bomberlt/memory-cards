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
  const [lastFlippedCard, setLastFlipped] = useState({});


  const [flipCount, setFlipCount] = useState(0);

  const [displayBlocker, showBlocker] = useState(false);

  const cardFlipped = (id) => {
    setFlipCount(flipCount + 1);

    const flippedCard = cardsList.find(card => card.id === id);
    setLastFlipped(flippedCard);
    console.log('flippedCard.code');
    console.log(flippedCard.code);

    let newCardsList = cardsList;

    if (lastFlippedCard.code === flippedCard.code){
      // TODO: Extract lock cards function
      newCardsList = newCardsList
        .map(card => card.code === flippedCard.code
          ? { ...card, locked: true}
          : card);
    } else {
      if (flipCount !== 0 && flipCount % 2 !== 0) {
        showBlocker(true);
      }
    }
    
    setCardsList(
      newCardsList.map(card => card.id === id
        ? ({...card, isFaceUp: true })
        : card)
    );
  };

  const flipCardsDown = () => {
    showBlocker(false);
    setCardsList(cardsList
      .map(card => card.locked ? card : ({
        ...card,
        isFaceUp: false,
      }))
    );
  }

  return (
    <div>
    {displayBlocker && (<div className='blocker' onClick={flipCardsDown}>flip back</div>)}
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
    </div>
  );
};

export default CardsList;