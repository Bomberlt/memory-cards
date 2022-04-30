import { createSlice } from '@reduxjs/toolkit';
import { flipUpCard } from './cardsListSlice';
export const gameStatusSlice = createSlice({
  name: 'gameStatus',
  initialState: {
    gameCompleted: false,
    flipCount: 0,
    timePassed: 0,
  },
  reducers: {
    restartGame: (state) => {
      state.timePassed = 0;
      state.flipCount = 0;
      state.gameCompleted = false;
    },
    setTimePassed: (state, action) => {
      state.timePassed = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(flipUpCard.type, (state, action) => {
      state.flipCount += 1;
      if (action.payload.lastCardUp) {
        state.gameCompleted = true;
      }
    })
  }
})

export const {
  restartGame,
  setTimePassed,
} = gameStatusSlice.actions

export default gameStatusSlice.reducer