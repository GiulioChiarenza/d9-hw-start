import { configureStore, combineReducers } from '@reduxjs/toolkit'
import favouritesReducer from '../reducer/favouritesJob'

const globalReducer = combineReducers({
 favouritesJob:favouritesReducer
//  job:jobReducer
})
const store = configureStore({
  reducer: globalReducer,
})
export default store