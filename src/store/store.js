import { configureStore } from '@reduxjs/toolkit'
import cardsListSlice from '../cardsListSlice'
import { cardsApi } from "../cardsApi";
import gameStatusSlice from '../gameStatusSlice';
console.log(cardsApi);

export default configureStore({
  reducer: {
    cardsList: cardsListSlice, 
    gameStatus: gameStatusSlice,
    [cardsApi.reducerPath]: cardsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cardsApi.middleware)
})