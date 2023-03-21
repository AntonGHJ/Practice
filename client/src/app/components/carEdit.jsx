import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { validator } from "../utils/validator";
import TextField from "./textField";
import MultiSelectField from "./multiSelectField";
import BackHistoryButton from "./backButton";
import { useProperties } from "../hooks/useProperties";
import { useDispatch, useSelector } from "react-redux";
import { addCar, getCurrentCarData } from "../store/cars";
import useDarkMode from "../hooks/useDarkMode";
import API from "../api";


   const CarEdit = () => {
   
    const [theme, toggleTheme] = useDarkMode()
    const dispatch = useDispatch()
    const currentCar = useSelector(getCurrentCarData())
    const [carName, setCarName] = useState('')
    const [carEngine, setCarEngine] = useState('')
    const properties = [{nonAccident: {
        _id: "1",
        name: "No road accidents",
        color: "secondary"
    },
    oneOwner: {
        _id: "2",
        name: "From first owner",
        color: "primary"
    }}]
    const propertiesList = properties.map((p) => ({
        label: p.name,
        value: p._id
    }))
    const [carYear, setCarYear] = useState('')
    const [carMileage, setCarMileage] = useState('')
    const [carPrice, setCarPrice] = useState('')
    const [carImages, setCarImages] = useState()
    const removeCar = (carId) => {
        //  setCars(cars.filter(car => car._id !== carId))
          console.log(carId);
      }
useEffect(()=> {
    console.log(currentCar);
}, [])
      const handleChange = (target) => {
        console.log(target,'!', properties);
        /*
        setProperties((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));*/
    };
      return (
        <div className={`theme-${theme}`}>
        <div className='darkmodeDiv'>
           <button className='darkModeButton' onClick={toggleTheme}>
               <span className="sun">☀️</span>
               <span className="moon">🌙</span>
           </button>
       </div>
        <div className="container">
      <label>
       
       <TextField
            label="Car name"
            name="name"
            value={carName}
            onChange={(e) => setCarName(e.target.value)}                            
        />
        <TextField
            label="Engine"
            name="engine"
            value={carEngine}
            onChange={(e) => setCarEngine(e.target.value)}                            
        />
        <TextField
            label="Production year"
            name="productionYear"
            value={carYear}
            onChange={(e) => setCarYear(e.target.value)}                            
        />
        <TextField
            label="Mileage"
            name="carMileage"
            value={carMileage}
            onChange={(e) => setCarMileage(e.target.value)}                            
        />
        <TextField
            label="Price"
            name="carPrice"
            value={carPrice}
            onChange={(e) => setCarPrice(e.target.value)}                            
        />
        
        <MultiSelectField 
                 defaultValue={properties}
                 options={propertiesList}
                 onChange={handleChange}
                 name="properties"
                 label="Choose car properties"/>

        <div className="addPicturesDiv">
        <label htmlFor="image-upload" className="image-label"> Add Photos <br />
      <input type="file" className="image-input"
      multiple onChange={(e) => {setCarImages(e.target.files)}}/>
      </label>
      </div>
      <hr />
     
      <button className="btn btn-success" onClick={() => { 
            
          dispatch(addCar({
              name: carName,
              engine: carEngine,
              properties: [],
                
                images: carImages,
                productionYear: carYear,
                mileage: carMileage,
                price: carPrice

              }))}}>

                  Add car</button>
      </label>
      </div>
      </div>
      )

}

export default CarEdit
/*const CarEdit = ({carId}) => {
    const [car, setCar] = useState();
    useEffect(() => {
        api.cars.getById(carId).then((data) => setCar(data));
    });
    const history = useHistory();
    
    const  properties = useProperties();
    const propertiesList = properties.map((p) => ({
        label: p.name,
        value: p._id
    }));

    const [errors, setErrors] = useState({});

    const handleSubmit =  (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
         updateUserData({
            ...data,
            properties: data.properties.map((p) => p.value)
        });

        history.push(`/users/${currentUser._id}`);
    };
    function getQualitiesListByIds(qualitiesIds) {
        const qualitiesArray = [];
        for (const qualId of qualitiesIds) {
            for (const quality of qualities) {
                if (quality._id === qualId) {
                    qualitiesArray.push(quality);
                    break;
                }
            }
        }
        return qualitiesArray;
    }
    const transformData = (data) => {
        const result = getQualitiesListByIds(data).map((qual) => ({
            label: qual.name,
            value: qual._id
        }));
        return result;
    };
    useEffect(() => {
        if (!professionLoading && !qualitiesLoading && currentUser && !data) {
            setData({
                ...currentUser,
                qualities: transformData(currentUser.qualities)
            });
        }
    }, [professionLoading, qualitiesLoading, currentUser, data]);
    useEffect(() => {
        if (data && isLoading) {
            setIsLoading(false);
        }
    }, [data]);

    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: {
                message: "Email введен некорректно"
            }
        },
        name: {
            isRequired: {
                message: "Введите ваше имя"
            }
        }
    };
    useEffect(() => {
        validate();
    }, [data]);
    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;
    return (
        <div className="container mt-5">
            <BackHistoryButton />
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    {!isLoading && Object.keys(professions).length > 0 ? (
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Имя"
                                name="name"
                                value={data.name}
                                onChange={handleChange}
                                error={errors.name}
                            />
                            <TextField
                                label="Электронная почта"
                                name="email"
                                value={data.email}
                                onChange={handleChange}
                                error={errors.email}
                            />
                            <SelectField
                                label="Выбери свою профессию"
                                defaultOption="Choose..."
                                options={professionsList}
                                name="profession"
                                onChange={handleChange}
                                value={data.profession}
                                error={errors.profession}
                            />
                            <RadioField
                                options={[
                                    { name: "Male", value: "male" },
                                    { name: "Female", value: "female" },
                                    { name: "Other", value: "other" }
                                ]}
                                value={data.sex}
                                name="sex"
                                onChange={handleChange}
                                label="Выберите ваш пол"
                            />
                            <MultiSelectField
                                defaultValue={data.qualities}
                                options={qualitiesList}
                                onChange={handleChange}
                                name="qualities"
                                label="Выберите ваши качества"
                            />
                            <button
                                type="submit"
                                disabled={!isValid}
                                className="btn btn-primary w-100 mx-auto"
                            >
                                Обновить
                            </button>
                        </form>
                    ) : (
                        "Loading..."
                    )}
                </div>
            </div>
        </div>
    );
};

export default EditUserPage;*/
