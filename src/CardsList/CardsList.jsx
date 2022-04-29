import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { increment, setCardsList } from './cardsListSlice'
import Card from '../Card/Card';
import './CardsList.css';

const CardsList = (props) => {
  const cardsList = useSelector((state) => state.cardsList.cardsList);
  // const [cardsList, setCardsList] = useState(cardsFromRedux); // TODO: Move to redux
  const [lastFlippedCard, setLastFlipped] = useState({});


  const flipCount = useSelector((state) => state.cardsList.flipCount);
  const dispatch = useDispatch();

  const [displayBlocker, showBlocker] = useState(false);

  const cardFlipped = (id) => {
    dispatch(increment());

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
    
    dispatch(setCardsList(
      newCardsList.map(card => card.id === id
        ? ({...card, isFaceUp: true })
        : card)
    ));
  };

  const flipCardsDown = () => {
    showBlocker(false);
    dispatch(setCardsList(cardsList
      .map(card => card.locked ? card : ({
        ...card,
        isFaceUp: false,
      }))
    ));
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
      Flip count: {flipCount}
    </div>
  );
};

export default CardsList;