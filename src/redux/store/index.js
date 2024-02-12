import { configureStore } from '@reduxjs/toolkit'
import mainReducer from '../reducer' // è come puntare a ../reducers/index

const store = configureStore({
  reducer: mainReducer,
})

export default store