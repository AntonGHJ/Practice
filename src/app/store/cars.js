/*eslint-disable */
import React from 'react';

import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import history from "../utils/history";
import API from "../api";


const carsSlice = createSlice({
    name: "cars", 
    initialState: {
        cars: [],
       
    }, 
    reducers: {
        toggleTheme(state, action){
        
        },
       
        addCar (state, action) {
            
            state.cars.push({              
                name: action.payload.name,
                properties: [],
                _id: new Date().toISOString(),
                images:  action.payload.images,               
                engine: action.payload.engine,
                productionYear: action.payload.productionYear,
                mileage: action.payload.mileage,
                price: action.payload.price
            })
            console.log( action.payload.images);
           
        },
        removeCar(state, action) {
            const index = state.cars.findIndex((car) => car._id === action.payload);
            if (index !== -1) {
              state.cars.splice(index, 1);
            }
          }          
    },
    
});

export const getCarsList = () => (state) => state.cars.cars;

export const getCarById = (carId) => (state) => {
    if (state.cars) {
        return state.cars.cars.find((c) => c._id === carId);
    }
};
export const {addCar, removeCar, toggleTheme} = carsSlice.actions;

export default carsSlice.reducer
