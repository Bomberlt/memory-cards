import { createSlice } from '@reduxjs/toolkit';
import { restartGame } from './gameStatusSlice'


export const cardsListSlice = createSlice({
  name: 'cardsList',
  initialState: {
    cardsList: [],
  },
  reducers: {
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
      state.cardsList = state.cardsList.map(card => card.id === action.payload.id
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
  },
  extraReducers:  builder => {
    builder.addCase(restartGame.type, (state) => {
      state.cardsList = [];
    })
  }
})

export const {
  setCardsList,
  lockCards,
  flipUpCard,
  flipNotLockedCards,
} = cardsListSlice.actions

export default cardsListSlice.reducer