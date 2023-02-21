import React from "react";
import { useParams } from "react-router-dom";
import Car from "../components/car";
import CarPage from "../components/carPage";
import CarsList from "../components/carsList";
const Cars = () => {
    const params = useParams();
    const { carId } = params;
    return <>{carId ? <CarPage carId={carId} /> : <CarsList />}</>;
};

export default Cars;
