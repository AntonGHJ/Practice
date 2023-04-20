import httpService from "./http.service";
const messageEndpoint = "/message/";

const messageService = {
    createMessage: async (payload) => {
        const { data } = await httpService.post('message/createMessage', payload);
        return data;
    },
    getMessages: async () => {
        const { data } = await httpService.get(messageEndpoint);
        return data;
    },
    removeMessage: async (messageId) => {
        const { data } = await httpService.delete(messageEndpoint + messageId);
        console.log(data);
        return data;
    }
};
export default messageService;
