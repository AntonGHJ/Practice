import React, { useEffect, useState } from "react";
import { validator } from "../utils/validator";
import TextField from "./textField";

import MultiSelectField from "./multiSelectField";

import { useDispatch, useSelector } from "react-redux";
import { getProperties, loadPropertiesList } from "../store/properties";
import { addCar } from "../store/cars";
import API from "../api";



const CreateCar = () => {
    const properties = useSelector(getProperties())
      

    console.log(properties);
    const dispatch = useDispatch();
    const [carImages, setCarImages] = useState()
    const [data, setData] = useState({
        name: "",        
        engine: '',        
        price: "",
        mileage: "",
        productionYear: "",
        images: [],
        properties: []
    });
    //const properties = useSelector(getProperties());
    
    const propertiesList = Object.values(properties).map((p) => ({
        label: p.name,
        value: p._id
    }));
    console.log(propertiesList);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        console.log(e);
        setData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };
    const handleChangeProperties = (e) => {
        console.log(e);
        setData((prevState) => ({
            ...prevState,
            properties: e.value
        }));
    };
    const validatorConfig = {
        
        name: {

            min: {
                message: "Имя должно состоять минимум из 3 символов",
                value: 3
            }
        },
        
    };
    useEffect(() => {
        validate();
    }, [data]);
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        const newData = {
            ...data,
            images: carImages,
            properties: data.properties.map((p) => p.value)
        };
        dispatch(addCar(newData));
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Model"
                name="name"
                value={data.name}
                onChange={handleChange}
            />
            <TextField
                label="Engine"
                name="engine"
                value={data.engine}
                onChange={handleChange}
               
            />
            
             <TextField
                label="Price"
                name="price"
                value={data.price}
                onChange={handleChange}
            
            />
            <TextField
                label="Mileage"
                name="mileage"
                value={data.mileage}
                onChange={handleChange}
            
            />
            <TextField
                label="Production Year"
                name="productionYear"
                value={data.productionYear}
                onChange={handleChange}
            
            />
            <MultiSelectField 
                defaultValue={data.properties}
                options={propertiesList}
                onChange={handleChangeProperties}
                name="properties"
                label="Выберите ваши качества"/>
           
           <div className="addPicturesDiv">
        <label htmlFor="image-upload" className="image-label"> Add Photos <br />
      <input type="file" className="image-input"
      multiple onChange={(e) => {setCarImages(e.target.files)}}/>
      </label>
      </div>
            <button
                className="btn btn-primary w-100 mx-auto"
                type="submit"
               disabled={!isValid}
            >
                Submit
            </button>
        </form>
    );
};

export default CreateCar;
