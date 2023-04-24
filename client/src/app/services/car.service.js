import httpService from "./http.service";
const carEndpoint = "/car/";

const carService = {
    createCar:
    async (payload) => {
        const { data } = await httpService.post(`car/createCar`, payload);
        return data;
    },
    getCars: async () => {
        const { data } = await httpService.get(carEndpoint);
        return data;
    },
    removeCar: async (carId) => {
        const { data } = await httpService.delete(carEndpoint + carId);
        return data;
    },
    updateCar: async (carId, updatedData) => {
        const { data } = await httpService.patch(`${carEndpoint}${carId}`, updatedData);
        return data;
    },
};
export default carService;
