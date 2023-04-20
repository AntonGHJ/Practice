import React from "react";
import { useParams } from "react-router-dom";
import CarPage from "../components/carPage";
import CarsList from "../components/carsList";
import CarsLoader from "../components/hoc/carsLoader";

const Cars = () => {
    const params = useParams();
    const { carId } = params;    
    return (
    <>
    <CarsLoader>
        {carId ? 
        <CarPage carId={carId} /> 
        : 
        <CarsList />}
    </CarsLoader>
    </>
    );
};

export default Cars;
