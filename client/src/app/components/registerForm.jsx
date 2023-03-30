import React, { useEffect, useState } from "react";
import { validator } from "../utils/validator";
import { useDispatch } from "react-redux";
import { signUp } from "../store/users";
import useDarkMode from "../hooks/useDarkMode";
import { Link } from "react-router-dom";

const RegisterForm = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        email: "",
        password: ''
    });
    const [theme, toggleTheme] = useDarkMode()
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword((prevState) => !prevState);
    };
    const [errors, setErrors] = useState({});

    const handleChange = ({target}) => {
        setData((prevState) => ({
            ...prevState,
             
            [target.name]: target.value
        }));
    };
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
                message: "Имя обязательно для заполнения"
            },
            min: {
                message: "Имя должено состаять минимуm из 3 символов",
                value: 3
            }
        },
        password: {
            isRequired: {
                message: "Пароль обязателен для заполнения"
            },
            isCapitalSymbol: {
                message: "Пароль должен содержать хотя бы одну заглавную букву"
            },
            isContainDigit: {
                message: "Пароль должен содержать хотя бы одно число"
            },
            min: {
                message: "Пароль должен состаять минимум из 8 символов",
                value: 8
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
            ...data
        };
        dispatch(signUp(newData));
    };
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
                <h2>SIGN UP</h2>
                <div className="inputbox">
                <ion-icon name="mail-outline"></ion-icon>
                    <input 
                    type="email" 
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                   // error={errors.email}
                    required/>
                   
                    <label htmlFor="">Email</label>
                  
                </div>
                <div className="inputbox">
                <ion-icon 
                    style={{cursor:'pointer'}} 
                    name="lock-closed-outline" 
                    onClick={toggleShowPassword}>
                </ion-icon>
                    <input 
                        type="password" 
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                       // error={errors.password} 
                        required/>
                    <label htmlFor="">Password</label>
                </div>
                
                {/*loginError && <p className="text-danger">{loginError}</p>*/}

                <button 
                    className="logInButton" 
                    type="submit"
                    disabled={!isValid}
                    >
                        CONFIRM
                </button>
                <div className="register"><p>Already have an account?
                    <Link to={"/loginForm"}>Sign In</Link></p>
                </div>
            </form>
    </div>
</div>
</section>
</div>
    );
};

export default RegisterForm;
