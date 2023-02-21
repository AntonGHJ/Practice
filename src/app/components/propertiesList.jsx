import React from "react";
import PropTypes from "prop-types";
import Property from "./property";

const PropertiesList = ({ properties }) => {
    if(properties){
    return (
        <div style={{maxWidth:"150px"}}>
            {properties.map((p) => (
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
