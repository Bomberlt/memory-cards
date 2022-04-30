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
    setTimePassed: (state, action) => {
      state.timePassed = action.payload;
    },
    completeGame: (state) => {
      state.gameCompleted = true;
    },
    restartGame: (state) => {
      state.cardsList = [];
      state.timePassed = 0;
      state.flipCount = 0;
      state.gameCompleted = false;
    }
  },
})

export const {
  increment,
  setCardsList,
  lockCards,
  flipUpCard,
  flipNotLockedCards,
  setTimePassed,
  completeGame,
  restartGame
} = cardsListSlice.actions

export default cardsListSlice.reducer