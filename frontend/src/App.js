import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./components/landing";
import Signin from "./components/signin";
import Signup from "./components/signup";
import NavbarClient from "./components/navbar";
import FooterClient from "./components/footer";
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

          <Redirect from="/" to="/home" />
        </Switch>
      </BrowserRouter>
      <FooterClient />
    </>
  );
}

export default App;
