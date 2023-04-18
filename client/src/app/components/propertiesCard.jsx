import React from "react";
import Properties from './properties';
import PropTypes from "prop-types";

const PropertiesCard = ({ data }) => {
    return (<>
        <div className="card-container">
            <span className="card-title">Properties:</span>
            <p className="card-text">
                <Properties properties={data} />
            </p>
        </div>
    </>
    );
};
PropertiesCard.propTypes = {
    data: PropTypes.array
};

export default PropertiesCard;
