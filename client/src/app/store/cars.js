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
const { reducer: carsReducer, actions } = carsSlice;
const {
    carsRequested,
    carsReceived,
    carCreated,
    carUpdateSuccessed,
    carsRequestFailed,
    
} = actions;
{/*export const {
    addCar, removeCar, toggleTheme
    carsRequested,
    carsReceived,
    carCreated,
    carUpdateSuccessed,
    carsRequestFailed
} = carsSlice.actions;*/}
/*export const addCar = (payload) =>
    async (dispatch) => {
        console.log('Пытаюсь создать машину');
        try {
            console.log('payload', payload);
            const {data} = await carService.createCar(payload);
            console.log('data', data);
            //dispatch(carCreated(data));
            console.log('Машина создана');
            history.push("/cars");
        } catch (error) {
            dispatch(carsRequestFailed(error.message));
            console.log('ошибка создания', getState());
        }
    };*/
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
