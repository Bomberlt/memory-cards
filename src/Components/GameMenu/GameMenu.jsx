import { useDispatch } from 'react-redux';
import { useNewDeckQuery } from "../../cardsApi";
import { restartGame } from '../../cardsListSlice'
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
    dispatch(restartGame());
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