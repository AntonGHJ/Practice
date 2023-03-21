import { createSlice } from "@reduxjs/toolkit";
import api from "../api";

const propertiesSlice = createSlice({
    name: "properties",
    initialState: {
        entities: null,       
        error: null,
        isLoading: true
        
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
        }
    }
    
});

const { reducer: propertiesReducer, actions } = propertiesSlice;
const { propertiesRequested, propertiesReceived, propertiesRequestFailed } = actions;

export const loadPropertiesList = () => async (dispatch, getState) => {
    console.log(getState());
        dispatch(propertiesRequested());
        console.log('Запрошены свойства');
        try {
            const  content  = await api.cars.fetchProperties();
            console.log('Получены свойства, пытаюсь добавить в контент')
            console.log(content)
            dispatch(propertiesReceived(content));
            console.log(getState());
        } catch (error) {
            console.log('Не получены свойства');
            dispatch(propertiesRequestFailed(error.message));
            console.log('Error');
        }
}

export const getProperties = () => (state) => state.properties.entities
console.log('Get properties сработал');

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
