import Main from "./components/page/main";
import { Route, Switch } from "react-router-dom";
import Contact from "./components/page/contact";
import NavBar from "./components/page/navBar";
import Cars from "./layouts/cars";
import LoginForm from "./layouts/loginForm";
import CarEdit from "./components/carHandle/carEdit";
import CreateCar from "./components/carHandle/createCar";
import AppLoader from "./components/hoc/appLoader";
import RegisterForm from "./components/forms/registerForm";
import ProtectedRoute from "./components/protectedRoute";
import Users from "./layouts/users";
import LogOut from "./layouts/logOut";
import Messages from "./layouts/messages";
import ThemeSwitcher from "./utils/themeSwitcher.jsx";

function App() {
  return (
    <AppLoader>
      <div className="App">
        <NavBar />
        <ThemeSwitcher>
          <Switch>
            <ProtectedRoute path="/users/:userId?/:edit?" component={Users} />
            <Route path="/cars/:carId?/carEdit" component={CarEdit} />
            <Route path="/cars/createCar" component={CreateCar} />
            <Route path="/cars/:carId?" component={Cars} />
            <Route path="/loginForm/:type?" component={LoginForm} />
            <Route path="/messages" component={Messages} />
            <Route path="/contact" component={Contact} />
            <Route path="/loginForm" exact component={LoginForm} />
            <Route path="/logOut" component={LogOut} />
            <Route path="/registerForm" exact component={RegisterForm} />
            <Route path="/" exact component={Main} />
          </Switch>
        </ThemeSwitcher>
      </div>
    </AppLoader>
  );
}

export default App;
