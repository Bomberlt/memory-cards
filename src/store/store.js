import { configureStore } from '@reduxjs/toolkit'
import cardsListSlice from '../CardsList/cardsListSlice'

export default configureStore({
  reducer: {
    cardsList: cardsListSlice, 
  },
})