import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { lockCards, flipUpCard, flipNotLockedCards } from '../../cardsListSlice'
import Card from '../Card/Card';
import './CardsList.css';

const CardsList = (props) => {
  const dispatch = useDispatch();
  const cardsList = useSelector((state) => state.cardsList.cardsList);
  const flipCount = useSelector((state) => state.gameStatus.flipCount);

  const [lastFlippedCard, setLastFlipped] = useState({});
  const [displayBlocker, showBlocker] = useState(false);

  const cardFlipped = (id) => {
    if (displayBlocker) {
      return;
    }

    const flippedCard = cardsList.find(card => card.id === id);
    setLastFlipped(flippedCard);

    // TODO: Extract this logic out of component for testability
    if (lastFlippedCard.code === flippedCard.code){
      dispatch(lockCards(flippedCard.code));
    } else {
      if (flipCount !== 0 && flipCount % 2 !== 0) {
        showBlocker(true);
      }
    }
    
    const lastCardUp = cardsList.length > 0 &&
      cardsList.filter(card => !card.isFaceUp).length === 1;
    dispatch(flipUpCard({id, lastCardUp}));
  };

  const flipCardsDown = (e) => {
    e && e.preventDefault();
    setLastFlipped([]);
    showBlocker(false);
    dispatch(flipNotLockedCards());
  }

  useEffect(() => {
    // TODO: Extract this logic out of component for testability
    if (displayBlocker) {
      const interval = setInterval(() => {
        flipCardsDown();
      }, 1000)
      return () => {
        clearInterval(interval);
      }
    }
  });

  return (
    <div>
    {displayBlocker && 
      (<div className='blocker' onClick={flipCardsDown} >wrong pair</div>)
    }
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
