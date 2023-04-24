import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import Car from "../carHandle/car";
import Loader from "../../utils/loader";
import BackHistoryButton from "../carHandle/backButton";
import { getCarById } from "../../store/cars";

const CarPage = ({ carId }) => {
  const car = useSelector(getCarById(carId));

  if (car) {
    return (
      <>
        <div className="backButton">
          <BackHistoryButton />
        </div>
        <div className="carsList">
          <div className="car-data">
            <Car id={car._id} car={car} images={car.images} />
          </div>
        </div>
      </>
    );
  } else {
    return <Loader />;
  }
};

CarPage.propTypes = {
  carId: PropTypes.string.isRequired,
};

export default CarPage;
