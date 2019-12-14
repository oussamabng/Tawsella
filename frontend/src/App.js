import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./components/landing";
import Signin from "./components/signin";
import Signup from "./components/signup";
import NavbarClient from "./components/navbar";
import FooterClient from "./components/footer";
import Home from "./components/home";
import Test from "./components/test";
import Sender from "./components/sender";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
function App() {
  return (
    <>
      <NavbarClient />
      <BrowserRouter>
        <Switch>
          <Route path="/home" render={props => <Landing {...props} />} />
          <Route path="/signin" render={props => <Signin {...props} />} />
          <Route path="/signup" render={props => <Signup {...props} />} />
          <Route path="/user/home" render={props => <Home {...props} />} />
          <Route path="/delev" render={props => <Test {...props} />} />
          <Route path="/sender" render={props => <Sender {...props} />} />
          <Redirect from="/" to="/home" />
        </Switch>
      </BrowserRouter>
      <FooterClient />
    </>
  );
}

export default App;
