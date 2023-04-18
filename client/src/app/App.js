import Main from './components/main';
import "./App.css"
import { Route, Switch } from "react-router-dom";
import Contact from './components/contact';
import NavBar from './components/navBar';
import CarsList from './components/carsList';
import Cars from './layouts/cars';

import LoginForm from './layouts/loginForm';
import CarEdit from './components/carEdit';
import CreateCar from './components/createCar';
import AppLoader from './components/hoc/appLoader';
import RegisterForm from './components/registerForm';
import ProtectedRoute from './components/protectedRoute';
import Users from './layouts/users';
import LogOut from './layouts/logOut';

function App() {
  return (
    <AppLoader>
          <div className='App' style={{textAlign:'center'}}>
              <NavBar/>
                <Switch>
                <ProtectedRoute
                        path="/users/:userId?/:edit?"
                        component={Users}
                    />
                  <Route path='/cars/:carId?/carEdit' component={CarEdit}/>
                  <Route path='/cars/createCar' component={CreateCar}/>
                  <Route path='/cars/:carId?' component={Cars}/>
                  <Route path="/loginForm/:type?" component={LoginForm} />
                  <Route path='/carsList' component={CarsList}/>
                  <Route path='/contact' component={Contact}/>
                  <Route path='/loginForm' exact component={LoginForm}/>
                  <Route path='/logOut' component={LogOut}/>

                  <Route path='/registerForm' exact component={RegisterForm}/>
                  <Route path='/' exact component={Main}/>
                  
                </Switch>
          </div>
  </AppLoader>
  );
}

export default App;
