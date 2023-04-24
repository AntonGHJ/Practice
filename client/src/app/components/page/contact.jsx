import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { validator } from "../../utils/validator";
import { useDispatch } from "react-redux";
import { addMessage } from "../../store/messages";

function Contact() {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const validatorConfig = {
    email: {
      isRequired: {
        message: "Электронная почта обязательна для заполнения",
      },
      isEmail: {
        message: "Email введен некорректно",
      },
    },
    name: {
      isRequired: {
        message: "Имя обязательно для заполнения",
      },
      min: {
        message: "Имя должено состаять минимум из 3 символов",
        value: 3,
      },
    },
    message: {
      isRequired: {
        message: "Введите ваше сообщение",
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
    const newData = {
      ...data,
    };
    console.log(newData);
    setShowSuccess(true);
    dispatch(addMessage(newData));
  };

  return (
    <>
      <Alert show={showSuccess} variant="success">
        Message sent successfully!
      </Alert>
      <section>
        <div className="form-box">
          <div className="form-value">
            <form action="">
              <h2>Contact us</h2>
              {errors.email && <p className="text-warning">{errors.email}</p>}
              <div className="inputbox">
                <input
                  type="text"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  error={errors.email}
                />
                <label htmlFor="">Enter your email</label>
              </div>
              {errors.name && <p className="text-warning">{errors.name}</p>}
              <div className="inputbox">
                <input
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                  error={errors.name}
                />
                <label htmlFor="">Enter your name </label>
              </div>
              {errors.message && (
                <p className="text-warning">{errors.message}</p>
              )}
              <div className="inputbox">
                <input
                  type="text"
                  name="message"
                  value={data.message}
                  onChange={handleChange}
                  error={errors.message}
                />
                <label htmlFor="">Enter your message</label>
              </div>
              <button
                disabled={!isValid}
                className="logInButton"
                onClick={handleSubmit}
              >
                Send message!
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
