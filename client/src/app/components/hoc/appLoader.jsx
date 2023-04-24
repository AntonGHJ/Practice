import { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { loadPropertiesList } from "../../store/properties";
import { getIsLoggedIn, loadUsersList } from "../../store/users";

const AppLoader = ({ children }) => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(getIsLoggedIn())
    useEffect(()=> {
        dispatch(loadUsersList());
    }, [isLoggedIn])
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
