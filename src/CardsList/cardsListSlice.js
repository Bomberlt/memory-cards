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
    }
  },
})

export const { increment, reset, setCardsList } = cardsListSlice.actions

export default cardsListSlice.reducer