import { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getCarsLoadingStatus, loadCarsList } from "../../store/cars";
//import { AnimatedCar } from "../../utils/animatedCar";
const CarsLoader = ({ children }) => {
    //const carsLoadingStatus = useSelector(getCarsLoadingStatus())
    const dispatch = useDispatch();
    useEffect(() => {
         dispatch(loadCarsList());
    }, []);
    
    return children;
};

CarsLoader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
export default CarsLoader;
