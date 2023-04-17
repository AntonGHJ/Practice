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
        
        },*/
       
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
        carRemoved: (state, action) => {
            state.entities = state.entities.filter((c) => c._id !== action.payload);
        },
    },
    
});
const { reducer: carsReducer, actions } = carsSlice;
const {
    carsRequested,
    carsReceived,
    carCreated,
    carUpdateSuccessed,
    carsRequestFailed,
    carRemoved
} = actions;

export const addCar = (payload) => async (dispatch, getState) => {
        dispatch(carsRequested());
        console.log(getState());
        try {
            console.log('Пытаюсь создать машину, payload', payload);
            const { content } = await carService.createCar(payload);
            console.log('Пытаюсь создать машину, контент', content);
            dispatch(carCreated(payload));
            console.log('Машина создана');
            console.log(getState());
            history.push('/cars')
        } catch (error) {
            dispatch(carsRequestFailed(error.message));
            console.log('ошибка создания', getState());
        }
    };
export const loadCarsList = () => async (dispatch) => {
        dispatch(carsRequested());
        console.log('Запрошен список машин');
        try {
            const { content } = await carService.getCars();
            dispatch(carsReceived(content));
            console.log('получен список машин', content);
        } catch (error) {
            dispatch(carsRequestFailed(error.message));
            console.log('НЕ получен список машин, ошибка');
        }
    };

    export const removeCar = (carId) => async (dispatch) => {
        dispatch(carsRequested());
        console.log("Пытаюсь удалить машину с id", carId);
        try {
            await carService.removeCar(carId);
            dispatch(carRemoved(carId));
            console.log("Машина удалена");
        } catch (error) {
            dispatch(carsRequestFailed(error.message));
            console.log("ошибка удаления машины", error.message);
        }
    };

export const updateCar = (carId, updatedData) => async (dispatch) => {
        dispatch(carsRequested());
        console.log(`Пытаюсь обновить машину с id ${carId}`);
        try {
          const { content } = await carService.updateCar(carId, updatedData);
          dispatch(carUpdateSuccessed(content));
          console.log(`Машина с id ${carId} обновлена`);
        } catch (error) {
          dispatch(carsRequestFailed(error.message));
          console.log(`Ошибка обновления машины с id ${carId}: ${error.message}`);
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

export const getCurrentCarId = () => (state) => state.cars.entities.carId;
export default carsReducer
