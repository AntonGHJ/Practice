/*eslint-disable */
import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import ImageSlider from "./imageSlider";
import PropertiesCard from "../propertiesCard";

const CarShort = ({ car }) => {
  if (!car) {
    return null;
  }
  return (
    <>
      <div className="images">
        <ImageSlider images={car.images} alt={car.name} />
        <table>
          <tbody>
            <tr>
              <td className="car-desc-text">Model: </td>
              <td className="car-detail">{car.name}</td>
            </tr>
            <tr>
              <td className="car-desc-text">Mileage:</td>
              <td className="car-detail">{car.mileage}</td>
            </tr>
            <tr>
              <td className="car-desc-text">Price: </td>
              <td className="car-detail">{car.price}</td>
            </tr>
            <tr>
              <td>
                <PropertiesCard data={car.properties} />
              </td>
              <td>
                <Link className="detailsLink" to={`/cars/${car._id}`}>
                  More details
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CarShort;
