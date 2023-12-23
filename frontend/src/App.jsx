import "./App.scss";
import Home from "./pages/home/Home";
import Register from "./pages/register/register";
import Watch from "./pages/watching/watch";
import Login from "./pages/login/login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  BrowserRouter,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";

const App = () => {
  const { user } = useContext(AuthContext);
  return (
  
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
         <Home />
        </Route>
        <Route path="/register">
        <Register />
        </Route>
        <Route path="/login"> <Login /></Route>
       
      </Switch>
      </BrowserRouter>
  );
};

export default App;
