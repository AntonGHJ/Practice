/*eslint-disable */
import { createSlice } from "@reduxjs/toolkit";
import carService from "../services/car.service";
import history from "../utils/history";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    entities: [],
    isLoading: true,
  },
  reducers: {
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
  carRemoved,
} = actions;

export const addCar = (payload) => async (dispatch) => {
  dispatch(carsRequested());
  try {
    await carService.createCar(payload);
    dispatch(carCreated(payload));
    history.push("/cars");
  } catch (error) {
    dispatch(carsRequestFailed(error.message));
  }
};
export const loadCarsList = () => async (dispatch) => {
  dispatch(carsRequested());
  try {
    const { content } = await carService.getCars();
    dispatch(carsReceived(content));
  } catch (error) {
    dispatch(carsRequestFailed(error.message));
  }
};

export const removeCar = (carId) => async (dispatch) => {
  dispatch(carsRequested());
  try {
    await carService.removeCar(carId);
    dispatch(carRemoved(carId));
  } catch (error) {
    dispatch(carsRequestFailed(error.message));
  }
};

export const updateCar = (carId, updatedData) => async (dispatch) => {
  dispatch(carsRequested());
  try {
    const { content } = await carService.updateCar(carId, updatedData);
    dispatch(carUpdateSuccessed(content));
  } catch (error) {
    dispatch(carsRequestFailed(error.message));
  }
};
export const getCarsList = () => (state) => state.cars.entities;
export const getCarById = (carId) => (state) => {
  if (state.cars) {
    return state.cars.entities.find((c) => c._id === carId);
  }
};
export const getCarsLoadingStatus = () => (state) => state.cars.isLoading;
export default carsReducer;
