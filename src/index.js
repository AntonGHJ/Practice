import React from 'react';
import "./index.css";
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
import { Router } from "react-router-dom";
import history from "./app/utils/history";
import store from './app/store/createStore';
import { Provider } from 'react-redux';



ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>    

    <Provider store={store}>

            <Router history={history}>
                <App />
            </Router>

    </Provider>  
  
  </React.StrictMode>
  </BrowserRouter>,
   document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
