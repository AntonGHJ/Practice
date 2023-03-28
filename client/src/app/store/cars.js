/*eslint-disable */

import { createSlice } from "@reduxjs/toolkit";
import carService from "../services/car.service";
import history from "../utils/history";


const carsSlice = createSlice({
    name: "cars", 
    initialState: {
        entities: [],
       
    }, 
    reducers: {
        /*toggleTheme(state, action){
        
        },
        addCar (state, action) {            
            state.cars.push({              
                name: action.payload.name,
                properties: action.payload.properties,
                _id: new Date().toISOString(),
                images:  action.payload.images,               
                engine: action.payload.engine,
                productionYear: action.payload.productionYear,
                mileage: action.payload.mileage,
                price: action.payload.price
            })
            console.log( action.payload.images);
           history.push('/carsList')
        },
        removeCar(state, action) {
            const index = state.cars.findIndex((car) => car._id === action.payload);
            if (index !== -1) {
              state.cars.splice(index, 1);
            }
          }    */ 
          carsRequested: (state) => {
            state.isLoading = true;
        },
        carsReceived: (state, action) => {
            state.entities = action.payload;
            state.dataLoaded = true;
            state.isLoading = false;
        },
        carsRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        /*authRequestSuccess: (state, action) => {
            state.auth = action.payload;
            state.isLoggedIn = true;
        },
        authRequestFailed: (state, action) => {
            state.error = action.payload;
        },*/
        carCreated: (state, action) => {
            state.entities.push(action.payload);
        },
        carUpdateSuccessed: (state, action) => {
            state.entities[
                state.entities.findIndex((c) => c._id === action.payload._id)
            ] = action.payload;
        },    
    },
    
});

export const {
    /*addCar, removeCar, toggleTheme*/
    carsRequested,
    carsReceived,
    carCreated,
    carUpdateSuccessed,
    carsRequestFailed
} = carsSlice.actions;

/*export const addCar = (payload) =>
    async (dispatch) => {
        console.log('Пытаюсь создать машину');
        try {
            console.log('payload', payload);
            const {data} = await carService.createCar(payload);
            console.log('data', data);
            //dispatch(carCreated(data));
            history.push("/cars");
        } catch (error) {
            dispatch(carsRequestFailed(error.message));
        }
    };*/
export const addCar = (payload) => async (dispatch, getState) => {
        dispatch(carsRequested());
        console.log(getState());
        try {
            console.log('Пытаюсь создать машину, payload', payload);
            const { content } = await carService.createCar(payload);
            console.log('Пытаюсь создать машину, контент', content);
            dispatch(carCreated(content));
            console.log('Машина создана');
            console.log(getState());
        } catch (error) {
            dispatch(carsRequestFailed(error.message));
            console.log('ошибка создания', getState());
        }
    };
export const getCarsList = () => (state) => state.cars.entities;
export const getCurrentCarData = () => (state) => {
    return state.cars.entities
        ? state.cars.entities.find((c) => c._id === state.cars.carId)
        : null;
};

export const getCarById = (carId) => (state) => {
    if (state.cars) {
        return state.cars.entities.find((c) => c._id === carId);
    }
};


export default carsSlice.reducer
