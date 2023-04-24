import React from "react";
import { useParams } from "react-router-dom";
import CarPage from "../components/carDisplaying/carPage";
import CarsList from "../components/carDisplaying/carsList";
import CarsLoader from "../components/hoc/carsLoader";

const Cars = () => {
  const params = useParams();
  const { carId } = params;
  return (
    <>
      <CarsLoader>
        {carId ? <CarPage carId={carId} /> : <CarsList />}
      </CarsLoader>
    </>
  );
};

export default Cars;
