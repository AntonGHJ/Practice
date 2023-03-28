import httpService from "./http.service";
const carEndpoint = "/car/";

const carService = {
    createCar:
    /*async (payload) => {
        const { data } = await httpService.put(
            carEndpoint + payload._id,
            payload
        );
        return data;*/
     async (payload) => {
        console.log(payload);
        
        console.log('payload._id', payload._id);
        const { data } = await httpService.post(carEndpoint, payload);
        console.log(data);
        
        return data;
    },
    getCars: async (carId) => {
        const { data } = await httpService.get(carEndpoint, {
            params: {
                orderBy: "carId",
                equalTo: `${carId}`
            }
        });
        return data;
    },
    removeCar: async (carId) => {
        const { data } = await httpService.delete(carEndpoint + carId);
        return data;
    }
};
export default carService;
