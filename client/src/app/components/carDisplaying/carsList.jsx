import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCarsList, getCarsLoadingStatus, removeCar } from "../../store/cars";
import { getIsLoggedIn } from "../../store/users";
import Loader from "../../utils/loader";
import CarShort from "./carShort";

const CarsList = () => {
  const cars = useSelector(getCarsList());
  const carsLoadingStatus = useSelector(getCarsLoadingStatus());
  const isLoggedIn = useSelector(getIsLoggedIn());
  const dispatch = useDispatch();

  return (
    <>
      <div className="carsList">
        <div className="carListHeader">OUR BEST CARS</div>
        {carsLoadingStatus && <Loader />}
        {cars.map((car, _id, images, properties) => (
          <div key={_id} className="car-info">
            <table className="mb-5">
              <CarShort
                id={_id}
                images={images}
                car={car}
                properties={properties}
              />
              <div className="detLink">
                {isLoggedIn && (
                  <div>
                    <Link
                      className="btn btn-secondary mx-2"
                      to={`/cars/${car._id}/carEdit`}
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger mx-2"
                      onClick={() => dispatch(removeCar(car._id))}
                    >
                      Delete car
                    </button>
                    <hr />
                  </div>
                )}
              </div>
            </table>
            <br />
          </div>
        ))}
      </div>
    </>
  );
};

export default CarsList;
