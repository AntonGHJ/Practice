import React from "react";
import Properties from './properties';
import PropTypes from "prop-types";

const PropertiesCard = ({ data }) => {
    return (
       <>
                <h5 className="card-title">
                    <span>Properties</span>
                </h5>
                <p className="card-text">
                    <Properties properties={data} />
                </p>
                </>
    );
};
PropertiesCard.propTypes = {
    data: PropTypes.array
};

export default PropertiesCard;
