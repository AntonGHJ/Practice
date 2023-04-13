/*eslint-disable */
import React from "react";
import { Link } from "react-router-dom";
import Image from "./image";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCarById, getCurrentCarId } from "../store/cars";
import PropertiesList from "../components/properties/propertiesList";
import ImageSlider from "./imageSlider";
import PropertiesCard from "./qualitiesCard";


const Car = ({ car }) => {
    if (!car) {
        return null;
        }
        
        /*const urls = Array.from(car.images).map(file => {
            console.log(car.images);
            return URL.createObjectURL(file);
          });*/
    /*let urls = [];
    Array.from(car.images).forEach(file => {
        if (file instanceof Blob) {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
          fileReader.onload = () => {
            urls.push(fileReader.result);
            setUrls(urls);
          };
        }
      });*/
      //console.log(urls);  
    return (
        <>
        <div><ImageSlider images={car.images} alt={car.name}/></div>
    <tr >
    <td>

  <span className="car-desc-text">Model: </span>
  <span className="car-detail">{car.name}</span>

    <hr />
    {`Type of fuel: ${car.engine}`}
    <hr />
    {`Production year: ${car.productionYear}`}
    <hr />
    {`Mileage: ${car.mileage}`}
    <hr />
    {`Price: ${car.price}`}
    <hr />
 <PropertiesCard data={car.properties}/>


    </td>
      
    </tr>
    </>
    );
    }
    
    export default Car;

/*const CarCard = ({ car }) => {
    const history = useHistory();
    const currentCarId = useSelector(getCarById());

    const handleClick = () => {
        history.push(history.location.pathname + "/edit");
    };
    return (
        <div className="card mb-3">
            <div className="card-body">
                {currentCarId ===  (
                    <button
                        className="position-absolute top-0 end-0 btn btn-light btn-sm"
                        onClick={handleClick}
                    >
                        <i className="bi bi-gear"></i>
                    </button>
                )}

                <div className="d-flex flex-column align-items-center text-center position-relative">
                    <img
                        src={car.image}
                        className="rounded-circle"
                        width="150"
                    />
                    <div className="mt-3">
                        <h4>{car.name}</h4>
                        <p className="text-secondary mb-1">
                            {car.profession.name}
                        </p>
                        <div className="text-muted">
                            <i
                                className="bi bi-caret-down-fill text-primary"
                                role="button"
                            ></i>
                            <i
                                className="bi bi-caret-up text-secondary"
                                role="button"
                            ></i>
                            <span className="ms-2">{car.rate}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
CarCard.propTypes = {
    car: PropTypes.object
};

export default CarCard;*/
