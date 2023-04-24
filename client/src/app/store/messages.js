/*eslint-disable */
import { createSlice } from "@reduxjs/toolkit";
import messageService from "../services/message.service";

const messagesSlice = createSlice({
    name: "messages", 
    initialState: {
        entities: [],
       isLoading:true
    }, 
    reducers: {
       messagesRequested: (state) => {
            state.isLoading = true;
        },
        messagesReceived: (state, action) => {
            state.entities = action.payload;
            state.dataLoaded = true;
            state.isLoading = false;
        },
        messagesRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        messageCreated: (state, action) => {
            state.entities.push(action.payload);
        },
        messageRemoved: (state, action) => {
            state.entities = state.entities.filter((m) => m._id !== action.payload);
        },
    },
    
});
const { reducer: messagesReducer, actions } = messagesSlice;
const {
    messagesRequested,
    messagesReceived,
    messageCreated,   
    messagesRequestFailed,
    messageRemoved
} = actions;

export const addMessage = (payload) => async (dispatch) => {
        dispatch(messagesRequested());
        try {
            const { content } = await messageService.createMessage(payload);           
            dispatch(messageCreated(content));          
        } catch (error) {
            dispatch(messagesRequestFailed(error.message));
        }
    };
export const loadMessagesList = () => async (dispatch) => {
        dispatch(messagesRequested());
        try {
            const { content } = await messageService.getMessages();
            dispatch(messagesReceived(content));
        } catch (error) {
            dispatch(messagesRequestFailed(error.message));
        }
    };

    export const removeMessage = (messageId) => async (dispatch) => {
        dispatch(messagesRequested())
        try {
            await messageService.removeMessage(messageId);
            dispatch(messageRemoved(messageId));
        } catch (error) {
            dispatch(messagesRequestFailed(error.message));
        }
    };

export const getMessagesList = () => (state) => state.messages.entities;
export const getMessagesLoadingStatus = () => (state) => state.messages.isLoading;
export default messagesReducer
