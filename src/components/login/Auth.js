import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ForgetPassword from "./ForgetPassword";
import Login from "./Login";
import SignUp from "./SignUp";

const Auth = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/forgetpassword" component={ForgetPassword} />
        <Route path="/signup" component={SignUp} />
        {/* <Route path="/home" component={Layout} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Auth;
