import Main from './components/main';
import "./App.css"
import { Route, Switch } from "react-router-dom";
import Contact from './components/contact';
import NavBar from './components/navBar';
import CarsList from './components/carsList';
import Cars from './layouts/cars';
import CarPage from './components/carPage';
import Login from './layouts/loginForm';
import LoginForm from './layouts/loginForm';
import CarEdit from './components/carEdit';

function App() {
  return (
    
   <div className='App' style={{textAlign:'center'}}>
    <NavBar/>
    <Switch>
    <Route path='/cars/carEdit' component={CarEdit}/>
    <Route path='/cars/:carId?' component={Cars}/>
    
      <Route path='/carsList' component={CarsList}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/loginForm' exact component={LoginForm}/>
      <Route path='/' exact component={Main}/>
      
    </Switch>
  </div>
  );
}

export default App;
