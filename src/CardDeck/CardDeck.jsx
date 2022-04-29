import { useDispatch } from 'react-redux'
import { setCardsList } from '../CardsList/cardsListSlice'
import { useCardsQuery } from "../cardsApi";
import { shuffle } from '../utils';
const CardDeck = (props) => {
  const dispatch = useDispatch();
  const { id } = props;
  const response = useCardsQuery(id);
  console.log('response');
  console.log(response);

  if (response.isFetching) {
    return (
      <div>
        Getting cards from API
      </div>
    )
  }

  const doubleCards = response.data.cards
    .map(card => ({...card, id: card.code}))
    .concat(
      response.data.cards.map(card => (
        { ...card,
          id: card.code + '2',
          code: card.code
        }
      ))
    );
  const cardsWithMetadata = shuffle(doubleCards.map(card => ({
    ...card,
    locked: false,
    isFaceUp: false,
  })));
  
  console.log(cardsWithMetadata);

  dispatch(setCardsList(cardsWithMetadata));

  const reloadCards = () => {

  };

  return (
    <>
      <button onClick={() => reloadCards()}>
        Reload cards
      </button>
    </>
  )
}

export default CardDeck;