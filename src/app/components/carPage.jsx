import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../api";

import { useHistory } from "react-router-dom";
import PropertiesList from "./propertiesList";
import BackHistoryButton from "./backButton";
import ImageSlider from "./imageSlider";
import { useSelector } from "react-redux";
import { getCarById } from "../store/cars";
import useDarkMode from "../hooks/useDarkMode";
import Car from "./car";

const CarPage = ({ carId }) => {
    const history = useHistory();
    const car = useSelector(getCarById(carId));
    const [theme, toggleTheme] = useDarkMode()
    const urls = Array.from(car.images).map(file => URL.createObjectURL(file));
    if (car) {
        return (
            <>
          
          <div className={`theme-${theme}`}>
          <div className='darkmodeDiv'>
            <button className='darkModeButton' onClick={toggleTheme}>
                <span className="sun">☀️</span>
                <span className="moon">🌙</span>
            </button>
        </div>
            <div className="backButton"><BackHistoryButton/></div>
            <div style={{maxWidth:1200, margin:"auto", borderRadius:"15"}}>
                <Car id={carId} car={car}/>
            </div>
                {/*<h1> {car.name}</h1>
                <p>Fuel type: {car.engine}</p>
                <p> Year of production: {car.productionYear}</p>
                <PropertiesList properties={car.properties}/>
                <p> Toal mileage: {car.mileage} km</p>
                <p> Price netto: {car.price} Euro</p>
        <hr />*/}
                
            </div>
           
            </>
        );
    } else {
        return <h1>Loading...</h1>;
    }
};

CarPage.propTypes = {
    carId: PropTypes.string.isRequired
};

export default CarPage;
