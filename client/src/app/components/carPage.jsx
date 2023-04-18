import React from "react";
import PropTypes from "prop-types";
import BackHistoryButton from "./backButton";
import { useSelector } from "react-redux";
import { getCarById } from "../store/cars";
import useDarkMode from "../hooks/useDarkMode";
import Car from "./car";
import Loader from "../utils/loader";

const CarPage = ({ carId }) => {    
    const car = useSelector(getCarById(carId));    
    const [theme, toggleTheme] = useDarkMode()
    
    if (car) {
        return ( <>          
        <div className={`theme-${theme}`}>
            <div className='darkmodeDiv'>
                <button className='darkModeButton' onClick={toggleTheme}>
                    <span className="sun">☀️</span>
                    <span className="moon">🌙</span>
                </button>
            </div>
            
            <div className="backButton"><BackHistoryButton/></div>
                <div className='container'>
                    <div className="car-data">
                        <Car id={car._id} car={car} images={car.images} />
                    </div>
                </div>
            </div>
        </>);
    } else {
        return <Loader />;
    }
};

CarPage.propTypes = {
    carId: PropTypes.string.isRequired
};

export default CarPage;
