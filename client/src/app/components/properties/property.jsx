import React from "react";
import PropTypes from "prop-types";

const Property = ({ color, name, _id }) => {
  return <span className={"badge m-1 bg-" + color + " badge-xl"}>{name}</span>;
};
Property.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
};

export default Property;
