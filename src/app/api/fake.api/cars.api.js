/*eslint-disable*/

import Image from "../../components/image";

const properties = {
    nonAccident: {
        _id: "1",
        name: "No road accidents",
        color: "secondary"
    },
    oneOwner: {
        _id: "2",
        name: "From first owner",
        color: "primary"
    },
    serviceHistory: {
        _id: "3",
        name: "Full service history",
        color: "success"
    },
    validTUV: {
        _id: "4",
        name: "TUV valid",
        color: "info"
    },
    nonSmokeOwner: {
        _id: "5",
        name: "Non Smoke Owner",
        color: "dark"
    },
};

const cars = [
    {
        _id: "1",
        name: 'VW Touareg',
        engine: 'diesel',
        productionYear: 2016,
        images: ["https://a.d-cd.net/d7f90des-960.jpg", 
        "https://a.d-cd.net/IoAAAgAD7OA-960.jpg",
        "https://s.auto.drom.ru/photo/M904hH5tbjDq08siLQW7zPJsF7nQfGe_RhjolI0oYQWhqWq1eeI8D9B9mEnojXkL_LocDhRM4lNqMLf5I7cxQXQwyhds.jpg"],
      
        properties: [
            properties.nonAccident,
        properties.nonSmokeOwner],
        mileage: 36000,
        price: 33000,        
    },
    {
        _id: "2",
        name: 'VW Touareg',
        engine: 'diesel',
        productionYear: 2018,
       
       images: ["https://a.d-cd.net/IoAAAgAD7OA-960.jpg",
       "https://a.d-cd.net/d7f90des-960.jpg", 
        
        "https://s.auto.drom.ru/photo/M904hH5tbjDq08siLQW7zPJsF7nQfGe_RhjolI0oYQWhqWq1eeI8D9B9mEnojXkL_LocDhRM4lNqMLf5I7cxQXQwyhds.jpg"],
      
        properties: [
            properties.nonAccident, 
            properties.oneOwner, 
            properties.serviceHistory,
            properties.validTUV],
        mileage: 129500,
        price: 29000,        
    },
    {
        _id: "3",
        name: 'VW Touareg',
        engine: 'diesel',
        productionYear: 2015,
        
       images: ["https://s.auto.drom.ru/photo/M904hH5tbjDq08siLQW7zPJsF7nQfGe_RhjolI0oYQWhqWq1eeI8D9B9mEnojXkL_LocDhRM4lNqMLf5I7cxQXQwyhds.jpg",
       "https://a.d-cd.net/d7f90des-960.jpg", 
        "https://a.d-cd.net/IoAAAgAD7OA-960.jpg"
        ],
      
        properties: [
            properties.nonAccident, 
            properties.nonSmokeOwner, 
            properties.serviceHistory,
        properties.validTUV],
        mileage: 189000,
        price: 24800,        
    },
    {
        _id: "4",
        name: 'VW Touareg',
        engine: 'diesel',
        productionYear: 2017,
        
       images: ["https://a.d-cd.net/d7f90des-960.jpg", 
        "https://a.d-cd.net/IoAAAgAD7OA-960.jpg",
        "https://s.auto.drom.ru/photo/M904hH5tbjDq08siLQW7zPJsF7nQfGe_RhjolI0oYQWhqWq1eeI8D9B9mEnojXkL_LocDhRM4lNqMLf5I7cxQXQwyhds.jpg"],
      
        properties: [
            properties.oneOwner, 
            properties.serviceHistory],
        mileage: 154000,
        price: 31900,        
    },
    {
        _id: "5",
        name: 'VW Touareg',
        engine: 'diesel',
        productionYear: 2018,
        
       images: ["https://a.d-cd.net/d7f90des-960.jpg", 
        "https://a.d-cd.net/IoAAAgAD7OA-960.jpg",
        "https://s.auto.drom.ru/photo/M904hH5tbjDq08siLQW7zPJsF7nQfGe_RhjolI0oYQWhqWq1eeI8D9B9mEnojXkL_LocDhRM4lNqMLf5I7cxQXQwyhds.jpg"],
      
        properties: [
            properties.nonAccident, 
            properties.validTUV, 
            properties.serviceHistory],
        mileage: 76000,
        price: 41900,        
    },
    {
        _id: "6",
        name: 'VW Touareg',
        engine: 'diesel',
        productionYear: 2017,
        
       images: ["https://a.d-cd.net/d7f90des-960.jpg", 
        "https://a.d-cd.net/IoAAAgAD7OA-960.jpg",
        "https://s.auto.drom.ru/photo/M904hH5tbjDq08siLQW7zPJsF7nQfGe_RhjolI0oYQWhqWq1eeI8D9B9mEnojXkL_LocDhRM4lNqMLf5I7cxQXQwyhds.jpg"],
      
        properties: [
            properties.validTUV, 
            properties.oneOwner, 
            properties.serviceHistory],
        mileage: 142000,
        price: 34800,        
    },
];

const getById = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(cars.find((car) => car._id === id));
        }, 1000);
    });

const fetchAll = () => 
      {
        return cars
    };

    const fetchProperties = () => 
     new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(properties);
        }, 0);
    });


export default {
    getById,
    fetchAll,
    fetchProperties
}