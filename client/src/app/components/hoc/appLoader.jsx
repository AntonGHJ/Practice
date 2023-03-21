import { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import { loadPropertiesList } from "../../store/properties";


const AppLoader = ({ children }) => {
    const dispatch = useDispatch();
    
    
    useEffect(() => {
        dispatch(loadPropertiesList());
      
    }, []);
   
    return children;
};

AppLoader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default AppLoader;
