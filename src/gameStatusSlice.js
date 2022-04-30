import { createSlice } from '@reduxjs/toolkit';
import { flipUpCard } from './cardsListSlice';
export const gameStatusSlice = createSlice({
  name: 'gameStatus',
  initialState: {
    gameCompleted: false,
  },
  reducers: {
    restartGame: (state) => {
      state.cardsList = [];
      state.timePassed = 0;
      state.flipCount = 0;
      state.gameCompleted = false;
    }
  },
  extraReducers: builder => {
    builder.addCase(flipUpCard.type, (state, action) => {
      if (action.payload.lastCardUp) {
        state.gameCompleted = true;
      }
    })
  }
})

export const {
  restartGame
} = gameStatusSlice.actions

export default gameStatusSlice.reducer