import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import { reducers } from './CombinedReducers'

export type RootState = ReturnType<typeof reducers>
const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(logger),
})

export type AppDispatch = typeof store.dispatch

export default store