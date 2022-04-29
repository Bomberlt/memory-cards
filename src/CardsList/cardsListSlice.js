import { createSlice } from '@reduxjs/toolkit'

export const cardsListSlice = createSlice({
  name: 'cardsList',
  initialState: {
    flipCount: 0,
    cardsList: [],
  },
  reducers: {
    increment: (state) => {
      state.flipCount += 1;
    },
    reset: (state) => {
      state.flipCount = 0;
    },
    setCardsList: (state, action) => {
      state.cardsList = action.payload;
    },
    lockCards: (state, action) => {
      state.cardsList = state.cardsList
        .map(card => card.code === action.payload
          ? { ...card, locked: true}
          : card);
    },
    flipUpCard: (state, action) => {
      state.cardsList = state.cardsList.map(card => card.id === action.payload
        ? ({...card, isFaceUp: true })
        : card)
    },
    flipNotLockedCards: (state) => {
      state.cardsList = state.cardsList
        .map(card => card.locked
          ? card
          : ({ ...card, isFaceUp: false })
        );
    }
  },
})

export const { increment, reset, setCardsList, lockCards, flipUpCard, flipNotLockedCards } = cardsListSlice.actions

export default cardsListSlice.reducer

// const fetchCards = () => async (dispatch) => {
//   // TODO: Show loader
//   const response = await usersAPI.fetchAll()

//   const doubleCards = response.cards.concat(
//     data.cards.map(card => ({...card, id: card.id+2, code: card.id}))
//   );
//   const cardsWithMetadata = doubleCards.map(card => ({
//     ...card,
//     code: card.code ?? card.id,
//     locked: false,
//     isFaceUp: false,
//   }));
//   console.log(cardsWithMetadata);

//   dispatch(setCardsList(cardsWithMetadata));
// }