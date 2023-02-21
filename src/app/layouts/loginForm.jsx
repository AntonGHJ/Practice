import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TextField from "../components/textField";
import useDarkMode from "../hooks/useDarkMode";
import { validator } from "../utils/validator";

const LoginForm = () => {
    const [data, setData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});
    const [theme, setTheme] = useDarkMode()
    const handleChange = ({ target }) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const validatorConfig = {
        email: {
            isRequired: {
                message: "E-mail is required"
            },
            isEmail: {
                message: "Email incorrect"
            }
        },
        password: {
            isRequired: {
                message: "Please enter valid password"
            },

        }
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
        console.log(data);
    };
    return (
        <>
         <div className={`theme-${theme}`}>
        <div className="container mt-5">
      
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    <h1 >Admin Access</h1>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Email"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                            error={errors.email}
                        />
                        <TextField
                            label="Password"
                            type="password"
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                            error={errors.password}
                        />
                      
                        <button
                            className="btn btn-primary w-100 mx-auto"
                            type="submit"
                            disabled={!isValid}
                        >
                            Submit
                        </button>
                      
                    </form>
                  
                </div>
                
                
                
                
            </div>
            
        </div>
        <Link className="nav-link" to={`/cars/carEdit`}>Add Car</Link>
        </div>
        </>
    );
};
export default LoginForm;
