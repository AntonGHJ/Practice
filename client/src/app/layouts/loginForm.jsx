/*eslint-disable */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import useDarkMode from "../hooks/useDarkMode";
import { getAuthErrors, login } from "../store/users";
import { validator } from "../utils/validator";

const LoginForm = () => {
    const [theme, toggleTheme] = useDarkMode()
    ///
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    //const loginError = useSelector(getAuthErrors());
    const history = useHistory();
    const dispath = useDispatch();
   // const [errors, setErrors] = useState({});

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    /*const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            }
        },
        password: {
            isRequired: {
                message: "Пароль обязателeн для заполнения"
            }
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
    const isValid = Object.keys(errors).length === 0;*/

    const handleSubmit = (e) => {
        e.preventDefault();
        //const isValid = validate();
        //if (!isValid) return;
        const redirect = history.location.state
            ? history.location.state.from.pathname
            : "/";

        dispath(login({ payload: data, redirect }));
    };

    ///
    return ( 
    <div className={`theme-${theme}`}>
         <div className='darkmodeDiv'>
            <button className='darkModeButton' onClick={toggleTheme}>
                <span className="sun">☀️</span>
                <span className="moon">🌙</span>
            </button>
        </div>
    <section>
    <div className="form-box">
        <div className="form-value">
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className="inputbox">
                <ion-icon name="mail-outline"></ion-icon>
                    <input 
                    type="email" 
                    value={data.email}
                    onChange={handleChange}
                   // error={errors.email}
                    required/>
                    <label htmlFor="">Email</label>
                </div>
                <div className="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                    <input 
                        type="password" 
                        value={data.password}
                        onChange={handleChange}
                       // error={errors.password} 
                        required/>
                    <label htmlFor="">Password</label>
                </div>
                <div className="forget">
                <label htmlFor=""><a href="#">Forget password</a></label>
                </div>

                {/*loginError && <p className="text-danger">{loginError}</p>*/}

                <button 
                    className="logInButton" 
                    type="submit"
                    //disabled={!isValid}
                    >
                        LOG IN
                </button>
                <div className="register"><p>Don`t have an account?
                    <a href="#">Register</a></p>
                </div>
            </form>
            <Link className="nav-link" to={`/cars/createCar`}>Add Car</Link>
        </div>
    </div>
    </section>
    </div>
     );
}
 
export default LoginForm;


/*const LoginForm = () => {
    const [data, setData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});
    const [theme, toggleTheme] = useDarkMode()
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
         <div className='darkmodeDiv'>
            <button className='darkModeButton' onClick={toggleTheme}>
                <span className="sun">☀️</span>
                <span className="moon">🌙</span>
            </button>
        </div>
        <div className="container">
      
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
            <Link className="nav-link" to={`/cars/carEdit`}>Add Car</Link>
        </div>
        
        </div>
        </>
    );
};
export default LoginForm;*/
