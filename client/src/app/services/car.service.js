import httpService from "./http.service";
const carEndpoint = "/car/";

const carService = {
    createCar:
    async (payload) => {
       /* const { data } = await httpService.post(
            carEndpoint + 'createCar/',
            payload
        );
        console.log(data);
        return data;*/
        const { data } = await httpService.post(`car/createCar`, payload);
        return data;
     /*async (payload) => {
        console.log(payload);
        
        console.log('payload._id', payload.id);
        const { data } = await httpService.put(
            carEndpoint + 'createCar/',
            payload
        );
        console.log(data);
        
        return data;*/
    },
    getCars: async () => {
        const { data } = await httpService.get(carEndpoint);
        return data;
        /*const { data } = await httpService.get(carEndpoint, {
            params: {
                orderBy: "carId",
                equalTo: `${carId}`
            }
        });
        return data;*/
    },
    removeCar: async (carId) => {
        const { data } = await httpService.delete(carEndpoint + carId);
        return data;
    }
};
export default carService;
