import { useDispatch } from 'react-redux';
import { useNewDeckQuery } from "../cardsApi";
import { setCardsList, reset, setTimePassed } from '../CardsList/cardsListSlice'
import CardDeck from "../CardDeck/CardDeck"
const GameMenu = () => {
  const dispatch = useDispatch();
  const response = useNewDeckQuery();

  if (response.isFetching) {
    return (
      <div>
        Getting new deck from API
      </div>
    )
  }
  const deckId = response.data.deck_id;

  const reloadCards = () => {
    dispatch(setCardsList([]));
    dispatch(reset());
    dispatch(setTimePassed(0));
    response.refetch();
  };

  return <>
    <button onClick={() => reloadCards()}>
        Reload deck
      </button>
    <CardDeck id={deckId}/>
  </>
}

export default GameMenu;