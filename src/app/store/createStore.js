import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import carsReducer from './cars'

export default configureStore ( {
    reducer: {
        cars: carsReducer
    }, 
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})


