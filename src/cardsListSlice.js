import { createSlice } from '@reduxjs/toolkit';
import { restartGame } from './gameStatusSlice'


export const cardsListSlice = createSlice({
  name: 'cardsList',
  initialState: {
    flipCount: 0,
    cardsList: [],
    timePassed: 0,
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
    // flipUpCard: {
    //   reducer: ( state, action ) => {
    //     state.cardsList = state.cardsList
    //       .map(card => card.id === action.payload.id
    //         ? ({...card, isFaceUp: true })
    //         : card
    //       );
    //   },
    //   prepare: ( {id}) => {
    //     const allCardsUp = state.cardsList.length > 0
    //       && state.cardsList.filter(card => !card.isFaceUp).length == 1;
    //     return {
    //       payload: { id: id, allCardsUp: allCardsUp }
    //     } 
    //   }
    // },
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
    setTimePassed: (state, action) => {
      state.timePassed = action.payload;
    },
  },
  extraReducers:  builder => {
    builder.addCase(restartGame.type, (state, action) => {
      state.cardsList = [];
      state.timePassed = 0;
      state.flipCount = 0;
    })
  }
})

export const {
  increment,
  setCardsList,
  lockCards,
  flipUpCard,
  flipNotLockedCards,
  setTimePassed,
} = cardsListSlice.actions

export default cardsListSlice.reducer