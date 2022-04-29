import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { increment, lockCards, flipUpCard, flipNotLockedCards } from './cardsListSlice'
import Card from '../Card/Card';
import './CardsList.css';
import WinScreen from '../WinScreen/WinScreen';

const CardsList = (props) => {
  const dispatch = useDispatch();
  const cardsList = useSelector((state) => state.cardsList.cardsList);
  const flipCount = useSelector((state) => state.cardsList.flipCount);

  const [lastFlippedCard, setLastFlipped] = useState({});
  const [displayBlocker, showBlocker] = useState(false);

  const cardFlipped = (id) => {
    if (displayBlocker) {
      return;
    }
    console.log('flippppp')
    dispatch(increment());

    const flippedCard = cardsList.find(card => card.id === id);
    setLastFlipped(flippedCard);
    console.log(id);
    console.log(flippedCard);

    if (lastFlippedCard.code === flippedCard.code){
      dispatch(lockCards(flippedCard.code));
    } else {
      if (flipCount !== 0 && flipCount % 2 !== 0) {
        showBlocker(true);
      }
    }
    
    dispatch(flipUpCard(id));
  };

  const flipCardsDown = (e) => {
    e && e.preventDefault();
    setLastFlipped([]);
    showBlocker(false);
    dispatch(flipNotLockedCards());
  }

  useEffect(() => {
    if (displayBlocker) {
      const interval = setInterval(() => {
        flipCardsDown();
      }, 1000)
      return () => {
        clearInterval(interval);
      }
    }
  });

  const allCardsUp = cardsList.length > 0 && !cardsList.some(card => !card.isFaceUp);

  return (
    <div>
    {allCardsUp && <WinScreen />}
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