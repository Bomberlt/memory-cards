import { useSelector, useDispatch } from 'react-redux'
import data from '../data';
import { setCardsList } from '../CardsList/cardsListSlice'

const GameMenu = (props) => {
  const dispatch = useDispatch();

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

  const loadCards = () => {
    dispatch(setCardsList(cardsWithMetadata));
  }

  return (
    <button onClick={() => loadCards()}>
      Load cards
    </button>
  )
}

export default GameMenu;