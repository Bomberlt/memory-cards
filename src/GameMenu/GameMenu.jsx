import { useSelector, useDispatch } from 'react-redux'
import data from '../data';
import { setCardsList } from '../CardsList/cardsListSlice'
import { useCardsQuery } from "../cardsApi";
import { cardsApi } from "../cardsApi";
import {useState} from 'react'

const GameMenu = (props) => {
  console.log(cardsApi);
  const dispatch = useDispatch();

  const response = useCardsQuery();
  console.log('response');
  console.log(response);

  if (response.isFetching) {
    return (
      <div>
        ...refetching
      </div>
    )
  }

  const deckId = response.data.deck_id;

  const doubleCards = response.data.cards
    .map(card => ({...card, id: card.code}))
    .concat(
      response.data.cards.map(card => ({...card, id: card.code + '2', code: card.code}))
    );
  const cardsWithMetadata = doubleCards.map(card => ({
    ...card,
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