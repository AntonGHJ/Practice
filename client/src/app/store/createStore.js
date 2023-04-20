import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import carsReducer from './cars'
import propertiesReducer from './properties';
import usersReducer from './users';
import messagesReducer from './messages';

export default configureStore ( {
    reducer: {
        cars: carsReducer, 
        properties: propertiesReducer,
        users: usersReducer,
        messages: messagesReducer
    }, 
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})


