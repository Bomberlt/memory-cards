import { createSlice } from '@reduxjs/toolkit'

export const cardsListSlice = createSlice({
  name: 'cardsList',
  initialState: {
    flipCount: 0,
    cardsList: [],
    timePassed: 0,
    gameCompleted: false,
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
    },
    timePassed: (state, action) => {
      state.timePassed = action.payload;
    },
    completeGame: (state) => {
      state.gameCompleted = true;
    }
  },
})

export const {
  increment,
  reset,
  setCardsList,
  lockCards,
  flipUpCard,
  flipNotLockedCards,
  timePassed,
  completeGame,
} = cardsListSlice.actions

export default cardsListSlice.reducer