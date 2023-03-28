import React, {useEffect} from "react";
import PropTypes from "prop-types";
import Property from "./property";
import { useDispatch, useSelector } from "react-redux";
import { getPropertiesByIds, getPropertiesLoadingStatus, loadPropertiesList } from "../../store/properties";


const PropertiesList = ({ properties }) => {
    const dispatch = useDispatch();
    const isLoading = useSelector(getPropertiesLoadingStatus());
    const propertiesList = useSelector(getPropertiesByIds(properties));
    useEffect(() => {
        dispatch(loadPropertiesList());
    }, []);

    if (isLoading) return "Loadind ...";

    if(properties){
    return (
        <div style={{maxWidth:"150px"}}>
            {propertiesList.map((p) => (
                <Property key={p._id} {...p} />
            ))}
        </div>
    )
   
    } else {
        return <h1>No additionaly properties to show</h1>};
};

PropertiesList.propTypes = {
    properties: PropTypes.array
};

export default PropertiesList;
