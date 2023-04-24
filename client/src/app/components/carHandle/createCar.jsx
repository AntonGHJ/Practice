import React, { useEffect, useState } from "react";
import { validator } from "../../utils/validator";
import TextField from "../forms/textField";
import MultiSelectField from "../forms/multiSelectField";
import { useDispatch, useSelector } from "react-redux";
import { getProperties } from "../../store/properties";
import { addCar } from "../../store/cars";
import { GetFileUrls } from "../../utils/addImage";

const CreateCar = () => {
  const properties = useSelector(getProperties());
  const dispatch = useDispatch();
  const [carImages, setCarImages] = useState([]);
  const [data, setData] = useState({
    name: "",
    engine: "",
    color: "",
    power: "",
    price: "",
    mileage: "",
    description: "",
    productionYear: "",
    images: [],
    properties: [],
  });

  const propertiesList = Object.values(properties).map((p) => ({
    label: p.name,
    value: p._id,
  }));
  const [errors, setErrors] = useState({});

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
        message: "Название должно состоять минимум из 3 символов",
        value: 3,
      },
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
    console.log(propertiesList, properties);
    dispatch(addCar(newData));
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
            error={errors.name}
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
          <MultiSelectField
            defaultValue={data.properties}
            options={propertiesList}
            onChange={handleChangeProperties}
            name="properties"
            label="Choose  properties"
          />

          <div className="addPicturesDiv">
            <label htmlFor="image-upload" className="image-label">
              {" "}
              Необходимо добавить минимум 1 фото! <br />
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
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateCar;
