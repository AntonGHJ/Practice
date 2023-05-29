import { createSlice } from "@reduxjs/toolkit";
import propertyService from "../services/property.service";

const propertiesSlice = createSlice({
  name: "properties",
  initialState: {
    entities: null,
    error: null,
    isLoading: true,
  },
  reducers: {
    propertiesRequested: (state) => {
      state.isLoading = true;
    },
    propertiesReceived: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    propertiesRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

const { reducer: propertiesReducer, actions } = propertiesSlice;
const { propertiesRequested, propertiesReceived, propertiesRequestFailed } =
  actions;

export const loadPropertiesList = () => async (dispatch, getState) => {
  dispatch(propertiesRequested());
  try {
    const { content } = await propertyService.fetchAll();
    dispatch(propertiesReceived(content));
  } catch (error) {
    dispatch(propertiesRequestFailed(error.message));
  }
};

export const getProperties = () => (state) => state.properties.entities;

export const getPropertiesLoadingStatus = () => (state) =>
  state.properties.isLoading;
export const getPropertiesByIds = (propertiesIds) => (state) => {
  if (state.properties.entities) {
    const propertiesArray = [];
    for (const propId of propertiesIds) {
      for (const property of state.properties.entities) {
        if (property._id === propId) {
          propertiesArray.push(property);
          break;
        }
      }
    }
    return propertiesArray;
  }
  return [];
};

export default propertiesReducer;
