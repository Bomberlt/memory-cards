import { configureStore } from '@reduxjs/toolkit'
import cardsListSlice from '../CardsList/cardsListSlice'
import { cardsApi } from "../cardsApi";
console.log(cardsApi);

export default configureStore({
  reducer: {
    cardsList: cardsListSlice, 
    [cardsApi.reducerPath]: cardsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cardsApi.middleware)
})