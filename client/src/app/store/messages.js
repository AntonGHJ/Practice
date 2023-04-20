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

export const addMessage = (payload) => async (dispatch, getState) => {
        dispatch(messagesRequested());
        console.log(getState());
        try {
            console.log('Пытаюсь создать сообщение, payload', payload);
            const { content } = await messageService.createMessage(payload);
            console.log('Пытаюсь создать сообщение, контент', content);
            dispatch(messageCreated(payload));
            console.log('Сообщение создано');
        } catch (error) {
            dispatch(messagesRequestFailed(error.message));
            console.log('ошибка сообщения', getState());
        }
    };
export const loadMessagesList = () => async (dispatch) => {
        dispatch(messagesRequested());
        console.log('Запрошены сообщения');
        try {
            const { content } = await messageService.getMessages();
            dispatch(messagesReceived(content));
            console.log('получен список собщений', content);
        } catch (error) {
            dispatch(messagesRequestFailed(error.message));
            console.log('НЕ получен список сообщений, ошибка');
        }
    };

    export const removeMessage = (messageId) => async (dispatch) => {
        dispatch(messagesRequested());
        console.log("Пытаюсь удалить сообщение с id", messageId);
        try {
            await messageService.removeMessage(messageId);
            dispatch(messageRemoved(messageId));
            console.log("сообщение удалено");
        } catch (error) {
            dispatch(messagesRequestFailed(error.message));
            console.log("ошибка удаления сообщения", error.message);
        }
    };

export const getMessagesList = () => (state) => state.messages.entities;
export const getCurrentMessageData = () => (state) => {
    return state.messages.entities
        ? state.messages.entities.find((m) => m._id === state.messages.messageId)
        : null;
};

export const getMessageById = (messageId) => (state) => {
    if (state.messages) {
        return state.messages.entities.find((m) => m._id === messageId);
    }
};
export const getMessagesLoadingStatus = () => (state) => state.messages.isLoading;
export const getCurrentMessageId = () => (state) => state.messages.entities.messageId;
export default messagesReducer
