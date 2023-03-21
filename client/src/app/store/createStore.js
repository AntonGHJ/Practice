import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import carsReducer from './cars'
import propertiesReducer from './properties';

export default configureStore ( {
    reducer: {
        cars: carsReducer, 
        properties: propertiesReducer
    }, 
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})


