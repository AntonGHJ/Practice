import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import carsReducer from './cars'
import propertiesReducer from './properties';
import usersReducer from './users';

export default configureStore ( {
    reducer: {
        cars: carsReducer, 
        properties: propertiesReducer,
        users: usersReducer
    }, 
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})


