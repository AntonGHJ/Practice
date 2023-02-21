import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import API from "../api";

const PropertiesContext = React.createContext();

export const useProperties = () => {
    return useContext(PropertiesContext);
};

export const PropertiesProvider = ({ children }) => {
    const [properties, setProperties] = useState([]);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const getProperties = async () => {
           
                const { content } = await API.properties.fetchProperties();
                setProperties(content);
            
            
            
        };
        getProperties();
    }, []);
    const getProperty = (id) => {
        return properties.find((p) => p._id === id);
    };

    
    useEffect(() => {
        if (error !== null) {
            toast(error);
            setError(null);
        }
    }, [error]);

    return (
        <PropertiesContext.Provider
            value={{
                properties,
                getProperty
            }}
        >
            {children}
        </PropertiesContext.Provider>
    );
};

PropertiesProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
