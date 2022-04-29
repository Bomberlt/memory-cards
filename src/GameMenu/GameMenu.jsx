import { useNewDeckQuery } from "../cardsApi";
import CardDeck from "../CardDeck/CardDeck"
const GameMenu = () => {
  const response = useNewDeckQuery();

  if (response.isFetching) {
    return (
      <div>
        Getting new deck from API
      </div>
    )
  }
  const deckId = response.data.deck_id;

  return <CardDeck id={deckId}/>
}

export default GameMenu;