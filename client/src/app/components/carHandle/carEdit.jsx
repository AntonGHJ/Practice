import React, { useEffect, useState } from "react";
import { validator } from "../../utils/validator";
import TextField from "../forms/textField";
import MultiSelectField from "../forms/multiSelectField";
import { useDispatch, useSelector } from "react-redux";
import { getProperties, getPropertiesByIds } from "../../store/properties";
import { getCarById, updateCar } from "../../store/cars";
import { useParams, useHistory } from "react-router-dom";
import { GetFileUrls } from "../../utils/addImage";

const CarEdit = () => {
  const { carId } = useParams();
  const car = useSelector(getCarById(carId));
  const allProp = useSelector(getProperties());
  const history = useHistory();
  const properties = useSelector(getPropertiesByIds(car.properties));
  const dispatch = useDispatch();
  const [carImages, setCarImages] = useState([]);
  const [data, setData] = useState({
    name: car.name,
    engine: car.engine,
    power: car.power,
    description: car.descriotion,
    color: car.color,
    price: car.price,
    mileage: car.mileage,
    productionYear: car.productionYear,
    images: [],
    properties: car.properties.map((p) => ({ value: p._id, label: p.name })),
  });
  const propertiesList = properties.map((p) => ({
    label: p.name,
    value: p._id,
  }));
  const propertiesOptions = allProp.map((p) => ({
    label: p.name,
    value: p._id,
  }));
  const [errors, setErrors] = useState({});

  function getPropListByIds(propertiesIds) {
    const propertiesArray = [];
    for (const propId of propertiesIds) {
      for (const property of properties) {
        if (property._id === propId) {
          propertiesArray.push(property);
          break;
        }
      }
    }
    return propertiesArray;
  }
  const transformData = (data) => {
    const result = getPropListByIds(data).map((p) => ({
      label: p.name,
      value: p._id,
    }));

    return result;
  };
  useEffect(() => {
    setData({
      ...car,
      properties: transformData(car.properties),
    });
  }, []);

  const handleChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleChangeProperties = (e) => {
    setData((prevState) => ({
      ...prevState,
      properties: e.value,
    }));
  };

  const validatorConfig = {
    name: {
      min: {
        message: "Имя должно состоять минимум из 3 символов",
        value: 3,
      },
    },
  };

  useEffect(() => {
    validate();
  }, [data]);
  if (!car) {
    return <div>Loading...</div>;
  }

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    const fileUrls = await GetFileUrls(carImages);
    const newData = {
      ...data,
      images: fileUrls,
      properties: data.properties.map((p) => p.value),
    };
    console.log(newData);
    dispatch(updateCar(car._id, newData));
    history.push("/cars");
  };

  return (
    <>
      <div className="carsList">
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
            label="Power"
            name="power"
            value={data.power}
            onChange={handleChange}
          />
          <TextField
            label="Color"
            name="color"
            value={data.color}
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
          <TextField
            label="Description"
            name="description"
            value={data.description}
            onChange={handleChange}
          />
          {properties && (
            <MultiSelectField
              defaultValue={propertiesList}
              options={propertiesOptions}
              onChange={handleChangeProperties}
              name="properties"
              label="Choose properties"
            />
          )}
          <div className="addPicturesDiv">
            <label htmlFor="image-upload" className="image-label">
              {" "}
              Внимание! Все фотографии необходимо добавить повторно <br />
              <input
                type="file"
                className="image-input"
                multiple
                onChange={(e) => {
                  setCarImages(e.target.files);
                }}
              />
            </label>
          </div>
          <button
            className="btn btn-primary w-100 mx-auto"
            type="submit"
            disabled={!isValid || carImages.length === 0}
          >
            Update car
          </button>
        </form>
      </div>
    </>
  );
};

export default CarEdit;
